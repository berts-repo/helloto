import type { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/posts";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://helloto.dev";
  const posts = getAllPosts();

  return [
    {
      url: `${baseUrl}/`,
      changeFrequency: "monthly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/resume`,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/webpost`,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    ...posts.map((post) => ({
      url: `${baseUrl}/webpost/${post.slug}`,
      lastModified: new Date(post.date),
      changeFrequency: "yearly" as const,
      priority: 0.7,
    })),
  ];
}
