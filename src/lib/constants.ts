export const SITE = {
  name: "Earthbound Minerals",
  tagline: "A new world of premium minerals",
  description:
    "We source, process, and deliver premium minerals to industries worldwide. Committed to sustainable practices and uncompromising quality.",
  email: "info@earthboundminerals.com",
  phone: "+1 (555) 000-0000",
  address: "123 Mining Avenue, Denver, CO 80202",
} as const;

export const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Why Us", href: "#why-us" },
  { label: "Contact", href: "#contact" },
] as const;

export const SERVICES = [
  {
    title: "Mineral Sourcing",
    description:
      "Global network for sourcing high-quality raw minerals from trusted and certified mines.",
  },
  {
    title: "Processing & Refining",
    description:
      "State-of-the-art facilities ensuring consistent purity and grade for industrial applications.",
  },
  {
    title: "Logistics & Distribution",
    description:
      "Reliable supply chain management with worldwide delivery and real-time tracking.",
  },
  {
    title: "Quality Assurance",
    description:
      "Rigorous testing and certification to meet international standards and client specifications.",
  },
] as const;

export const ADVANTAGES = [
  {
    title: "20+ Years Experience",
    description: "Decades of expertise in the global minerals industry.",
  },
  {
    title: "Sustainable Practices",
    description:
      "Environmentally responsible sourcing and processing methods.",
  },
  {
    title: "Global Reach",
    description: "Partnerships across 30+ countries on every continent.",
  },
  {
    title: "Certified Quality",
    description: "ISO 9001 certified with full traceability on every shipment.",
  },
] as const;
