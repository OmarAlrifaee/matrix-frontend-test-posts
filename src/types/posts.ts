export type Post = {
  id: number;
  title: string;
  description: string;
  image: string | null;
  user_id: number;
  created_at: string;
  updated_at: string;
};
export type AddPost = {
  title: string;
  description: string;
  image: string | null;
}
export type UpdatePost = {
  title?: string;
  description?: string;
  image?: string | null;
}
export type PaginatedPosts = {
  current_page: number;
  data: Post[];
  first_page_url: string;
  from: number;
  last_page: number;
  last_page_url: string;
  next_page_url: string | null;
  path: string;
  per_page: number;
  prev_page_url: string | null;
  to: number;
  total: number;
  links: { url: string | null; label: string; active: boolean }[];
};
