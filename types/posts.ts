export type Post = {
  [key: string]: any;
  title: string;
  image: string;
  excerpt: string;
  date: string;
  slug: string;
  isFeatured?: boolean;
};
