# Nav Dropdown Cards with 3D Animations — Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Add hover/tap dropdown cards with React Three Fiber 3D animations to all 5 nav items in both header modes.

**Architecture:** Extend NAV_LINKS with subLinks data, create a NavDropdown component with an embedded R3F Canvas, wire it into the existing Header component for both normal and pill bar modes. Each nav item gets a unique 3D geometric scene. Add anchor `id` attributes to existing page sections so sub-links scroll to the right spot.

**Tech Stack:** React Three Fiber, @react-three/drei, Three.js, Next.js App Router, Tailwind CSS 4

---

### Task 1: Install Three.js Dependencies

**Files:**
- Modify: `package.json`

**Step 1: Install packages**

Run: `npm install three @react-three/fiber @react-three/drei`

Expected: Packages added to dependencies in package.json.

**Step 2: Install Three.js type definitions**

Run: `npm install --save-dev @types/three`

Expected: @types/three added to devDependencies.

**Step 3: Verify build still works**

Run: `npm run build`

Expected: Build completes without errors.

**Step 4: Commit**

```bash
git add package.json package-lock.json
git commit -m "chore: add react-three-fiber and drei dependencies"
```

---

### Task 2: Update NAV_LINKS Data Structure

**Files:**
- Modify: `src/lib/constants.ts`

**Step 1: Update NAV_LINKS with subLinks**

Replace the existing `NAV_LINKS` export in `src/lib/constants.ts` with:

```ts
export const NAV_LINKS = [
  {
    label: "About",
    href: "/about",
    subLinks: [
      { label: "Our Story", href: "/about#story" },
      { label: "Stats", href: "/about#stats" },
      { label: "Who We Are", href: "/about#who-we-are" },
      { label: "Why Earthbound Minerals", href: "/about#why-us" },
    ],
  },
  {
    label: "Services",
    href: "/services",
    subLinks: [
      { label: "Extraction & Mining", href: "/services#extraction" },
      { label: "Processing & Refining", href: "/services#processing" },
      { label: "Logistics & Distribution", href: "/services#logistics" },
      { label: "Quality Assurance", href: "/services#quality" },
    ],
  },
  {
    label: "Operations",
    href: "/operations",
    subLinks: [
      { label: "Appalachian Basin", href: "/operations#appalachian" },
      { label: "Rocky Mountain Complex", href: "/operations#rocky-mountain" },
      { label: "Gulf Coast Terminal", href: "/operations#gulf-coast" },
    ],
  },
  {
    label: "Sustainability",
    href: "/sustainability",
    subLinks: [
      { label: "Environmental Stewardship", href: "/sustainability#environmental" },
      { label: "Community Investment", href: "/sustainability#community" },
      { label: "Safety Excellence", href: "/sustainability#safety" },
      { label: "Responsible Supply Chain", href: "/sustainability#supply-chain" },
    ],
  },
  {
    label: "News",
    href: "/news",
    subLinks: [
      { label: "Global News", href: "/news#global" },
      { label: "Newsletters", href: "/news#newsletters" },
    ],
  },
] as const;
```

**Step 2: Fix any type errors caused by the new shape**

The Header currently iterates `NAV_LINKS` and accesses `link.href` and `link.label`. Since those properties still exist, there should be no type errors. Verify:

Run: `npx tsc --noEmit`

Expected: No type errors.

**Step 3: Commit**

```bash
git add src/lib/constants.ts
git commit -m "feat: add subLinks to NAV_LINKS for dropdown navigation"
```

---

### Task 3: Add Anchor IDs to Existing Page Sections

**Files:**
- Modify: `src/app/about/page.tsx` — Add `id` attributes to the 3 existing sections
- Modify: `src/app/services/page.tsx` — Add `id` attributes to each service block
- Modify: `src/app/operations/page.tsx` — Add `id` attributes to each facility card
- Modify: `src/app/sustainability/page.tsx` — Add `id` attributes to each pillar section
- Modify: `src/app/news/page.tsx` — Add `id` attributes to featured/grid sections

**Step 1: About page anchors**

In `src/app/about/page.tsx`:
- Story section (`<section className="bg-white py-24 lg:py-32">` at line 15): add `id="story"`
- Stats section (`<section className="bg-brand-black py-24 lg:py-32">` at line 63): add `id="stats"`
- Mission section (`<section className="bg-brand-sand py-24 lg:py-32">` at line 87): add `id="who-we-are"`

The About page currently has 3 sections. The "Why Earthbound Minerals" sub-link maps to the existing `/about` page hero which already covers this — use `id="why-us"` on the PageHero wrapper or the first section. Since the PageHero is at the top of the page, navigating to `/about#why-us` can simply target the story section or we add a small `<div id="why-us" />` just after the PageHero.

**Step 2: Services page anchors**

In `src/app/services/page.tsx`:
- Each service is rendered inside a `.map()` at line 77. Add `id` to each service's container `<div>` using a slug derived from the service tab:
  - `id="extraction"` for i=0
  - `id="processing"` for i=1
  - `id="logistics"` for i=2
  - `id="quality"` for i=3

Add a `SERVICE_IDS` array:
```ts
const SERVICE_IDS = ["extraction", "processing", "logistics", "quality"];
```

Then add `id={SERVICE_IDS[i]}` to the outer `<div>` of each service in the map (the div at line 80).

**Step 3: Operations page anchors**

In `src/app/operations/page.tsx`:
- Each operation card is in a `.map()` at line 31. Add `id` to each card's container `<div>`:
  - `id="appalachian"` for i=0
  - `id="rocky-mountain"` for i=1
  - `id="gulf-coast"` for i=2

Add an `OPERATION_IDS` array:
```ts
const OPERATION_IDS = ["appalachian", "rocky-mountain", "gulf-coast"];
```

Then add `id={OPERATION_IDS[i]}` to the card `<div>` at line 33.

**Step 4: Sustainability page anchors**

In `src/app/sustainability/page.tsx`:
- Each pillar section is rendered in a `.map()` at line 67. Add `id` to each `<section>`:
  - `id="environmental"` for index=0
  - `id="community"` for index=1
  - `id="safety"` for index=2
  - `id="supply-chain"` for index=3

Add a `PILLAR_IDS` array:
```ts
const PILLAR_IDS = ["environmental", "community", "safety", "supply-chain"];
```

Then add `id={PILLAR_IDS[index]}` to the `<section>` at line 104.

**Step 5: News page anchors**

In `src/app/news/page.tsx`:
- Featured article section (line 58): add `id="global"`
- Article grid section (line 93): add `id="newsletters"`

**Step 6: Verify build**

Run: `npm run build`

Expected: Build completes without errors.

**Step 7: Commit**

```bash
git add src/app/about/page.tsx src/app/services/page.tsx src/app/operations/page.tsx src/app/sustainability/page.tsx src/app/news/page.tsx
git commit -m "feat: add anchor IDs to page sections for dropdown navigation"
```

---

### Task 4: Create 3D Scene Components

**Files:**
- Create: `src/components/three/AboutScene.tsx`
- Create: `src/components/three/ServicesScene.tsx`
- Create: `src/components/three/OperationsScene.tsx`
- Create: `src/components/three/SustainScene.tsx`
- Create: `src/components/three/NewsScene.tsx`
- Create: `src/components/three/NavScene.tsx`

All scene components are `"use client"` components.

**Step 1: Create AboutScene — rotating wireframe icosahedron**

Create `src/components/three/AboutScene.tsx`:

```tsx
"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Icosahedron } from "@react-three/drei";
import type { Mesh } from "three";

export default function AboutScene() {
  const meshRef = useRef<Mesh>(null);

  useFrame((_, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.4;
      meshRef.current.rotation.x += delta * 0.1;
    }
  });

  return (
    <Icosahedron ref={meshRef} args={[1, 0]}>
      <meshStandardMaterial
        color="#D4A843"
        wireframe
        metalness={0.6}
        roughness={0.3}
      />
    </Icosahedron>
  );
}
```

**Step 2: Create ServicesScene — rotating torus knot**

Create `src/components/three/ServicesScene.tsx`:

```tsx
"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import type { Mesh } from "three";

export default function ServicesScene() {
  const meshRef = useRef<Mesh>(null);

  useFrame((_, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.3;
    }
  });

  return (
    <mesh ref={meshRef}>
      <torusKnotGeometry args={[0.7, 0.25, 80, 16]} />
      <meshStandardMaterial
        color="#D4A843"
        metalness={0.7}
        roughness={0.2}
      />
    </mesh>
  );
}
```

**Step 3: Create OperationsScene — 3 orbiting octahedrons**

Create `src/components/three/OperationsScene.tsx`:

```tsx
"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Octahedron } from "@react-three/drei";
import type { Group } from "three";

export default function OperationsScene() {
  const groupRef = useRef<Group>(null);

  useFrame((_, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.4;
    }
  });

  const positions: [number, number, number][] = [
    [0, 0, 0],
    [1.2, 0.3, 0],
    [-1.0, -0.3, 0.5],
  ];

  return (
    <group ref={groupRef}>
      {positions.map((pos, i) => (
        <Octahedron key={i} args={[0.4, 0]} position={pos}>
          <meshStandardMaterial
            color="#D4A843"
            metalness={0.6}
            roughness={0.3}
            wireframe={i === 0}
          />
        </Octahedron>
      ))}
    </group>
  );
}
```

**Step 4: Create SustainScene — sphere with orbital ring**

Create `src/components/three/SustainScene.tsx`:

```tsx
"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Sphere, Torus } from "@react-three/drei";
import type { Group } from "three";

export default function SustainScene() {
  const ringRef = useRef<Group>(null);

  useFrame((_, delta) => {
    if (ringRef.current) {
      ringRef.current.rotation.z += delta * 0.5;
      ringRef.current.rotation.x += delta * 0.2;
    }
  });

  return (
    <group>
      <Sphere args={[0.6, 32, 32]}>
        <meshStandardMaterial
          color="#D4A843"
          metalness={0.5}
          roughness={0.4}
        />
      </Sphere>
      <group ref={ringRef}>
        <Torus args={[1.0, 0.05, 16, 64]} rotation={[Math.PI / 3, 0, 0]}>
          <meshStandardMaterial
            color="#D4A843"
            metalness={0.7}
            roughness={0.2}
          />
        </Torus>
      </group>
    </group>
  );
}
```

**Step 5: Create NewsScene — rotating wireframe dodecahedron**

Create `src/components/three/NewsScene.tsx`:

```tsx
"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Dodecahedron } from "@react-three/drei";
import type { Mesh } from "three";

export default function NewsScene() {
  const meshRef = useRef<Mesh>(null);

  useFrame((_, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.3;
      meshRef.current.rotation.z += delta * 0.15;
    }
  });

  return (
    <Dodecahedron ref={meshRef} args={[0.9, 0]}>
      <meshStandardMaterial
        color="#D4A843"
        wireframe
        metalness={0.6}
        roughness={0.3}
      />
    </Dodecahedron>
  );
}
```

**Step 6: Create NavScene — scene picker**

Create `src/components/three/NavScene.tsx`:

```tsx
"use client";

import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import AboutScene from "./AboutScene";
import ServicesScene from "./ServicesScene";
import OperationsScene from "./OperationsScene";
import SustainScene from "./SustainScene";
import NewsScene from "./NewsScene";

const SCENES: Record<string, React.ComponentType> = {
  About: AboutScene,
  Services: ServicesScene,
  Operations: OperationsScene,
  Sustainability: SustainScene,
  News: NewsScene,
};

export default function NavScene({ navLabel }: { navLabel: string }) {
  const SceneComponent = SCENES[navLabel];
  if (!SceneComponent) return null;

  return (
    <Canvas
      gl={{ alpha: true, antialias: true }}
      camera={{ position: [0, 0, 3.5], fov: 45 }}
      style={{ height: "120px" }}
    >
      <ambientLight intensity={0.5} />
      <directionalLight position={[3, 3, 2]} intensity={1} />
      <Suspense fallback={null}>
        <SceneComponent />
      </Suspense>
    </Canvas>
  );
}
```

**Step 7: Verify build**

Run: `npm run build`

Expected: Build completes. Note: R3F components are client-only; since they all have `"use client"` and are only imported by other client components, this should work fine.

**Step 8: Commit**

```bash
git add src/components/three/
git commit -m "feat: add 3D scene components for nav dropdown animations"
```

---

### Task 5: Create NavDropdown Component

**Files:**
- Create: `src/components/layout/NavDropdown.tsx`

**Step 1: Create the NavDropdown component**

Create `src/components/layout/NavDropdown.tsx`:

```tsx
"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import NavScene from "@/components/three/NavScene";

interface SubLink {
  readonly label: string;
  readonly href: string;
}

interface NavDropdownProps {
  navLabel: string;
  subLinks: readonly SubLink[];
  onLinkClick: () => void;
}

export default function NavDropdown({ navLabel, subLinks, onLinkClick }: NavDropdownProps) {
  return (
    <div
      role="menu"
      className="w-[280px] overflow-hidden rounded-xl border border-brand-gold/20 bg-brand-black/90 backdrop-blur-md shadow-xl shadow-black/30"
    >
      {/* 3D Scene */}
      <div className="h-[120px] lg:h-[120px] border-b border-brand-gold/10">
        <NavScene navLabel={navLabel} />
      </div>

      {/* Sub-links */}
      <div className="p-2">
        {subLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            role="menuitem"
            onClick={onLinkClick}
            className="flex items-center justify-between rounded-lg px-3 py-2.5 text-sm text-white/80 transition-colors hover:bg-brand-gold/10 hover:text-brand-gold"
          >
            <span>{link.label}</span>
            <ArrowRight className="h-3.5 w-3.5 opacity-0 transition-opacity group-hover:opacity-100" />
          </Link>
        ))}
      </div>
    </div>
  );
}
```

**Step 2: Verify build**

Run: `npm run build`

Expected: Build completes without errors.

**Step 3: Commit**

```bash
git add src/components/layout/NavDropdown.tsx
git commit -m "feat: add NavDropdown card component with 3D scene and sub-links"
```

---

### Task 6: Integrate Dropdown into Header — Desktop Normal Nav

**Files:**
- Modify: `src/components/layout/Header.tsx`

This is the most complex task. We modify the Header to add dropdown state and hover behavior for the desktop normal header and pill bar.

**Step 1: Add state and imports**

At the top of `Header.tsx`, add to the existing imports:

```tsx
import { useState, useEffect, useRef, useCallback } from "react";
import NavDropdown from "./NavDropdown";
```

Inside the `Header` component, add state after existing state declarations:

```tsx
const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
const closeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
```

Add hover handler functions:

```tsx
const handleMouseEnter = useCallback((label: string) => {
  if (closeTimeoutRef.current) {
    clearTimeout(closeTimeoutRef.current);
    closeTimeoutRef.current = null;
  }
  setActiveDropdown(label);
}, []);

const handleMouseLeave = useCallback(() => {
  closeTimeoutRef.current = setTimeout(() => {
    setActiveDropdown(null);
  }, 150);
}, []);

const handleDropdownLinkClick = useCallback(() => {
  setActiveDropdown(null);
  setMenuOpen(false);
}, []);
```

Also close the dropdown on route change — add to the existing `useEffect` that resets state on `pathname` change:

```tsx
setActiveDropdown(null);
```

**Step 2: Update the desktop nav in the normal header**

Replace the desktop nav section (lines 60-77, the `<nav className="hidden lg:flex...">` block) with:

```tsx
{/* Desktop nav */}
<nav className="hidden lg:flex items-stretch gap-0">
  {NAV_LINKS.map((link) => (
    <div
      key={link.href}
      className="relative flex items-stretch"
      onMouseEnter={() => handleMouseEnter(link.label)}
      onMouseLeave={handleMouseLeave}
    >
      <Link
        href={link.href}
        aria-expanded={activeDropdown === link.label}
        className="relative flex items-center px-4 text-base font-medium tracking-wide text-white cursor-pointer hover:text-brand-gold hover:bg-white/10 hover:backdrop-blur-md transition-all duration-200"
      >
        {link.label}
      </Link>
      {/* Dropdown */}
      {activeDropdown === link.label && (
        <div className="absolute left-1/2 top-full -translate-x-1/2 pt-2 z-50">
          <NavDropdown
            navLabel={link.label}
            subLinks={link.subLinks}
            onLinkClick={handleDropdownLinkClick}
          />
        </div>
      )}
    </div>
  ))}
  <Link
    href="/contact"
    className="ml-4 inline-flex items-center gap-2 self-center rounded-full border border-brand-gold/40 px-5 py-2 text-sm font-medium tracking-wide text-brand-gold cursor-pointer hover:bg-brand-gold/10 hover:border-brand-gold hover:text-brand-gold-light transition-all"
  >
    Get in Touch
    <ArrowRight className="h-4 w-4" />
  </Link>
</nav>
```

**Step 3: Update the desktop nav in the pill bar**

The pill bar container (starting at line 138) currently has `overflow-hidden` via the rounded-full clipping. We need to allow the dropdown to overflow.

Remove `overflow-hidden` from the pill bar outer `<div>` (the one with `className` containing `rounded-full`). The `rounded-full` shape is preserved by the background image style, so the visual shape stays intact. If rounding breaks visually, add an inner wrapper `<div className="overflow-hidden rounded-full">` around the pill content only, keeping the dropdown portal outside.

Replace the pill bar desktop nav section (lines 158-168, the `<nav className="hidden lg:flex...">` inside the pill) with:

```tsx
{/* Desktop nav links — centered */}
<nav className="hidden lg:flex flex-1 items-center justify-center gap-1">
  {NAV_LINKS.map((link) => (
    <div
      key={link.href}
      className="relative"
      onMouseEnter={() => handleMouseEnter(link.label)}
      onMouseLeave={handleMouseLeave}
    >
      <Link
        href={link.href}
        aria-expanded={activeDropdown === link.label}
        className="block px-3 py-1.5 text-sm font-medium tracking-wide text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)] rounded-md hover:text-brand-gold hover:bg-white/10 hover:backdrop-blur-md transition-all duration-200"
      >
        {link.label}
      </Link>
      {/* Dropdown */}
      {activeDropdown === link.label && (
        <div className="absolute left-1/2 top-full -translate-x-1/2 pt-2 z-50">
          <NavDropdown
            navLabel={link.label}
            subLinks={link.subLinks}
            onLinkClick={handleDropdownLinkClick}
          />
        </div>
      )}
    </div>
  ))}
</nav>
```

**Step 4: Update mobile nav — normal header**

Replace the mobile nav section (lines 113-134) with an accordion-style dropdown:

```tsx
{/* Mobile nav */}
{menuOpen && !isPill && (
  <nav className="lg:hidden border-t border-brand-gold/10 bg-brand-black/95 backdrop-blur-md px-6 py-6 flex flex-col gap-1">
    {NAV_LINKS.map((link) => (
      <div key={link.href}>
        <button
          onClick={() =>
            setActiveDropdown(activeDropdown === link.label ? null : link.label)
          }
          aria-expanded={activeDropdown === link.label}
          className="w-full flex items-center justify-between py-3 text-base font-medium tracking-wide text-white hover:text-brand-gold transition-colors"
        >
          {link.label}
          <ArrowRight
            className={`h-4 w-4 transition-transform duration-200 ${
              activeDropdown === link.label ? "rotate-90" : ""
            }`}
          />
        </button>
        {activeDropdown === link.label && (
          <div className="pb-2">
            <NavDropdown
              navLabel={link.label}
              subLinks={link.subLinks}
              onLinkClick={handleDropdownLinkClick}
            />
          </div>
        )}
      </div>
    ))}
    <Link
      href="/contact"
      className="mt-4 inline-flex items-center justify-center gap-2 rounded-full border border-brand-gold/40 px-5 py-2.5 text-center text-sm font-medium tracking-wide text-brand-gold hover:bg-brand-gold/10 hover:border-brand-gold hover:text-brand-gold-light transition-all"
      onClick={handleDropdownLinkClick}
    >
      Get in Touch
      <ArrowRight className="h-4 w-4" />
    </Link>
  </nav>
)}
```

**Step 5: Update mobile nav — pill bar**

Replace the pill bar mobile nav section (lines 221-233) similarly:

```tsx
{/* Pill mobile nav dropdown */}
{menuOpen && isPill && (
  <nav className="lg:hidden border-t border-brand-gold/10 px-6 py-6 flex flex-col gap-1">
    {NAV_LINKS.map((link) => (
      <div key={link.href}>
        <button
          onClick={() =>
            setActiveDropdown(activeDropdown === link.label ? null : link.label)
          }
          aria-expanded={activeDropdown === link.label}
          className="w-full flex items-center justify-between py-3 text-sm tracking-wide text-brand-stone-light hover:text-brand-gold transition-colors"
        >
          {link.label}
          <ArrowRight
            className={`h-4 w-4 transition-transform duration-200 ${
              activeDropdown === link.label ? "rotate-90" : ""
            }`}
          />
        </button>
        {activeDropdown === link.label && (
          <div className="pb-2">
            <NavDropdown
              navLabel={link.label}
              subLinks={link.subLinks}
              onLinkClick={handleDropdownLinkClick}
            />
          </div>
        )}
      </div>
    ))}
  </nav>
)}
```

**Step 6: Handle pill bar overflow**

On the pill bar outer `<div>` (currently at line 139), remove `overflow-hidden` from the className. The current className includes `overflow-hidden` — simply remove that class. The rounded appearance comes from `rounded-full` and the background image, which don't require overflow hidden.

If the rounded-full clipping is affected: wrap the pill bar content (the `<div className="relative z-10 flex...">` and the mobile nav inside the pill) in a new inner `<div className="overflow-hidden" style={{ borderRadius: "inherit" }}>`, and move the dropdown rendering outside this inner wrapper.

**Step 7: Add Escape key handler**

Add a `useEffect` to the Header component:

```tsx
useEffect(() => {
  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === "Escape") setActiveDropdown(null);
  };
  document.addEventListener("keydown", handleKeyDown);
  return () => document.removeEventListener("keydown", handleKeyDown);
}, []);
```

**Step 8: Verify build and test manually**

Run: `npm run build`

Expected: Build completes without errors.

Run: `npm run dev`

Manual test checklist:
- [ ] Desktop: hover over each nav item in normal header — dropdown appears with 3D animation
- [ ] Desktop: hover over each nav item in pill bar — dropdown appears below pill bar
- [ ] Desktop: move cursor from nav link to dropdown card — stays open (no flicker)
- [ ] Desktop: move cursor away — closes after ~150ms
- [ ] Mobile: tap nav item — dropdown card expands inline
- [ ] Mobile: tap sub-link — navigates and closes menu
- [ ] Anchor links scroll to the correct section on each page
- [ ] 3D scenes render and animate smoothly
- [ ] Escape key closes dropdown
- [ ] Pill bar shape is preserved (no visual clipping issues)

**Step 9: Commit**

```bash
git add src/components/layout/Header.tsx
git commit -m "feat: integrate nav dropdown with 3D animations into header"
```

---

### Task 7: Visual Polish and Edge Cases

**Files:**
- Modify: `src/components/layout/NavDropdown.tsx` (if needed)
- Modify: `src/components/layout/Header.tsx` (if needed)
- Modify: `src/app/globals.css` (if needed for scroll offset)

**Step 1: Add scroll offset for anchored sections**

Since the header overlaps content, anchor scroll targets may be hidden behind the header. Add to `src/app/globals.css`:

```css
/* Offset anchor scroll targets for fixed header */
[id] {
  scroll-margin-top: 100px;
}
```

**Step 2: Add enter/exit animation to dropdown**

If the dropdown currently pops in without animation, add CSS transition. In `NavDropdown.tsx`, add animation classes:

```tsx
<div
  role="menu"
  className="w-[280px] overflow-hidden rounded-xl border border-brand-gold/20 bg-brand-black/90 backdrop-blur-md shadow-xl shadow-black/30 animate-dropdown-in"
>
```

Add to `globals.css`:

```css
@keyframes dropdown-in {
  from {
    opacity: 0;
    transform: translateY(-8px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-dropdown-in {
  animation: dropdown-in 0.15s ease-out;
}
```

**Step 3: Test edge cases**

Run: `npm run dev`

- [ ] Dropdown doesn't overflow viewport on rightmost nav items (News) — if it does, add logic to shift alignment
- [ ] 3D Canvas doesn't cause layout shift
- [ ] No memory leaks from R3F Canvas mounting/unmounting (check browser devtools)
- [ ] Works on both Chrome and Safari

**Step 4: Lint check**

Run: `npm run lint`

Expected: No lint errors.

**Step 5: Full build check**

Run: `npm run check`

Expected: Build + type check passes.

**Step 6: Commit**

```bash
git add src/app/globals.css src/components/layout/NavDropdown.tsx src/components/layout/Header.tsx
git commit -m "feat: add dropdown animation and scroll offset for anchor links"
```
