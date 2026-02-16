import { describe, it, expect, vi } from "vitest";
import { formatContactEmail, sendContactEmail } from "../send-email";

describe("formatContactEmail", () => {
  it("formats email body with all fields", () => {
    const body = formatContactEmail({
      name: "John Doe",
      email: "john@example.com",
      company: "Acme Corp",
      phone: "+1 555-0000",
      message: "Hello, I'm interested in your services.",
    });

    expect(body).toContain("John Doe");
    expect(body).toContain("john@example.com");
    expect(body).toContain("Acme Corp");
    expect(body).toContain("+1 555-0000");
    expect(body).toContain("Hello, I'm interested in your services.");
  });

  it("handles missing optional fields", () => {
    const body = formatContactEmail({
      name: "Jane",
      email: "jane@example.com",
      company: "",
      phone: "",
      message: "Quick question.",
    });

    expect(body).toContain("Jane");
    expect(body).toContain("jane@example.com");
    expect(body).toContain("Not provided");
    expect(body).toContain("Quick question.");
  });
});

describe("sendContactEmail", () => {
  it("calls Resend API with correct payload", async () => {
    const mockSend = vi.fn().mockResolvedValue({ data: { id: "email-123" }, error: null });
    const mockResend = { emails: { send: mockSend } };

    await sendContactEmail(mockResend as any, {
      from: "noreply@earthboundminerals.com",
      to: "info@earthboundminerals.com",
      name: "John Doe",
      email: "john@example.com",
      company: "Acme",
      phone: "555-0000",
      message: "Hello",
    });

    expect(mockSend).toHaveBeenCalledWith(
      expect.objectContaining({
        from: "noreply@earthboundminerals.com",
        to: "info@earthboundminerals.com",
        subject: "New Contact Form Submission from John Doe",
        replyTo: "john@example.com",
      }),
    );
  });

  it("throws on Resend error", async () => {
    const mockSend = vi.fn().mockResolvedValue({
      data: null,
      error: { message: "API key invalid" },
    });
    const mockResend = { emails: { send: mockSend } };

    await expect(
      sendContactEmail(mockResend as any, {
        from: "noreply@test.com",
        to: "info@test.com",
        name: "Test",
        email: "test@test.com",
        company: "",
        phone: "",
        message: "Test",
      }),
    ).rejects.toThrow("API key invalid");
  });
});
