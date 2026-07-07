import GlobalApi from "./api/GlobalApi";

const siteUrl = "https://mostafadev.site";

export default async function sitemap() {
  let projects = [];

  try {
    const response = await GlobalApi.mainpageProjects();
    projects = response?.projectdatas || [];
  } catch {
    projects = [];
  }

  return [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    ...projects.map((project) => ({
      url: `${siteUrl}/project/${project.slug}`,
      lastModified: project.dataCreateion
        ? new Date(project.dataCreateion)
        : new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    })),
  ];
}
