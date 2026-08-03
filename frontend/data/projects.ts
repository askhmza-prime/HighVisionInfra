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

export const PROJECTS_DATA: Project[] = [];

export default PROJECTS_DATA;
