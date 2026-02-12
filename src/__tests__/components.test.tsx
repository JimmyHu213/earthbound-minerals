import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";

// Mock next/image since it doesn't work in jsdom
vi.mock("next/image", () => ({
  default: (props: Record<string, unknown>) => {
    const { src, ...rest } = props;
    const imgSrc = typeof src === "object" && src !== null && "src" in src
      ? (src as { src: string }).src
      : String(src);
    // eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text
    return <img src={imgSrc} {...rest} />;
  },
}));

// Mock static image imports
vi.mock("@/assets/images/EBM_Favicon_512.svg", () => ({
  default: { src: "/logo.svg", width: 512, height: 512 },
}));

vi.mock("@/assets/images/pillbar-bg.webp", () => ({
  default: { src: "/pillbar-bg.webp", width: 256, height: 256 },
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
      screen.getByText("Powering Industries from the Ground Up")
    ).toBeInTheDocument();
  });

  it("renders CTA links", () => {
    render(<Hero />);
    expect(screen.getByText("Explore Our Services")).toHaveAttribute(
      "href",
      "#services"
    );
    expect(screen.getByText("Contact Us")).toHaveAttribute(
      "href",
      "#contact"
    );
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

  it("renders heading and stats", () => {
    render(<About />);
    expect(
      screen.getByText("A Legacy of Excellence in Mineral Resources")
    ).toBeInTheDocument();
    expect(screen.getByText("20+")).toBeInTheDocument();
    expect(screen.getByText("30+")).toBeInTheDocument();
  });
});

describe("Services", () => {
  it("renders the services section with correct id", () => {
    const { container } = render(<Services />);
    expect(container.querySelector("#services")).toBeInTheDocument();
  });

  it("renders all service titles", () => {
    render(<Services />);
    expect(screen.getByText("Mineral Sourcing")).toBeInTheDocument();
    expect(screen.getByText("Processing & Refining")).toBeInTheDocument();
    expect(screen.getByText("Logistics & Distribution")).toBeInTheDocument();
    expect(screen.getByText("Quality Assurance")).toBeInTheDocument();
  });
});

describe("Footer", () => {
  it("renders site name and description", () => {
    render(<Footer />);
    expect(screen.getByText("Earthbound Minerals")).toBeInTheDocument();
  });

  it("renders navigation links", () => {
    render(<Footer />);
    expect(screen.getByText("About")).toHaveAttribute("href", "#about");
    expect(screen.getByText("Services")).toHaveAttribute("href", "#services");
    // "Contact" appears as both a nav link and a section heading, so use getAllByText
    const contactLinks = screen.getAllByText("Contact");
    const contactNavLink = contactLinks.find(
      (el) => el.tagName === "A" && el.getAttribute("href") === "#contact"
    );
    expect(contactNavLink).toBeDefined();
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
