import { Resend } from "resend";

type ContactFields = {
  name: string;
  email: string;
  company: string;
  phone: string;
  message: string;
};

type SendEmailParams = ContactFields & {
  from: string;
  to: string;
};

export function formatContactEmail(fields: ContactFields): string {
  return [
    `Name: ${fields.name}`,
    `Email: ${fields.email}`,
    `Company: ${fields.company || "Not provided"}`,
    `Phone: ${fields.phone || "Not provided"}`,
    "",
    "Message:",
    fields.message,
  ].join("\n");
}

export async function sendContactEmail(
  resend: Resend,
  params: SendEmailParams,
): Promise<void> {
  const { data, error } = await resend.emails.send({
    from: params.from,
    to: params.to,
    subject: `New Contact Form Submission from ${params.name}`,
    replyTo: params.email,
    text: formatContactEmail(params),
  });

  if (error) {
    throw new Error(error.message);
  }
}
