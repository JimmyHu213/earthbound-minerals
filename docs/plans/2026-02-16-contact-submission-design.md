# Contact Form Submission Design

## Overview

Wire up the existing contact form at `/contact` to actually submit data. Submissions go to Google Sheets (storage) and trigger an email notification via Resend. Includes honeypot spam protection and IP-based rate limiting via Cloudflare KV.

## Architecture: Next.js Server Action

The form submits via a Server Action (`"use server"`). This is the most idiomatic approach for Next.js 16, requires no separate API route, and deploys as part of the existing Cloudflare Worker via OpenNext.

## Data Flow

```
User fills form → Client validation → Server Action (submitContact)
                                        ├─→ Honeypot check (if bot → silent success)
                                        ├─→ Rate limit check via KV (if exceeded → error)
                                        ├─→ Server-side validation
                                        ├─→ Resend API + Google Sheets API (parallel)
                                        └─→ Increment rate counter in KV
                                        → Return success/error to client
```

## Files to Create/Modify

| File | Action | Purpose |
|------|--------|---------|
| `src/app/contact/actions.ts` | Create | Server action `submitContact()` |
| `src/app/contact/page.tsx` | Modify | Wire form to server action, add honeypot field |
| `src/lib/google-sheets.ts` | Create | Google Sheets API helper (append row) |
| `src/lib/resend.ts` | Create | Resend email helper (send notification) |

## Server Action (`submitContact`)

- Receives `FormData` from the form
- Validates all fields server-side (name, email, message required)
- Checks honeypot field (if filled → silently return success)
- Checks rate limit via Cloudflare KV
- Calls Resend + Google Sheets in parallel via `Promise.all`
- Returns `{ success: boolean; error?: string }`

## Email (via Resend)

- **To:** `info@earthboundminerals.com`
- **From:** `noreply@earthboundminerals.com` (requires domain verification in Resend)
- **Subject:** `New Contact Form Submission from {name}`
- **Body:** Plain text with all form fields formatted

## Google Sheets

- **Columns:** Timestamp | Name | Email | Company | Phone | Message
- Uses Google Sheets API v4 via service account
- Service account JSON key stored as an environment secret

## Honeypot Spam Protection

- Hidden field named `website`
- CSS `display: none` + `aria-hidden="true"` + `tabindex="-1"`
- If filled by a bot, server action returns success but skips all processing

## Rate Limiting

- **Limit:** 5 submissions per IP per hour
- **Storage:** Cloudflare KV namespace (`CONTACT_RATE_LIMIT`)
- **Key format:** `rate:{ip}` with 1-hour TTL
- **Behavior:** If count >= 5, return error "Too many submissions. Please try again later." Otherwise increment and proceed.

## Environment Secrets & Bindings

| Secret/Binding | Type | Purpose |
|----------------|------|---------|
| `RESEND_API_KEY` | Secret | Resend API authentication |
| `GOOGLE_SERVICE_ACCOUNT_KEY` | Secret | JSON key for Sheets API access |
| `GOOGLE_SHEET_ID` | Secret | Target spreadsheet ID |
| `CONTACT_RATE_LIMIT` | KV Binding | Rate limit counter storage |

Secrets stored via `wrangler secret put`. KV namespace created via `wrangler kv namespace create`.

## Error Handling

- If Resend fails but Sheets succeeds (or vice versa): return success to user, log the error
- If both fail: return generic error message, don't expose internals
- Client shows inline message based on server action response
