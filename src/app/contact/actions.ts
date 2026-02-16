"use server";

import { headers } from "next/headers";
import { getCloudflareContext } from "@opennextjs/cloudflare";
import { Resend } from "resend";
import { checkRateLimit } from "@/lib/rate-limit";
import { getAccessToken, appendToSheet } from "@/lib/google-sheets";
import { sendContactEmail } from "@/lib/send-email";

type SubmitResult = {
  success: boolean;
  error?: string;
};

const RATE_LIMIT = 5;

export async function submitContact(formData: FormData): Promise<SubmitResult> {
  // Extract fields
  const name = (formData.get("name") as string)?.trim() ?? "";
  const email = (formData.get("email") as string)?.trim() ?? "";
  const company = (formData.get("company") as string)?.trim() ?? "";
  const phone = (formData.get("phone") as string)?.trim() ?? "";
  const message = (formData.get("message") as string)?.trim() ?? "";
  const honeypot = (formData.get("website") as string) ?? "";

  // Honeypot check — bots fill hidden fields
  if (honeypot) {
    return { success: true };
  }

  // Server-side validation
  if (!name) return { success: false, error: "Name is required." };
  if (!email) return { success: false, error: "Email is required." };
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { success: false, error: "Please enter a valid email address." };
  }
  if (!message) return { success: false, error: "Message is required." };

  // Get Cloudflare context
  const { env } = getCloudflareContext();

  // Rate limiting
  const headersList = await headers();
  const ip = headersList.get("cf-connecting-ip") ?? headersList.get("x-forwarded-for") ?? "unknown";
  const { allowed } = await checkRateLimit(env.CONTACT_RATE_LIMIT, ip, RATE_LIMIT);
  if (!allowed) {
    return { success: false, error: "Too many submissions. Please try again later." };
  }

  // Send email + append to Google Sheets in parallel
  const timestamp = new Date().toISOString();
  const results = await Promise.allSettled([
    // Email via Resend
    (async () => {
      const resend = new Resend(env.RESEND_API_KEY);
      await sendContactEmail(resend, {
        from: env.RESEND_FROM_EMAIL,
        to: env.CONTACT_TO_EMAIL,
        name,
        email,
        company,
        phone,
        message,
      });
    })(),
    // Google Sheets
    (async () => {
      const serviceAccount = JSON.parse(env.GOOGLE_SERVICE_ACCOUNT_KEY) as {
        client_email: string;
        private_key: string;
      };
      const accessToken = await getAccessToken(
        serviceAccount.client_email,
        serviceAccount.private_key,
      );
      await appendToSheet(accessToken, env.GOOGLE_SHEET_ID, [
        [timestamp, name, email, company, phone, message],
      ]);
    })(),
  ]);

  // Log failures but don't expose to user
  for (const result of results) {
    if (result.status === "rejected") {
      console.error("Contact submission partial failure:", result.reason);
    }
  }

  // Only fail if both failed
  const allFailed = results.every((r) => r.status === "rejected");
  if (allFailed) {
    return { success: false, error: "Something went wrong. Please try again later." };
  }

  return { success: true };
}
