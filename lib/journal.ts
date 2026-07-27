import type { ComponentType } from "react";
import MeetsMeWhereIAm, {
  meta as meetsMeWhereIAm,
} from "@/content/journal/meets-me-where-i-am";
import TheReconcilerWasThePoint, {
  meta as theReconcilerWasThePoint,
} from "@/content/journal/the-reconciler-was-the-point";

export type PostMeta = {
  slug: string;
  title: string;
  date: string; // ISO date, YYYY-MM-DD
  description: string;
  keywords?: string[];
};

export type Post = PostMeta & { Body: ComponentType };

// Newest first. To add a post: create content/journal/<slug>.tsx exporting a
// `meta` object and a default Body component, import it above, then prepend it
// here. Everything else (index, post page, sitemap, RSS) picks it up for free.
export const posts: Post[] = [
  { ...theReconcilerWasThePoint, Body: TheReconcilerWasThePoint },
  { ...meetsMeWhereIAm, Body: MeetsMeWhereIAm },
];

export function getPost(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}
