export interface BlogItem {
  slug: string;
  title: string;
  excerpt: string;
  featuredImage: string;
  category: string;
  author: string;
  authorImage?: string;
  date: string;
  readingTime?: number;
  content: string;
}