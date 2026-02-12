import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";

// Mock next/image
vi.mock("next/image", () => ({
  default: (props: Record<string, unknown>) => {
    const { src, ...rest } = props;
    const imgSrc =
      typeof src === "object" && src !== null && "src" in src
        ? (src as { src: string }).src
        : String(src);
    // eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text
    return <img src={imgSrc} {...rest} />;
  },
}));

vi.mock("@/assets/images/EBM_Favicon_512.svg", () => ({
  default: { src: "/logo.svg", width: 512, height: 512 },
}));

vi.mock("@/assets/images/pillbar-bg.webp", () => ({
  default: { src: "/pillbar-bg.webp", width: 256, height: 256 },
}));

import Header from "@/components/layout/Header";

// Mock IntersectionObserver
const mockObserve = vi.fn();
const mockDisconnect = vi.fn();

beforeEach(() => {
  mockObserve.mockClear();
  mockDisconnect.mockClear();

  vi.stubGlobal(
    "IntersectionObserver",
    vi.fn().mockImplementation(() => ({
      observe: mockObserve,
      disconnect: mockDisconnect,
      unobserve: vi.fn(),
    }))
  );
});

describe("Header", () => {
  it("renders the site name in the static header", () => {
    render(<Header />);
    expect(screen.getByText("Earthbound Minerals")).toBeInTheDocument();
  });

  it("renders all navigation links", () => {
    render(<Header />);
    const aboutLinks = screen.getAllByText("About");
    expect(aboutLinks.length).toBeGreaterThanOrEqual(1);

    const servicesLinks = screen.getAllByText("Services");
    expect(servicesLinks.length).toBeGreaterThanOrEqual(1);
  });

  it("renders Get in Touch CTA", () => {
    render(<Header />);
    const ctaLinks = screen.getAllByText("Get in Touch");
    expect(ctaLinks.length).toBeGreaterThanOrEqual(1);
  });

  it("sets up IntersectionObserver on mount", () => {
    // Add a hero element for the observer to find
    const heroEl = document.createElement("section");
    heroEl.setAttribute("data-hero", "");
    document.body.appendChild(heroEl);

    render(<Header />);
    expect(mockObserve).toHaveBeenCalled();

    document.body.removeChild(heroEl);
  });

  it("toggles mobile menu on button click", () => {
    render(<Header />);
    const menuButton = screen.getAllByLabelText("Toggle menu")[0];

    // Menu should not be visible initially — check for mobile nav link absence
    const mobileNavBefore = screen.queryAllByText("Operations");
    // Just the desktop + pill versions
    const initialCount = mobileNavBefore.length;

    fireEvent.click(menuButton);

    // After click, mobile menu should show additional links
    const mobileNavAfter = screen.getAllByText("Operations");
    expect(mobileNavAfter.length).toBeGreaterThan(initialCount);
  });

  it("cleans up IntersectionObserver on unmount", () => {
    const heroEl = document.createElement("section");
    heroEl.setAttribute("data-hero", "");
    document.body.appendChild(heroEl);

    const { unmount } = render(<Header />);
    unmount();
    expect(mockDisconnect).toHaveBeenCalled();

    document.body.removeChild(heroEl);
  });
});
