import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Benton Youth Initiative",
    short_name: "BYI",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#27374b",
    icons: [{ src: "/images/byi-crest.png", sizes: "500x500", type: "image/png" }],
  };
}
