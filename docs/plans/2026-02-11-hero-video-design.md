# Hero Section — 3D Video Split Layout

## Summary

Replace the centered text-only Hero with a two-column layout: text on the left, a looping 3D video (4:3 aspect ratio) on the right.

## Layout

- **Desktop (lg+):** Side-by-side grid, ~55% text / 45% video, vertically centered
- **Tablet (md):** Same split, tighter spacing
- **Mobile:** Stacked vertically — text on top, video below, both full-width

The section keeps `min-h-screen` and all existing background layers (gradients, grid overlay).

## Video

- **File:** `public/videos/metcoal.mp4` served at `/videos/metcoal.mp4`
- **Playback:** Autoplay, muted, loop, playsInline — no custom controls
- **Container:** 4:3 aspect ratio, rounded corners, subtle gold border, soft shadow
- **Object fit:** `object-cover` to fill the container without letterboxing
- **Loading:** `preload="metadata"` for fast initial paint

## Text Column

All existing content preserved (overline, heading, tagline, description, CTAs). Shifts from `text-center` to `text-left` on desktop. Scroll indicator stays centered across full width.

## Files Changed

- `src/components/sections/Hero.tsx` — Rework to two-column grid with `<video>` element
- `src/lib/constants.ts` — Add `heroVideo` path constant
