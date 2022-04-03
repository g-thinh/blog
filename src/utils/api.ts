const baseUrl =
  typeof window !== "undefined" && window.location.origin
    ? window.location.origin
    : "";

export type UserProfile = {
  github_username?: string;
  id?: number;
  joined_at?: string;
  location?: string;
  name?: string;
  profile_image?: string;
  summary?: string;
  twitter_username?: string;
  type_of: "user";
  username?: string;
  website_url?: string;
};

export type DevToArticle = {
  canonical_url?: string;
  collection_id?: number | null;
  comments_count?: number;
  cover_image?: string;
  created_at?: Date | null;
  crossposted_at: Date | null;
  description?: string;
  edited_at?: Date | null;
  id?: number;
  last_comment_at?: Date | null;
  path?: string;
  positive_reactions_count?: number;
  public_reactions_count?: number;
  published_at?: Date | null;
  published_timestamp?: Date | null;
  readable_publish_date?: string;
  reading_time_minutes?: number;
  slug?: string;
  social_image?: string;
  tag_list?: Array<string>;
  tags?: string;
  title?: string;
  url?: string;
  user: Partial<UserProfile>;
};

export type GetArticlesParams = {
  page?: number;
  per_page?: number;
};

export async function getDevToProfile(): Promise<UserProfile> {
  const response = await fetch(`${baseUrl}/api/getDevToProfile`);
  const result = await response.json();
  return result;
}

export async function getDevToArticles(
  params?: GetArticlesParams
): Promise<Array<DevToArticle>> {
  const pages = params?.page ? `&page=${params.page}` : "";
  const perPage = params?.per_page ? `&per_page=${params.per_page}` : "";
  const baseUrl = "https://dev.to/api/articles?username=gthinh";

  const response = await fetch(baseUrl + pages + perPage);
  const result = await response.json();
  return result;
}
