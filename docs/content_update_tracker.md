# Earthbound Minerals — Content Update Tracker

> Merged source: `docs/content_response/EBM_Website_Content_Merged.docx`
> Primary: `EBM_Website_Content_Updated_1.docx` | Secondary: `EBM_Website_Content_Response_V2.docx`
> Generated: 2026-02-16

## Status Legend

| Tag                | Meaning                              |
| ------------------ | ------------------------------------ |
| CONFIRMED          | Client approved — ready to implement |
| DRAFT              | Content provided — may need sign-off |
| NEEDS CONFIRMATION | Client must choose between options   |
| NEEDS INPUT        | Blocked — waiting on client          |
| NEW SECTION        | Does not exist on site yet           |

---

## 1. Global Site Constants (`src/lib/constants.ts`)

### 1.1 — Company Tagline (`SITE.tagline`)

- [ ] **NEEDS CONFIRMATION**
- **Current:** `"Powering Industries from the Ground Up"`
- **Option A (Updated_1):** `"Premium Coking Coal — From Mine to Market"`
- **Option B (V2 recommended):** `"From the Ground to the World — Premium Coal, Delivered."`
- **Option C:** `"Sourcing Excellence. Delivering Quality. Powering Industry."`
- **Option D:** `"Mine to Market — World-Class Coal Supply"`
- **Option E:** `"Built on Experience. Driven by Quality."`
- **File:** `src/lib/constants.ts:3`

### 1.2 — Company Description (`SITE.description`)

- [x] **DONE**
- ~~Generic minerals description~~
- **Updated to:** Shortened version of Updated_1 content — US-based coal supply company, premium metallurgical/thermal coal, SGS-verified, ultra-low-ash coking coal
- **File:** `src/lib/constants.ts:4-5`

### 1.3 — Phone Number (`SITE.phone`)

- [x] **DONE**
- **Name** `Mr Geoff Shannon`
- ~~**Current:** `"+1 (555) 000-0000"`~~
- **Updated to:** `"+61 430 067 311"`
- **File:** `src/lib/constants.ts:7`

### 1.4 — Office Address (`SITE.address`)

- [x] **DONE**
- ~~**Current:** `"123 Mining Avenue, Denver, CO 80202"`~~
- **Updated to:** `"281 Thomson Road, Apt 405, Pikeville, KY 41501"`
- **File:** `src/lib/constants.ts:8`

### 1.5 — Email (`SITE.email`)

- [x] **CONFIRMED — No change needed**
- **Value:** `"info@earthboundminerals.com"`

---

## 2. About Page

### 2.1 — Page Subtitle

- [x] **DONE**
- **Updated to:** `"Connecting world-class Appalachian coal resources with international markets through decades of mining, logistics, and commercial expertise."`
- **File:** `src/app/about/page.tsx:10`

### 2.2 — Story Heading

- [x] **DONE**
- **Updated to:** `"Founded on Decades of Mining Expertise"`
- **File:** `src/app/about/page.tsx:35`

### 2.3 — Story Paragraph 1

- [x] **DONE**
- **Updated to:** Updated_1 content — founding team, Appalachian Basin, Hunter Valley experience, Carbon Ridge Resources, Liberty Mine, NorthStar prep plant
- **File:** `src/app/about/page.tsx:38-44`

### 2.4 — Story Paragraph 2

- [x] **DONE**
- **Updated to:** Updated_1 content — CSX/Norfolk Southern rail, East Coast terminals, international shipping lanes
- **File:** `src/app/about/page.tsx:45-51`

### 2.5 — Mission Heading

- [x] **DONE**
- **Updated to:** `"Premium Coal for the Global Steel Industry"`
- **File:** `src/app/about/page.tsx:93`

### 2.6 — Mission Paragraphs

- [x] **DONE**
- **Updated to:** Updated_1 content — preferred supplier of premium metallurgical coal, supply chain reliability, index-linked pricing, high-quality steel depends on premium coking coal
- **File:** `src/app/about/page.tsx:98-113`

### 2.7 — Stat: Years Experience (`ADVANTAGES[0]`)

- [x] **DONE**
- ~~`title: "20+ Years Experience"` / `stat: "20+"` / `unit: "Years"`~~
- **Updated to:** `title: "Combined Experience"` / `stat: "100+"` / `unit: "Years"`
- **File:** `src/lib/constants.ts:52-57`

### 2.8 — Stat: Quality (`ADVANTAGES[1]`)

- [x] **DONE**
- ~~`title: "Sustainable Practices"` / `stat: "100%"` / `unit: "Compliant"`~~
- **Updated to:** `title: "Premium Quality"` / `stat: "60%"` / `unit: "Below Platts PLV"`
- **File:** `src/lib/constants.ts:58-63`

### 2.9 — Stat: Global Reach (`ADVANTAGES[2]`)

- [x] **DONE**
- ~~`title: "Global Reach"` / `stat: "30+"` / `unit: "Countries"`~~
- **Updated to:** `title: "International Markets"` / `stat: "Global"` / `unit: "Reach"`
- **File:** `src/lib/constants.ts:64-69`

### 2.10 — Stat: Quality Cert (`ADVANTAGES[3]`)

- [x] **DONE**
- ~~`title: "Certified Quality"` / `stat: "ISO"` / `unit: "9001"`~~
- **Updated to:** `title: "SGS Verified"` / `stat: "SGS"` / `unit: "ASTM"`
- **File:** `src/lib/constants.ts:70-76`

---

## 3. Services

### 3.1 — Service 1: Tab & Title

- [x] **DONE**
- **Updated to:** `tab: "Coal Mining"` / `title: "Coal Mining & Extraction"`
- **File:** `src/lib/constants.ts:21-27`

### 3.2 — Service 1: Description

- [x] **DONE**
- **Updated to:** Updated_1 — HVB coking coal, Pocahontas Alma seam, Central Appalachian coalfield
- **File:** `src/lib/constants.ts:24-25`

### 3.3 — Service 1: Bullets (services page)

- [x] **DONE**
- **Updated to:** Liberty Mine, Pocahontas Alma Seam WV & KY, Ash 3.7%, Sulfur 0.6%
- **File:** `src/app/services/page.tsx:16-20`

### 3.4 — Service 2: Tab & Title

- [x] **DONE**
- **Updated to:** `tab: "Processing"` / `title: "Processing & Preparation"`
- **File:** `src/lib/constants.ts:28-34`

### 3.5 — Service 2: Description

- [x] **DONE**
- **Updated to:** Updated_1 — NorthStar preparation plant, Kimper KY, SGS-verified
- **File:** `src/lib/constants.ts:31-32`

### 3.6 — Service 2: Bullets

- [x] **DONE**
- **Updated to:** NorthStar Kimper KY, Fluidity >30k DDPM, FSI 8.5, ~14,850 Btu/lb
- **File:** `src/app/services/page.tsx:22-26`

### 3.7 — Service 3: Description

- [x] **DONE**
- **Updated to:** Updated_1 — CSX/Norfolk Southern, unit train service, FOB Port Newark/Curtis Bay
- **File:** `src/lib/constants.ts:38-39`

### 3.8 — Service 3: Bullets

- [x] **DONE**
- **Updated to:** CSX/NS rail, Newark/Elizabeth/South Kearny, PNCT, Millennium Marine Rail, FOB East Coast
- **File:** `src/app/services/page.tsx:28-32`

### 3.9 — Service 4: Tab & Title

- [x] **DONE** (used Updated_1 priority — kept as Quality Assurance)
- **Kept:** `tab: "Quality"` / `title: "Quality Assurance"` (SGS focus per Updated_1)
- **File:** `src/lib/constants.ts:42-48`

### 3.10 — Service 4: Description

- [x] **DONE**
- **Updated to:** Updated_1 — SGS verified, ASTM standards, all key quality parameters, buyer rejection rights
- **File:** `src/lib/constants.ts:45-46`

### 3.11 — Service 4: Bullets

- [x] **DONE**
- **Updated to:** Updated_1 — SGS North America Harrogate TN, ASTM methods, buyer rejection rights, full traceability
- **File:** `src/app/services/page.tsx:34-38`

---

## 4. Operations

### 4.1 — Operation 1

- [x] **DONE**
- **Updated to:** `"Liberty Mine — Central Appalachia"` / WV & Kentucky / Underground Coal Mining — Pocahontas Alma Seam
- **File:** `src/lib/constants.ts:80-86`

### 4.2 — Operation 2

- [x] **DONE**
- ~~`"Rocky Mountain Complex"` / Colorado — FICTIONAL~~
- **Updated to:** `"NorthStar Preparation Plant"` / Kimper, KY / Coal Processing & Preparation
- **File:** `src/lib/constants.ts:87-93`

### 4.3 — Operation 3

- [x] **DONE**
- ~~`"Gulf Coast Terminal"` / Louisiana — FICTIONAL~~
- **Updated to:** `"East Coast Export Terminal"` / Port Newark, NJ & Curtis Bay, Baltimore
- **File:** `src/lib/constants.ts:94-100`

### 4.4 — Operations Stats Bar

- [x] **DONE**
- ~~`"5M+ Tons"` / `"30+ Countries"` / `"20+ Years"`~~
- **Updated to:** `"160k MT/Month Capacity"` / `"1.92M MT/Year at Full Ramp"` / `"100+ Years Combined Experience"`
- **File:** `src/app/operations/page.tsx:12-16`

---

## 5. Sustainability

### 5.1 — Intro Paragraphs

- [x] **DONE**
- **Updated to:** V2 content — responsible resource development, operating with integrity, practical approach grounded in decades of mining experience
- **File:** `src/app/sustainability/page.tsx:44-61`

### 5.2 — Pillar 1: Environmental Stewardship (text)

- [x] **DONE**
- **Updated in:** `src/lib/constants.ts` (pillar description) + `src/app/sustainability/page.tsx` (detail text)
- **File:** `src/lib/constants.ts:105-107` + `src/app/sustainability/page.tsx:15`

### 5.3 — Pillar 1: Metric **REMOVE**

- [x] **DONE**
- ~~`stat: "95%"` / `label: "Water Recycled"`~~
- **Removed:** Metric set to `null`, component updated to skip rendering when null
- **File:** `src/app/sustainability/page.tsx:8`

### 5.4 — Pillar 2: Community Investment (text)

- [x] **DONE**
- ~~Generic community partnerships text~~
- **Updated in:** `src/lib/constants.ts` (pillar description) + `src/app/sustainability/page.tsx` (detail text)
- **File:** `src/lib/constants.ts:110-112`

### 5.5 — Pillar 2: Metric

- [x] **DONE**
- ~~`stat: "500+"` / `label: "Local Jobs Created"`~~
- **Updated to:** `stat: "✔"` / `label: "Committed to Local Employment"`
- **File:** `src/app/sustainability/page.tsx:9`

### 5.6 — Pillar 3: Safety Excellence (text)

- [x] **DONE**
- ~~Generic zero-harm targets text~~
- **Updated in:** `src/lib/constants.ts` (pillar description) + `src/app/sustainability/page.tsx` (detail text)
- **File:** `src/lib/constants.ts:114-117` + `src/app/sustainability/page.tsx:17`

### 5.7 — Pillar 3: Metric

- [ ] **NEEDS CONFIRMATION**
- **Current:** `stat: "0"` / `label: "Lost-Time Incidents"`
- **Action:** Docs don't specify a replacement number metric. Remove or keep?
- **File:** `src/app/sustainability/page.tsx:10`

### 5.8 — Pillar 4: Text

- [x] **DONE**
- ~~Generic traceability text~~
- **Updated in:** `src/lib/constants.ts` (pillar description) + `src/app/sustainability/page.tsx` (detail text)
- **File:** `src/lib/constants.ts:120-122`

### 5.9 — Pillar 4: Metric

- [x] **CONFIRMED — No change needed**
- **Value:** `stat: "100%"` / `label: "Traceable Sources"`

### 5.10 — Future Target: Net-Zero 2030 **REMOVE**

- [x] **DONE**
- ~~`stat: "2030"` / `label: "Net-Zero Target"`~~
- **Removed.** Grid updated from 3-col to 2-col layout.
- **File:** `src/app/sustainability/page.tsx:148`

### 5.11 — Future Target: 30% Carbon Reduction

- [ ] **NEEDS CONFIRMATION**
- **Current:** `stat: "30%"` / `label: "Carbon Reduction Target"`
- **Action:** Confirm this is an accurate public commitment
- **File:** `src/app/sustainability/page.tsx:146`

### 5.12 — Future Target: 100% Site Rehabilitation

- [ ] **NEEDS CONFIRMATION**
- **Current:** `stat: "100%"` / `label: "Site Rehabilitation Goal"`
- **Action:** Confirm this is an accurate public commitment
- **File:** `src/app/sustainability/page.tsx:147`

---

## 6. News

### 6.1 — Article 1 (featured)

- [x] **DONE**
- **Updated to:** "Liberty Mine Coal Exceeds International Quality Benchmarks" (Feb 2026)
- **File:** `src/app/news/page.tsx:18-22`

### 6.2 — Article 2

- [x] **DONE**
- **Updated to:** "World-Class Leadership Team Assembled" (Jan 2026)
- **File:** `src/app/news/page.tsx:23-28`

### 6.3 — Article 3

- [x] **DONE**
- **Updated to:** "Earthbound Minerals Launches Operations in Appalachian Basin" (May 2024)
- **Note:** Reduced from 4 to 3 articles (article 4 awaiting client input). Ordered newest first.
- **File:** `src/app/news/page.tsx:29-34`

### 6.4 — Article 4

- [ ] **NEEDS INPUT**
- **Current:** "Sustainable Mining Initiative" (Nov 2025) — placeholder
- **New:** Client to provide — e.g., new customer win, export milestone, partnership
- **File:** `src/app/news/page.tsx:35-43`

---

## 7. New Sections (do not exist on site yet)

### 7.1 — Leadership Team Page/Section

- [ ] **DRAFT — NEW SECTION**
- **Content:** Full bios for Stephen Freeman, Rick Markham, Doug McCabe, Suzanne Bennett, Geoff Shannon
- **Blocked:** Needs professional headshots from client
- **Source:** Updated_1 §6 + V2 Appendix (full bios)

### 7.2 — Coal Quality / SGS Lab Section

- [ ] **DRAFT — NEW SECTION**
- **Content:** Full SGS analysis data, benchmark comparisons, "Why This Matters" narrative
- **Source:** Updated_1 §7

### 7.3 — "Why Earthbound Minerals" Section

- [ ] **DRAFT — NEW SECTION**
- **Content:** Premium Quality, Proven Supply Chain, Scalable Long-Term Supply, Competitive Pricing, World-Class Leadership
- **Source:** Updated_1 §5

---

## 8. Media & Assets

### 8.1 — Hero Image

- [ ] **NEEDS INPUT**
- **Current:** `hero-bg.webp` (stock photo)
- **Needed:** Real aerial shot of Liberty Mine or Appalachian ops (min 1920x1080px)

### 8.2 — About Video

- [ ] **NEEDS INPUT**
- **Current:** `/videos/metcoal.mp4`
- **Action:** Confirm file exists or provide company overview video

### 8.3 — Service Images (x4)

- [ ] **NEEDS INPUT**
- **Current:** Stock `.webp` files (`extraction.webp`, `processing.webp`, `logistic.webp`, `quality.webp`)
- **Needed:** Real operational photos for Mining, Processing/Washing, Logistics/Rail, Quality/Trading (min 1920x1280)

### 8.4 — Operations Images

- [ ] **NEEDS INPUT**
- **Current:** Reusing service stock images
- **Needed:** Unique photos per facility (Liberty Mine, NorthStar, Port terminals)

### 8.5 — Leadership Headshots

- [ ] **NEEDS INPUT**
- **Needed:** Professional photos for Stephen Freeman, Rick Markham, Doug McCabe, Suzanne Bennett, Geoff Shannon

### 8.6 — News Article Images (x4)

- [ ] **NEEDS INPUT**
- **Current:** Reusing stock images
- **Needed:** Real photos corresponding to each article

---

## 9. Functionality & Legal

### 9.1 — Contact Form Backend

- [ ] **NEEDS INPUT**
- **Current:** Client-side only — shows "Thank you" but sends nothing
- **Action:** Where should submissions go? (email, CRM, other)

### 9.2 — Social Media Links

- [ ] **NEEDS INPUT**
- **Current:** None linked in footer
- **Action:** Provide URLs (LinkedIn recommended at minimum for B2B)

### 9.3 — Analytics

- [ ] **NEEDS INPUT**
- **Current:** Not installed
- **Action:** Google Analytics GA4 recommended. Provide tracking ID.

### 9.4 — Privacy Policy

- [ ] **CONFIRMED**
- **Action:** Required for US and Australia — to be drafted separately

### 9.5 — Terms of Service

- [ ] **NEEDS CONFIRMATION**
- **Action:** Confirm if required for launch or deferred

### 9.6 — Cookie Consent (GDPR)

- [ ] **NEEDS CONFIRMATION**
- **Action:** Depends on target markets — needed if EU/UK traffic expected
