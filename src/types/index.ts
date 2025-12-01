export type Category =
  | 'Typographies'
  | 'Colorimétrie'
  | 'Illustrations'
  | 'UI Kits / Components'
  | 'Logos / Icônes'
  | 'Templates / Interfaces'
  | 'Outils IA';

export type Tag = 'Gratuit' | 'Payant' | 'Freemium' | 'Open source';

export interface Resource {
  id: string;
  title: string;
  category: Category;
  visual: string;
  description: string;
  link: string;
  rating: number; // 1-5
  tags: Tag[];
  featured?: boolean;
}

export interface Article {
  id: string;
  title: string;
  author: string;
  date: string;
  excerpt: string;
  content: string;
  image: string;
  resources: string[]; // Resource IDs
}

export interface User {
  id: string;
  email: string;
  name: string;
  createdAt: string;
}

export interface UserProfile {
  favorites: string[]; // Resource IDs
  history: string[]; // Resource IDs
  myResources: string[]; // Resource IDs
}
