export interface Project {
  id: string;
  slug: string;
  title: string;
  location: string;
  startingPrice: string;
  price?: string;
  image?: string;
  pricePerSqYd?: string;
  type: string;
  approvalStatus: string;
  coverImage: string;
  description: string;
  sqYardsRange: string;
  bankLoanAvailable: boolean;
  highlights: string[];
}

export const PROJECTS_DATA: Project[] = [];

export default PROJECTS_DATA;
