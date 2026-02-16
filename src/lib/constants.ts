export const SITE = {
  name: "Earthbound Minerals",
  tagline: "Premium Coking Coal \u2014 From Mine to Market",
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
      { label: "Our Team", href: "/about/team" },
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
      { label: "Coal Quality", href: "/quality" },
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
      {
        label: "Environmental Stewardship",
        href: "/sustainability#environmental",
      },
      { label: "Community Investment", href: "/sustainability#community" },
      { label: "Safety Excellence", href: "/sustainability#safety" },
      {
        label: "Responsible Supply Chain",
        href: "/sustainability#supply-chain",
      },
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

export const LEADERSHIP = [
  {
    name: "Stephen Freeman",
    title: "Co-Founder & Managing Director",
    experience: "33+",
    experienceLabel: "Years in Mining",
    bio: [
      "Stephen Freeman is a highly experienced mining industry professional with an impressive 33-year career spanning hard rock, underground coal, and open-cut operations. Beginning his journey as a Plant Mechanic, Stephen built a reputation for strong technical capability while continuously expanding his expertise in front-line management, training and assessment, risk management, and operational economics.",
      "Throughout his career, Stephen has spent 3 years in hard rock mining, 11 years working underground in coal, and 19 years in the open-cut sector \u2014 giving him comprehensive exposure across the full spectrum of mining environments. In 2012, Stephen co-founded the Hunter Valley\u2019s largest labour-hire company alongside Rick Markham, growing it from just 10 employees to over 200 staff by 2025 and establishing it as the leading provider of skilled mining personnel on Australia\u2019s east coast. Under their leadership, the company diversified into international equipment importing and exporting (2023) and a dedicated fabrication and shutdown division (2024).",
      "Stephen\u2019s leadership is characterised by operational insight, commercial awareness, and a forward-thinking approach to business development \u2014 qualities he now brings to Earthbound Minerals as Co-Founder and Managing Director.",
    ],
  },
  {
    name: "Rick Markham",
    title: "Co-Founder & Managing Director",
    experience: "20+",
    experienceLabel: "Years in Mining",
    bio: [
      "Rick Markham is a seasoned mining entrepreneur and industry leader with over two decades of hands-on experience in the coal sector. His journey began in 2000 with a rigorous four-year apprenticeship as a heavy vehicle mechanic, leading to specialist roles as a diagnostic fitter at major Hunter Valley and Bowen Basin coal operations including Mount Owen Mine and Hail Creek Mine.",
      "Rick\u2019s entrepreneurial drive led him to launch his first independent venture subcontracting maintenance services to Hunter Valley mines, before co-founding the Hunter Valley\u2019s largest labour-hire company with Stephen Freeman in 2012. Starting with just 10 employees, they grew the company to over 200 staff by 2025, building it into a comprehensive provider of mining support services \u2014 mechanical and electrical labour, trades assistance, shutdown support, and washery maintenance \u2014 serving operations across Australia\u2019s east coast.",
      "Beyond mining, Rick\u2019s innovative spirit extends to technology and property development, co-founding MyDriveHero (Australia\u2019s leading safe driving app with over 100,000 users) and overseeing residential developments through Pride Built Homes. As Co-Founder and Managing Director of Earthbound Minerals, Rick leverages his extensive operational background to pioneer efficient approaches to coal supply and resource management.",
    ],
  },
  {
    name: "Doug McCabe",
    title: "Chief Executive Officer",
    experience: "50+",
    experienceLabel: "Years in Rail & Mining",
    bio: [
      "Doug McCabe brings more than 50 years of experience in the Australian rail industry to his role as CEO of Earthbound Minerals. A Bachelor of Engineering (Civil) graduate and Queensland Rail Scholarship holder, Doug has spent the majority of his career in senior management, business development, and project director delivery roles \u2014 managing the design of complete railway systems including mainline freight, heavy haul coal systems, and suburban passenger networks.",
      "Doug\u2019s career highlights include delivering major coal infrastructure projects at Queensland Rail (Goonyella, German Creek, Blair Athol, and Newlands \u2014 collectively valued at over $600M), managing the design and manufacture of Australia\u2019s first electric tilt train at Downer EDI Rail, and serving as Director of Rail and Ports for Waratah Coal overseeing the $8.2B China First coal project in the Galilee Basin. His expertise in railway system integration, heavy haul logistics, and stakeholder management at the highest levels makes him uniquely qualified to lead EBM\u2019s mine-to-market supply chain strategy.",
    ],
  },
  {
    name: "Geoff Shannon",
    title: "Vice President, Internal Sales & Export",
    experience: "15+",
    experienceLabel: "Years in Trade",
    bio: [
      "Proven international commodity trader and entrepreneur with deep expertise in farm-to-market supply chain management, having built and managed large-scale horticultural export operations delivering to China and international markets. Brings entrepreneurial commercial instincts, international logistics acumen, and a track record of scaling operations to Earthbound Minerals.",
    ],
  },
  {
    name: "Suzanne Bennett",
    title: "Chief Financial Officer",
    experience: "25+",
    experienceLabel: "Years in Finance",
    bio: [
      "Suzanne Bennett is a versatile finance and business professional who brings extensive commercial acumen to Earthbound Minerals. Holding an Advanced Diploma of Accounting, qualifications in Australian Taxation Law and Commercial Law, and a Public Practice Certificate from the Institute of Public Accountants, Suzanne combines deep financial expertise with proven entrepreneurial capability.",
      "Suzanne\u2019s career spans over two decades of building and managing successful businesses across multiple sectors \u2014 from wholesale health food production and international export (Sumabe, with distribution to the UK, Europe, China, and the Middle East) to hospitality, property development, and financial services. As Managing Director of Sumabe, she developed international sales relationships with major corporate clients and managed single-invoice transactions exceeding $800,000. Her experience negotiating with international buyers, managing multi-currency operations, and navigating cross-border compliance frameworks is directly applicable to EBM\u2019s coal trading operations.",
      "As Principal of Nationlink Accounting Solutions and Licensee of Nationlink Solutions (Australian Credit Licence holder), Suzanne currently provides business advisory, accounting, and commercial funding services \u2014 demonstrating the financial stewardship and commercial judgment she brings to her role as CFO of Earthbound Minerals.",
    ],
  },
] as const;

export const WHY_US = [
  {
    title: "Premium Quality",
    description:
      "Our Pocahontas Alma seam coal achieves an ash content of just 3.7% \u2014 60% below the Platts PLV benchmark of 9.3%. Combined with ultra-low sulfur (0.6%), exceptional Gieseler fluidity exceeding 30,000 DDPM, and a Free Swelling Index of 8.5 at the top of the Hard Coking Coal range, this coal produces stronger coke, higher yields, and lower processing costs for blast furnace operators.",
    icon: "shield",
  },
  {
    title: "Proven Supply Chain",
    description:
      "From the Liberty Mine in Central Appalachia through the NorthStar prep plant in Kentucky, via CSX and Norfolk Southern rail networks to East Coast deep-water ports in New Jersey and Baltimore \u2014 our supply chain is established, efficient, and scalable.",
    icon: "truck",
  },
  {
    title: "Scalable, Long-Term Supply",
    description:
      "Earthbound Minerals offers supply agreements of up to 20 years, with volumes scalable from 75,000 to 160,000 metric tonnes per month. This represents up to 1.92 million tonnes annually and 38.4 million tonnes over a full contract term.",
    icon: "trending-up",
  },
  {
    title: "Competitive, Index-Linked Pricing",
    description:
      "Competitive fixed pricing in Year 1 transitions to index-linked pricing benchmarked to the SGX Australian Coking Coal index from Year 2 onward \u2014 ensuring our buyers maintain market-aligned rates as global coal prices evolve.",
    icon: "dollar-sign",
  },
  {
    title: "World-Class Leadership",
    description:
      "Our executive team combines decades of frontline mining operations experience from Australia\u2019s Hunter Valley, major infrastructure and rail project delivery, international commodity trading expertise, and rigorous financial governance.",
    icon: "users",
  },
] as const;

export const COAL_QUALITY = {
  intro:
    "All Earthbound Minerals coal is independently tested by SGS North America Inc. to ASTM standards. The following results are from the January 2026 SGS analysis of washed coal from the Liberty Mine, Pocahontas Alma seam.",
  lab: "SGS North America Inc., Harrogate, TN",
  methods: [
    "ASTM D3302",
    "ASTM D3174",
    "ASTM D3175",
    "ASTM D4239",
    "ASTM D5865",
    "ASTM D720",
    "ASTM D2639",
    "ASTM D5515",
    "ASTM D5263",
  ],
  parameters: [
    {
      name: "Ash (Dry)",
      value: "3.76%",
      benchmark: "Platts PLV benchmark: 9.3% \u2014 60% below",
      rating: "excellent",
    },
    {
      name: "Sulfur (Dry)",
      value: "0.61%",
      benchmark: "Fastmarkets premium: <1%",
      rating: "excellent",
    },
    {
      name: "Volatile Matter (Dry)",
      value: "34.93%",
      benchmark: null,
      rating: null,
    },
    {
      name: "Fixed Carbon (Dry)",
      value: "61.31%",
      benchmark: null,
      rating: null,
    },
    {
      name: "Gross Calorific Value",
      value: "14,859 Btu/lb",
      benchmark: "Dry basis",
      rating: null,
    },
    {
      name: "Free Swelling Index",
      value: "8.5",
      benchmark: "Top of HCC range (6\u20139)",
      rating: "excellent",
    },
    {
      name: "Gieseler Max Fluidity",
      value: ">30,000 DDPM",
      benchmark: "Matches US HVA spec",
      rating: "superior",
    },
    {
      name: "Relative Degree of Oxidation",
      value: "93\u201395%T",
      benchmark: "Fresh, unoxidized coal",
      rating: null,
    },
  ],
  whyItMatters: [
    "Ultra-low ash (3.76%) means less slag, higher coke yield, and lower processing costs for blast furnace operators.",
    "Exceptional fluidity (>30,000 DDPM) produces stronger coke for modern blast furnaces.",
    "Low sulfur (0.61%) meets the strictest environmental and quality specifications globally.",
    "This coal is ideal as a primary coking coal or premium blend component.",
  ],
} as const;
