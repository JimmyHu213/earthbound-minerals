export const SITE = {
  name: "Earthbound Minerals",
  tagline: "Powering Industries from the Ground Up",
  description:
    "We source, process, and deliver premium minerals to industries worldwide. Committed to sustainable practices and uncompromising quality.",
  email: "info@earthboundminerals.com",
  phone: "+1 (555) 000-0000",
  address: "123 Mining Avenue, Denver, CO 80202",
} as const;

export const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Operations", href: "#operations" },
  { label: "Sustainability", href: "#sustainability" },
  { label: "Contact", href: "#contact" },
] as const;

export const SERVICES = [
  {
    title: "Mineral Sourcing",
    description:
      "Global network for sourcing high-quality raw minerals from trusted and certified mines.",
    icon: "globe",
  },
  {
    title: "Processing & Refining",
    description:
      "State-of-the-art facilities ensuring consistent purity and grade for industrial applications.",
    icon: "cog",
  },
  {
    title: "Logistics & Distribution",
    description:
      "Reliable supply chain management with worldwide delivery and real-time tracking.",
    icon: "truck",
  },
  {
    title: "Quality Assurance",
    description:
      "Rigorous testing and certification to meet international standards and client specifications.",
    icon: "shield",
  },
] as const;

export const ADVANTAGES = [
  {
    title: "20+ Years Experience",
    description: "Decades of expertise in the global minerals industry.",
    stat: "20+",
    unit: "Years",
  },
  {
    title: "Sustainable Practices",
    description:
      "Environmentally responsible sourcing and processing methods.",
    stat: "100%",
    unit: "Compliant",
  },
  {
    title: "Global Reach",
    description: "Partnerships across 30+ countries on every continent.",
    stat: "30+",
    unit: "Countries",
  },
  {
    title: "Certified Quality",
    description: "ISO 9001 certified with full traceability on every shipment.",
    stat: "ISO",
    unit: "9001",
  },
] as const;

export const OPERATIONS = [
  {
    title: "Appalachian Basin",
    location: "Kentucky, United States",
    type: "Coal Mining & Processing",
    description:
      "Our flagship operation in the heart of Appalachia, producing premium-grade thermal and metallurgical coal for domestic and international markets.",
  },
  {
    title: "Rocky Mountain Complex",
    location: "Colorado, United States",
    type: "Mineral Extraction",
    description:
      "Multi-mineral extraction facility specializing in rare earth elements and industrial minerals for the technology and manufacturing sectors.",
  },
  {
    title: "Gulf Coast Terminal",
    location: "Louisiana, United States",
    type: "Export & Logistics Hub",
    description:
      "Deep-water port terminal handling bulk mineral exports with direct shipping routes to Asia, Europe, and South America.",
  },
] as const;

export const SUSTAINABILITY_PILLARS = [
  {
    title: "Environmental Stewardship",
    description:
      "Progressive mine rehabilitation, water recycling systems, and carbon reduction programs across all operations.",
  },
  {
    title: "Community Investment",
    description:
      "Long-term partnerships with local communities through employment, education, and infrastructure development.",
  },
  {
    title: "Safety Excellence",
    description:
      "Industry-leading safety record with zero-harm targets and comprehensive training for all personnel.",
  },
  {
    title: "Responsible Supply Chain",
    description:
      "Full traceability and ethical sourcing standards applied to every stage of our mineral supply chain.",
  },
] as const;
