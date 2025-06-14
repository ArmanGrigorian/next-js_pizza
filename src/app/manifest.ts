import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Next Pizza ",
    short_name: "Next Pizza",
    description: "The best pizza in the world",
    display: "standalone",
    start_url: "/",
    background_color: "#fff",
    theme_color: "#fff",
    icons: [
      {
        src: "/favicon/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
      {
        src: "/favicon/web-app-manifest-192x192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "/favicon/web-app-manifest-512x512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  };
}
