# Image Optimization Design

## Problem

Source images total ~52MB of uncompressed PNGs. On Cloudflare Workers, the first request triggers on-the-fly optimization with no cache, causing very slow initial page loads.

| Image | Size |
|---|---|
| hero-bg.png | 12 MB |
| processing.png | 15 MB |
| extraction.png | 9.3 MB |
| logistic.png | 9.3 MB |
| quality.png | 6.3 MB |
| pillbar-bg.png | 399 KB |

## Solution

Pre-optimize all images before committing. Convert PNGs to WebP, resize to max 1920px width, quality 80. Expected total size: 2-5MB.

## Implementation Steps

1. Install `sharp` as a dev dependency
2. Create `scripts/optimize-images.ts` — converts all PNGs in `src/assets/images/` to WebP (max 1920px wide, quality 80)
3. Run the script to generate optimized `.webp` files
4. Remove original large `.png` files from the repo
5. Update image imports in `Hero.tsx` and `Services.tsx` (`.png` → `.webp`)
6. Add `placeholder="blur"` to Services section images (Hero already has it)
7. Update `src/types/assets.d.ts` to declare `.webp` module types
8. Verify build with `npm run check`

## What Does Not Change

- `next.config.ts` — `next/image` handles WebP natively
- Deployment pipeline — same flow, smaller files
- Cloudflare config — no changes needed
