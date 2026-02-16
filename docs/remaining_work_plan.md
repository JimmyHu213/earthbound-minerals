# Earthbound Minerals — Remaining Work Plan

> Branch: `feature/content-update`
> Context: 35 of 51 content items completed. This plan covers the 16 remaining items.
> Reference: `docs/content_update_tracker.md` for full history of completed work.
> Content source: `docs/content_response/EBM_Website_Content_Merged.docx` (Updated_1 is priority)

---

## Phase 1: New Pages & Sections (can start immediately)

Content is ready in the merged docx. These don't require client assets to build — headshots/images can use placeholders.

### 1A. Leadership Team Page

- **Priority:** High
- **Route:** `/about` (new section) or `/about/team` (new page) — decide based on site IA
- **Source:** `EBM_Website_Content_Merged.docx` §9 (summary bios) + V2 Appendix (full bios)
- **Content ready for 5 people:**

| Name | Title | Experience |
|------|-------|------------|
| Stephen Freeman | Co-Founder & Managing Director | 33+ yrs coal mining (hard rock, underground, open-cut) |
| Rick Markham | Co-Founder & Managing Director | 20+ yrs mining, diagnostic fitter to mine site leadership |
| Doug McCabe | Chief Executive Officer | 50+ yrs mining/rail/infrastructure, $10B+ in projects |
| Suzanne Bennett | Chief Financial Officer | Advanced Diploma Accounting, international commodity trading |
| Geoff Shannon | VP Internal Sales & Export | International commodity trader, farm-to-market supply chain |

- **Implementation notes:**
  - Full multi-paragraph bios available in V2 Appendix for Stephen, Rick, Doug, Suzanne
  - Geoff Shannon summary bio only (from Updated_1 §6)
  - Use placeholder avatar images until client provides headshots (tracker item 8.5)
  - Follow existing component patterns (PascalCase, server components, Tailwind utilities)
  - Consider adding to `src/lib/constants.ts` as a `LEADERSHIP` export for consistency

### 1B. Coal Quality / SGS Lab Section

- **Priority:** High
- **Route:** New section on `/services` or standalone `/quality` page
- **Source:** `EBM_Website_Content_Merged.docx` §10

- **Key quality parameters to display:**

| Parameter | Value | Note |
|-----------|-------|------|
| Ash (Dry) | 3.76% | Platts PLV benchmark: 9.3% — 60% below |
| Sulfur (Dry) | 0.61% | Fastmarkets premium: <1% |
| Volatile Matter (Dry) | 34.93% | |
| Fixed Carbon (Dry) | 61.31% | |
| Gross Calorific Value | 14,859 Btu/lb | Dry basis |
| Free Swelling Index | 8.5 | Top of HCC range (6–9) |
| Gieseler Max Fluidity | >30,000 DDPM | Matches US HVA spec |
| Oxidation | 93–95%T | Fresh, unoxidized |

- **Additional content:**
  - "Why This Matters" narrative (from Updated_1 §7)
  - Benchmark comparison section (vs Platts PLV, Fastmarkets, IspatGuru HCC range)
  - Testing lab: SGS North America Inc., Harrogate, TN
  - ASTM methods: D3302, D3174, D3175, D4239, D5865, D720, D2639, D5515, D5263

### 1C. "Why Earthbound Minerals" Section

- **Priority:** Medium
- **Route:** New section on homepage or `/about` page
- **Source:** `EBM_Website_Content_Merged.docx` §6

- **5 differentiators to build:**

| Differentiator | Key Point |
|----------------|-----------|
| Premium Quality | Ash 3.7% (60% below Platts PLV), FSI 8.5, fluidity >30k DDPM |
| Proven Supply Chain | Liberty Mine → NorthStar → CSX/NS Rail → East Coast ports |
| Scalable Long-Term Supply | Up to 20-year agreements, 75k–160k MT/month, 1.92M MT/yr |
| Competitive Index-Linked Pricing | Fixed Year 1, SGX Australian Coking Coal index from Year 2 |
| World-Class Leadership | 100+ years combined, Hunter Valley + US operations |

- **Implementation notes:**
  - Intro text: "When global steelmakers evaluate coal supply partners, they look for quality, reliability, scale, and commercial transparency. Earthbound Minerals delivers on all four."
  - Could work well as a card grid or alternating text/visual sections

---

## Phase 2: Blocked on Client Input

These items cannot be completed until the client provides assets or decisions. Create placeholder/stub implementations where possible.

### 2A. Media & Assets (items 8.1–8.6)

| Item | What's Needed | Current State |
|------|--------------|---------------|
| 8.1 Hero image | Real aerial shot of Liberty Mine or Appalachian ops (min 1920x1080) | `hero-bg.webp` (stock) |
| 8.2 About video | Confirm `/videos/metcoal.mp4` exists or provide company video | References `metcoal.mp4` |
| 8.3 Service images x4 | Real photos: Mining, Processing, Logistics, Quality (min 1920x1280) | Stock `.webp` files |
| 8.4 Operations images | Unique photos per facility (Liberty Mine, NorthStar, Port terminals) | Reusing service stock |
| 8.5 Leadership headshots | Professional photos for 5 executives | None exist |
| 8.6 News images x4 | Real photos per article | Reusing stock |

**When assets arrive:** Drop images into `src/assets/images/`, convert to `.webp` for consistency, update imports in relevant components.

### 2B. News Article 4 (item 6.4)

- Client needs to provide a 4th news article (e.g. new customer win, export milestone, partnership)
- **File:** `src/app/news/page.tsx` — add to `LATEST_NEWS` array
- Currently 3 articles; grid layout handles 3 fine but 4 would fill better

### 2C. Contact Form Backend (item 9.1)

- Currently client-side only — shows "Thank you" but sends nothing
- **File:** `src/app/contact/page.tsx`
- **Options to implement once client decides:**
  - Email via Cloudflare Workers (Resend, SendGrid, or Mailgun API)
  - CRM integration
  - Simple email to `info@earthboundminerals.com` is most likely choice
- **Note:** Site deploys to Cloudflare Workers via OpenNext, so server-side API routes are available

### 2D. Social Media Links (item 9.2)

- No social profiles currently linked in footer
- **File:** `src/components/layout/Footer.tsx`
- LinkedIn at minimum recommended for B2B coal trading
- Add to `SITE` constant in `src/lib/constants.ts` when URLs provided

### 2E. Analytics (item 9.3)

- No analytics installed
- Google Analytics GA4 recommended
- **Implementation:** Add GA4 script to `src/app/layout.tsx` using `next/script` with `strategy="afterInteractive"`
- Needs tracking ID from client

---

## Phase 3: Legal & Compliance (deferred)

### 3A. Privacy Policy (item 9.4)

- Required for both US and Australian jurisdictions
- To be drafted as separate task
- Will need a `/privacy` route

### 3B. Terms of Service (item 9.5)

- Needs confirmation if required for launch or deferred
- Will need a `/terms` route if required

### 3C. Cookie Consent / GDPR (item 9.6)

- Only required if site targets or receives EU/UK traffic
- If needed: implement cookie consent banner component
- Depends on target market confirmation

---

## Technical Notes for Agents

- **Stack:** Next.js 16 (App Router), React 19, TypeScript 5.9 (strict), Tailwind CSS 4
- **Deploy:** Cloudflare Workers via `@opennextjs/cloudflare`
- **Path alias:** `@/*` maps to `./src/*`
- **Content pattern:** Static content lives in `src/lib/constants.ts`, not hardcoded in components
- **Component convention:** PascalCase filenames, default exports, `"use client"` only when needed
- **Brand colors:** `brand-gold` (#D4A843), `brand-stone`, `brand-black`, `brand-dark`, `brand-sand`
- **Validation:** Run `npm run check` (build + tsc) before committing
- **Commit convention:** Do not include co-author in commit messages
- **Working directory:** Only operate within current folder
