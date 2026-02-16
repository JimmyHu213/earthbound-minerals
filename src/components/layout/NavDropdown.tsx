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
      className="w-[280px] overflow-hidden rounded-xl border border-brand-gold/20 bg-brand-black/90 backdrop-blur-md shadow-xl shadow-black/30 animate-dropdown-in"
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
            className="group flex items-center justify-between rounded-lg px-3 py-2.5 text-sm text-white/80 transition-colors hover:bg-brand-gold/10 hover:text-brand-gold"
          >
            <span>{link.label}</span>
            <ArrowRight className="h-3.5 w-3.5 opacity-0 transition-opacity group-hover:opacity-100" />
          </Link>
        ))}
      </div>
    </div>
  );
}
