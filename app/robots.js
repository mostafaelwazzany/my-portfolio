export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/messages"],
    },
    sitemap: "https://mostafadev.site/sitemap.xml",
    host: "https://mostafadev.site",
  };
}
