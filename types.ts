
export enum Category {
  ALL = 'All',
  PUZZLE = 'Puzzle',
  RACING = 'Racing',
  ACTION = 'Action',
  KIDS = 'Kids',
  SPORTS = 'Sports',
  ARCADE = 'Arcade',
  CASUAL = 'Casual'
}

export interface Game {
  id: string;
  slug: string;
  title: string;
  category: Category;
  thumbnail: string;
  playUrl?: string;
  tagline: string;
  description: string;
  plays: string;
  rating: number;
  tags: string[];
  isFeatured?: boolean;
  isNew?: boolean;
}

export interface CategoryData {
  id: Category;
  title: string;
  icon: string;
  color: string;
}
