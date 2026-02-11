export const SITE = {
  name: "Earthbound Minerals",
  tagline: "Powering Industries from the Ground Up",
  description:
    "We source, process, and deliver premium minerals to industries worldwide. Committed to sustainable practices and uncompromising quality.",
  email: "info@earthboundminerals.com",
  phone: "+1 (555) 000-0000",
  address: "123 Mining Avenue, Denver, CO 80202",
  heroVideo: "/videos/metcoal.mp4",
} as const;

export const NAV_LINKS = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Operations", href: "/operations" },
  { label: "Sustainability", href: "/sustainability" },
  { label: "News", href: "/news" },
] as const;

export const SERVICES = [
  {
    tab: "Mining Services",
    title: "Extraction & Mining Operations",
    description:
      "From open-pit to underground operations, we deploy cutting-edge extraction techniques across our global network of certified mines. Our teams work around the clock to deliver premium-grade thermal and metallurgical coal, rare earth elements, and industrial minerals.",
    icon: "globe",
  },
  {
    tab: "Processing",
    title: "Processing & Refining",
    description:
      "State-of-the-art processing facilities ensure consistent purity and grade for every industrial application. Our refining operations transform raw materials into market-ready products that meet the most demanding international specifications.",
    icon: "cog",
  },
  {
    tab: "Logistics",
    title: "Logistics & Distribution",
    description:
      "A fully integrated supply chain spanning deep-water ports, rail networks, and trucking fleets. Real-time tracking and dedicated logistics coordinators ensure your materials arrive on time, every time — anywhere in the world.",
    icon: "truck",
  },
  {
    tab: "Quality",
    title: "Quality Assurance",
    description:
      "Rigorous testing at every stage — from mine face to final delivery. ISO 9001 certified processes, independent laboratory verification, and full batch traceability give our clients absolute confidence in every shipment.",
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
