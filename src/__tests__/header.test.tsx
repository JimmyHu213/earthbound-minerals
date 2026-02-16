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

// Mock next/link
vi.mock("next/link", () => ({
  default: ({
    children,
    href,
    ...rest
  }: {
    children: React.ReactNode;
    href: string;
    [key: string]: unknown;
  }) => (
    <a href={href} {...rest}>
      {children}
    </a>
  ),
}));

// Mock next/navigation
vi.mock("next/navigation", () => ({
  usePathname: () => "/",
}));

// Mock lucide-react
vi.mock("lucide-react", () => ({
  ArrowRight: () => <span data-testid="arrow-right" />,
}));

// Mock NavDropdown
vi.mock("@/components/layout/NavDropdown", () => ({
  default: () => <div data-testid="nav-dropdown" />,
}));

vi.mock("@/assets/images/EBM_Favicon_512.svg", () => ({
  default: { src: "/logo.svg", width: 512, height: 512 },
}));

vi.mock("@/assets/images/EBM_Logo_Horizontal_DarkBG.svg", () => ({
  default: { src: "/logo-horizontal.svg", width: 261, height: 36 },
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
  it("renders the logo image", () => {
    render(<Header />);
    const logos = screen.getAllByAltText("Earthbound Minerals");
    expect(logos.length).toBeGreaterThanOrEqual(1);
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

    const mobileNavBefore = screen.queryAllByText("Operations");
    const initialCount = mobileNavBefore.length;

    fireEvent.click(menuButton);

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
