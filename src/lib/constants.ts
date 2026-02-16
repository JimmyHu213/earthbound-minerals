export const SITE = {
  name: "Earthbound Minerals",
  tagline: "Powering Industries from the Ground Up",
  description:
    "A United States-based coal supply company specialising in the sourcing, processing, and international distribution of premium-grade metallurgical and thermal coal. SGS-verified, ultra-low-ash coking coal delivered to steelmakers and energy producers worldwide.",
  email: "info@earthboundminerals.com",
  phone: "+61 430 067 311",
  address: "281 Thomson Road, Apt 405, Pikeville, KY 41501",
  heroVideo: "/videos/metcoal.mp4",
} as const;

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

export const SERVICES = [
  {
    tab: "Coal Mining",
    title: "Coal Mining & Extraction",
    description:
      "Earthbound Minerals sources premium high-volatile B (HVB) coking coal from the Pocahontas Alma seam in the Central Appalachian coalfield \u2014 one of America\u2019s most storied and geologically significant coal-producing regions. Our mining operations in West Virginia and Kentucky extract coal renowned for its ultra-low ash content, low sulfur, and exceptional coking properties.",
    icon: "globe",
  },
  {
    tab: "Processing",
    title: "Processing & Preparation",
    description:
      "All coal is processed through the NorthStar preparation plant in Kimper, Kentucky, where it undergoes crushing, screening, and washing to meet precise customer specifications. Our processing operations ensure consistent product quality across every shipment, with SGS-verified laboratory analysis confirming compliance with agreed quality parameters before dispatch.",
    icon: "cog",
  },
  {
    tab: "Logistics",
    title: "Logistics & Distribution",
    description:
      "Earthbound Minerals operates an integrated mine-to-port supply chain utilising the CSX and Norfolk Southern rail networks \u2014 the backbone of American coal logistics. Unit train service provides efficient bulk transport from our Kentucky processing facility directly to East Coast port terminals, with FOB delivery at Port Newark, New Jersey, or Curtis Bay, Baltimore.",
    icon: "truck",
  },
  {
    tab: "Quality",
    title: "Quality Assurance",
    description:
      "Every shipment of Earthbound Minerals coal is independently verified by SGS \u2014 the world\u2019s leading inspection, verification, testing, and certification company. Our coal is tested to ASTM standards across all key quality parameters including ash content, sulfur, volatile matter, calorific value, free swelling index, Gieseler plastometry, and dilatometry.",
    icon: "shield",
  },
] as const;

export const ADVANTAGES = [
  {
    title: "Combined Experience",
    description:
      "Senior leadership team with 100+ years across mining, rail, finance, and commerce.",
    stat: "100+",
    unit: "Years",
  },
  {
    title: "Premium Quality",
    description:
      "Coal ash content 60% below Platts PLV benchmark with ultra-low sulfur.",
    stat: "60%",
    unit: "Below Platts PLV",
  },
  {
    title: "International Markets",
    description:
      "Serving buyers across multiple international markets from the US East Coast.",
    stat: "Global",
    unit: "Reach",
  },
  {
    title: "SGS Verified",
    description:
      "Every shipment independently tested by SGS to ASTM standards.",
    stat: "SGS",
    unit: "ASTM",
  },
] as const;

export const OPERATIONS = [
  {
    title: "Liberty Mine \u2014 Central Appalachia",
    location: "West Virginia & Kentucky, United States",
    type: "Underground Coal Mining \u2014 Pocahontas Alma Seam",
    description:
      "The Liberty Mine extracts premium coking coal from the Pocahontas Alma seam in the heart of Central Appalachia. This geological formation produces coal of exceptional quality \u2014 with ultra-low ash (3.7%), low sulfur (0.6%), and Gieseler fluidity exceeding 30,000 DDPM \u2014 positioning it among the finest metallurgical coals available in North America.",
  },
  {
    title: "NorthStar Preparation Plant",
    location: "Kimper, Kentucky, United States",
    type: "Coal Processing & Preparation",
    description:
      "All coal from the Liberty Mine is processed at the NorthStar preparation plant in Kimper, Kentucky, where crushing, screening, washing, and quality grading ensure consistent product specifications across every shipment. The facility is equipped to handle scalable throughput from 75,000 to 160,000 metric tonnes per month.",
  },
  {
    title: "East Coast Export Terminal",
    location: "Port Newark, NJ / Curtis Bay, Baltimore, MD",
    type: "Export & Logistics Hub",
    description:
      "Earthbound Minerals delivers coal FOB via deep-water port terminals on the U.S. East Coast. Our primary export route runs from the NorthStar prep plant via CSX/Norfolk Southern rail to the Port Newark Container Terminal (PNCT) and Millennium Marine Rail facility in Elizabeth, New Jersey. An alternative route services Curtis Bay in Baltimore.",
  },
] as const;

export const SUSTAINABILITY_PILLARS = [
  {
    title: "Environmental Stewardship",
    description:
      "We are committed to minimising the environmental impact of our mining operations through progressive rehabilitation, responsible water management, and continuous improvement in operational efficiency.",
  },
  {
    title: "Community Investment",
    description:
      "We believe in contributing to the communities where we operate. Through local employment, partnerships with regional businesses, and investment in community infrastructure, Earthbound Minerals aims to create lasting value beyond the mine gate.",
  },
  {
    title: "Safety Excellence",
    description:
      "Safety is the single most important factor in successful mining operations, and at Earthbound Minerals it sits at the very top of our priorities. Our founding team brings decades of frontline experience in Australia\u2019s highly regulated mining industry.",
  },
  {
    title: "Responsible Supply Chain",
    description:
      "We maintain full transparency across our supply chain \u2014 from mine face to customer delivery. Every consignment is independently tested and certified by SGS to ASTM standards.",
  },
] as const;
