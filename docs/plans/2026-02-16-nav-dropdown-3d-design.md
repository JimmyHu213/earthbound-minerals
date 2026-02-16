# Nav Dropdown Cards with 3D Animations

**Date:** 2026-02-16
**Status:** Approved

## Overview

Add hover/tap dropdown cards to all 5 navigation items (About, Services, Operations, Sustainability, News) in both the normal header and pill bar. Each card features a 3D animated geometric shape rendered with React Three Fiber on top, and sub-section anchor links below.

## Data Structure

Extend `NAV_LINKS` in `src/lib/constants.ts` with `subLinks` for each nav item:

- **About:** Our Story, Stats, Who We Are, Why Earthbound Minerals
- **Services:** Extraction & Mining, Processing & Refining, Logistics & Distribution, Quality Assurance
- **Operations:** Appalachian Basin, Rocky Mountain Complex, Gulf Coast Terminal
- **Sustainability:** Environmental Stewardship, Community Investment, Safety Excellence, Responsible Supply Chain (anchor links only, no subpages)
- **News:** Global News, Newsletters

All sub-links use anchor fragments (`#section`) pointing to sections on existing pages.

## Dependencies

- `@react-three/fiber` — React renderer for Three.js
- `@react-three/drei` — Helper components (geometries, lighting)
- `three` — Core Three.js library (peer dependency)

## Component Architecture

### New Files

```
src/components/layout/NavDropdown.tsx   — Dropdown card component
src/components/three/NavScene.tsx       — Scene picker per nav item
src/components/three/AboutScene.tsx     — Rotating icosahedron crystal
src/components/three/ServicesScene.tsx   — Flowing torus knot
src/components/three/OperationsScene.tsx — 3 orbiting octahedrons
src/components/three/SustainScene.tsx    — Sphere with orbital ring
src/components/three/NewsScene.tsx       — Rotating wireframe dodecahedron
```

### Modified Files

- `src/lib/constants.ts` — Add `subLinks` array to each nav item
- `src/components/layout/Header.tsx` — Add dropdown state, hover/tap handlers, pill bar overflow fix

## NavDropdown Component

### Layout (vertical)

```
┌─────────────────────┐
│   3D Canvas (~120px) │
│   (animated shape)   │
├─────────────────────┤
│  Sub-link 1    →    │
│  Sub-link 2    →    │
│  Sub-link 3    →    │
│  Sub-link 4    →    │
└─────────────────────┘
```

### Styling

- Width: ~280px
- Background: `bg-brand-black/90 backdrop-blur-md`
- Border: `border border-brand-gold/20`
- Corners: `rounded-xl`
- Animation: fade in + slide down (opacity + translateY CSS transition)

### Behavior

- **Desktop:** Opens on `mouseenter` of nav link, stays open while hovering card, closes on `mouseleave` with ~150ms delay to prevent flicker
- **Mobile:** Opens on tap of nav link, closes on outside tap or sub-link selection
- **Keyboard:** Opens on `focus`, closes on `Escape`

## 3D Scenes

Each scene uses basic Three.js geometries — no external model files.

| Nav Item | Shape | Animation |
|----------|-------|-----------|
| About | Icosahedron (wireframe crystal) | Slow Y-axis rotation |
| Services | Torus Knot | Smooth Y-axis rotation |
| Operations | 3 Octahedrons | Orbital animation around center |
| Sustainability | Sphere + ring | Ring orbits the sphere |
| News | Dodecahedron (wireframe) | Dual-axis rotation |

### Shared Config

- `<Canvas>` with transparent background (`gl={{ alpha: true }}`)
- Ambient light (0.5) + directional light (1.0, upper right)
- Material: `MeshStandardMaterial`, color `#D4A843`, slight metallic sheen
- Rotation speed: ~0.3-0.5 rad/s
- Canvas height: ~120px (desktop), ~80px (mobile)

## Header Integration

### State

- `activeDropdown: string | null` — tracks which nav item's dropdown is open

### Pill Bar Fix

The pill bar currently uses `overflow-hidden` + `rounded-full` on its container, which would clip the dropdown. Fix: move `overflow-hidden` to an inner wrapper or use a pseudo-element for the rounded background, allowing the dropdown to position absolutely below without clipping.

### Accessibility

- `aria-expanded` on nav triggers
- `role="menu"` on dropdown, `role="menuitem"` on sub-links
- `Escape` key closes dropdown
- Focus management for keyboard navigation
