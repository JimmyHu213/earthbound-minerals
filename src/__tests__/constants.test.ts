import { describe, it, expect } from "vitest";
import {
  SITE,
  NAV_LINKS,
  SERVICES,
  ADVANTAGES,
  OPERATIONS,
  SUSTAINABILITY_PILLARS,
} from "@/lib/constants";

describe("SITE constants", () => {
  it("has all required fields", () => {
    expect(SITE.name).toBe("Earthbound Minerals");
    expect(SITE.tagline).toBeTruthy();
    expect(SITE.description).toBeTruthy();
    expect(SITE.email).toMatch(/@/);
    expect(SITE.phone).toBeTruthy();
    expect(SITE.address).toBeTruthy();
  });
});

describe("NAV_LINKS", () => {
  it("has at least 3 navigation links", () => {
    expect(NAV_LINKS.length).toBeGreaterThanOrEqual(3);
  });

  it("each link has a label and path href", () => {
    NAV_LINKS.forEach((link) => {
      expect(link.label).toBeTruthy();
      expect(link.href).toMatch(/^\//);
    });
  });

  it("each link has subLinks", () => {
    NAV_LINKS.forEach((link) => {
      expect(link.subLinks.length).toBeGreaterThanOrEqual(1);
      link.subLinks.forEach((sub) => {
        expect(sub.label).toBeTruthy();
        expect(sub.href).toBeTruthy();
      });
    });
  });

  it("has no duplicate hrefs", () => {
    const hrefs = NAV_LINKS.map((l) => l.href);
    expect(new Set(hrefs).size).toBe(hrefs.length);
  });
});

describe("SERVICES", () => {
  it("has at least 2 services", () => {
    expect(SERVICES.length).toBeGreaterThanOrEqual(2);
  });

  it("each service has tab, title, description, and icon", () => {
    SERVICES.forEach((service) => {
      expect(service.tab).toBeTruthy();
      expect(service.title).toBeTruthy();
      expect(service.description).toBeTruthy();
      expect(service.icon).toBeTruthy();
    });
  });
});

describe("ADVANTAGES", () => {
  it("each advantage has title, description, stat, and unit", () => {
    ADVANTAGES.forEach((adv) => {
      expect(adv.title).toBeTruthy();
      expect(adv.description).toBeTruthy();
      expect(adv.stat).toBeTruthy();
      expect(adv.unit).toBeTruthy();
    });
  });
});

describe("OPERATIONS", () => {
  it("each operation has title, location, type, and description", () => {
    OPERATIONS.forEach((op) => {
      expect(op.title).toBeTruthy();
      expect(op.location).toBeTruthy();
      expect(op.type).toBeTruthy();
      expect(op.description).toBeTruthy();
    });
  });
});

describe("SUSTAINABILITY_PILLARS", () => {
  it("each pillar has title and description", () => {
    SUSTAINABILITY_PILLARS.forEach((pillar) => {
      expect(pillar.title).toBeTruthy();
      expect(pillar.description).toBeTruthy();
    });
  });
});
