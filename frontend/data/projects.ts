export interface Project {
  slug: string;
  title: string;
  location: string;
  startingPrice: string;
  pricePerSqYd?: string;
  approvalStatus: string;
  coverImage: string;
  description: string;
  sqYardsRange: string;
  bankLoanAvailable: boolean;
  highlights: string[];
}

export const PROJECTS_DATA: Project[] = [];

export default PROJECTS_DATA;
