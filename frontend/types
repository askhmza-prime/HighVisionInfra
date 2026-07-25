export type PropertyType = "Residential" | "Commercial" | "Premium";

export interface Project {
  id: string;
  slug: string;
  title: string;
  location: string;
  startingPrice: string; // e.g. "₹15.99 Lakh Onwards"
  pricePerSqYd?: string;
  type: PropertyType;
  coverImage: string;
  galleryImages: string[];
  description: string;
  sqYardsRange: string;  // e.g. "120 - 300 Sq. Yards"
  approvalStatus: string; // e.g. "HMDA Approved" | "100% Clear Title"
  bankLoanAvailable: boolean;
  highlights: string[];
  isFeatured?: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  comment: string;
  rating: number;
  avatar?: string;
}

export interface SiteVisitBookingData {
  fullName: string;
  phoneNumber: string;
  email: string;
  preferredProject: string;
  preferredDate: string;
  preferredTime: string;
  preferredExecutive?: string;
  budgetRange?: string;
  plotSizeSqYd?: string;
  purpose?: string;
  message?: string;
}

export interface NavLink {
  label: string;
  href: string;
}
