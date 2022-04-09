import useSWR from "swr";
import {
  GetArticlesParams,
  getDevToArticles,
  getDevToProfile,
} from "utils/api";

export default function useDevTo(params?: GetArticlesParams) {
  const { data: profile } = useSWR("getDevToProfile", getDevToProfile);
  const { data: articles } = useSWR("getDevToArticles", () =>
    getDevToArticles({ ...params })
  );
  return { profile, articles };
}
