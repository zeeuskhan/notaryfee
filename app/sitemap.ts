import type { MetadataRoute } from "next";
const base = "https://notaryfee-darvesh-projects.vercel.app";
const paths = [
  "", "/about", "/contact", "/privacy-policy", "/terms", "/editorial-policy",
  "/methodology", "/notary-fees-by-state", "/mobile-notary-travel-fees",
  "/loan-signing-fees", "/notary-profit-calculator"
];
export default function sitemap(): MetadataRoute.Sitemap {
  return paths.map((path) => ({
    url: base + path,
    lastModified: new Date(),
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : path === "/notary-fees-by-state" ? 0.9 : 0.7
  }));
}
