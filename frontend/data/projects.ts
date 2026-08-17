export interface Project {
  id: string;
  slug: string;

  title: string;
  description: string;

  location: string;

  type: string;
  image: string;
  coverImage: string;

  price: string;
  startingPrice: string;
  pricePerSqYd?: string;

  sqYardsRange: string;

  approvalStatus: string;

  bankLoanAvailable: boolean;

  highlights: string[];

  featured?: boolean;
}

export const PROJECTS_DATA: Project[] = [
  {
    id: "signature-residency",
    slug: "signature-residency",
    title: "Signature Residency",
    description:
      "A thoughtfully planned residential development designed for comfortable living, modern infrastructure and long-term investment potential.",
    location: "Moradabad, Uttar Pradesh",
    type: "Residential Plots",
    image: "/images/hero/hero-banner.jpg",
    coverImage: "/images/hero/hero-banner.jpg",
    price: "₹15.95 Lakh",
    startingPrice: "₹15.95 Lakh",
    pricePerSqYd: "Contact for current pricing",
    sqYardsRange: "100–300 Sq. Yards",
    approvalStatus: "Verified Project",
    bankLoanAvailable: true,
    highlights: [
      "Planned residential community",
      "Strategic location",
      "Modern infrastructure",
      "Investment potential",
    ],
    featured: true,
  },

  {
    id: "gulab-enclave",
    slug: "gulab-enclave",
    title: "Gulab Enclave",
    description:
      "A premium plotted development created for families looking for comfortable surroundings and future growth potential.",
    location: "Moradabad, Uttar Pradesh",
    type: "Residential Plots",
    image: "/images/hero/hero-banner.jpg",
    coverImage: "/images/hero/hero-banner.jpg",
    price: "₹12.50 Lakh",
    startingPrice: "₹12.50 Lakh",
    pricePerSqYd: "Contact for current pricing",
    sqYardsRange: "100–250 Sq. Yards",
    approvalStatus: "Verified Project",
    bankLoanAvailable: true,
    highlights: [
      "Family-friendly environment",
      "Well-planned layout",
      "Multiple plot sizes",
      "Long-term investment potential",
    ],
    featured: true,
  },

  {
    id: "high-vision-greens",
    slug: "high-vision-greens",
    title: "High Vision Greens",
    description:
      "A premium plotted development focused on spacious layouts, accessibility and thoughtful community planning.",
    location: "Moradabad, Uttar Pradesh",
    type: "Premium Plots",
    image: "/images/hero/hero-banner.jpg",
    coverImage: "/images/hero/hero-banner.jpg",
    price: "₹10.95 Lakh",
    startingPrice: "₹10.95 Lakh",
    pricePerSqYd: "Contact for current pricing",
    sqYardsRange: "80–300 Sq. Yards",
    approvalStatus: "Verified Project",
    bankLoanAvailable: false,
    highlights: [
      "Spacious plots",
      "Planned infrastructure",
      "Multiple plot sizes",
      "Accessible location",
    ],
    featured: true,
  },
];

export default PROJECTS_DATA;
