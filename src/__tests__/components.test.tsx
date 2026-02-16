import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";

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

// Mock lucide-react
vi.mock("lucide-react", () => ({
  ArrowRight: () => <span data-testid="arrow-right" />,
  ArrowUpRight: () => <span data-testid="arrow-up-right" />,
}));

// Mock static image imports
vi.mock("@/assets/images/EBM_Favicon_512.svg", () => ({
  default: { src: "/logo.svg", width: 512, height: 512 },
}));

vi.mock("@/assets/images/hero-bg.webp", () => ({
  default: { src: "/hero-bg.webp", width: 1920, height: 1080, blurDataURL: "" },
}));

vi.mock("@/assets/images/extraction.webp", () => ({
  default: { src: "/extraction.webp", width: 1920, height: 1080, blurDataURL: "" },
}));

vi.mock("@/assets/images/processing.webp", () => ({
  default: { src: "/processing.webp", width: 1920, height: 1080, blurDataURL: "" },
}));

vi.mock("@/assets/images/logistic.webp", () => ({
  default: { src: "/logistic.webp", width: 1920, height: 1080, blurDataURL: "" },
}));

vi.mock("@/assets/images/quality.webp", () => ({
  default: { src: "/quality.webp", width: 1920, height: 1080, blurDataURL: "" },
}));

import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import Footer from "@/components/layout/Footer";

describe("Hero", () => {
  it("renders site name and tagline", () => {
    render(<Hero />);
    expect(screen.getByText("Earthbound Minerals")).toBeInTheDocument();
    expect(
      screen.getByText("Premium Coking Coal \u2014 From Mine to Market")
    ).toBeInTheDocument();
  });

  it("renders Learn More CTA", () => {
    render(<Hero />);
    expect(screen.getByText("Learn More")).toHaveAttribute("href", "#about");
  });

  it("has the data-hero attribute for scroll detection", () => {
    const { container } = render(<Hero />);
    expect(container.querySelector("[data-hero]")).toBeInTheDocument();
  });
});

describe("About", () => {
  it("renders the about section with correct id", () => {
    const { container } = render(<About />);
    expect(container.querySelector("#about")).toBeInTheDocument();
  });

  it("renders heading", () => {
    render(<About />);
    expect(
      screen.getByText("Premium Coal, Mine to Market")
    ).toBeInTheDocument();
  });
});

describe("Services", () => {
  it("renders the services section with correct id", () => {
    const { container } = render(<Services />);
    expect(container.querySelector("#services")).toBeInTheDocument();
  });

  it("renders the first service title by default", () => {
    render(<Services />);
    expect(screen.getByText("Coal Mining & Extraction")).toBeInTheDocument();
  });
});

describe("Footer", () => {
  it("renders site name", () => {
    render(<Footer />);
    expect(screen.getByText("Earthbound Minerals")).toBeInTheDocument();
  });

  it("renders navigation links", () => {
    render(<Footer />);
    expect(screen.getByText("About")).toHaveAttribute("href", "/about");
    expect(screen.getByText("Services")).toHaveAttribute("href", "/services");
    expect(screen.getByText("Operations")).toHaveAttribute(
      "href",
      "/operations"
    );
  });

  it("renders contact info", () => {
    render(<Footer />);
    expect(
      screen.getByText("info@earthboundminerals.com")
    ).toBeInTheDocument();
  });

  it("renders copyright with current year", () => {
    render(<Footer />);
    const year = new Date().getFullYear();
    expect(
      screen.getByText(new RegExp(`${year}.*Earthbound Minerals`))
    ).toBeInTheDocument();
  });
});
