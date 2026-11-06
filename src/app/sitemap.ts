import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return ["", "/about", "/events", "/apply", "/contact"].map((p) => ({ url: `${site.url}${p}` }));
}
