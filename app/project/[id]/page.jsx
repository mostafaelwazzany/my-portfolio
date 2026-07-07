import GlobalApi from '@/app/api/GlobalApi';
import ProjectDetailsClient from './ProjectDetailsClient';
import { enrichProject } from '../projectContent';

const siteUrl = "https://mostafaelwazzany.site";

const getProject = async (slug) => {
  try {
    const response = await GlobalApi.projectdatas(slug);
    return enrichProject(response?.projectdatas?.[0] || null);
  } catch {
    return null;
  }
};

export async function generateStaticParams() {
  try {
    const response = await GlobalApi.mainpageProjects();
    return (response?.projectdatas || []).map((project) => ({
      id: project.slug,
    }));
  } catch {
    return [];
  }
}

export async function generateMetadata({ params }) {
  const { id } = await params;
  const project = await getProject(id);

  if (!project) {
    return {
      title: "Project Not Found",
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  const description =
    project.description?.slice(0, 155) ||
    `${project.title} by Mostafa Elwazzany, full-stack web developer.`;
  const image = project.image?.[0]?.url || "/mostafa elwazzany.jpeg";

  return {
    title: `${project.title} | Project`,
    description,
    alternates: {
      canonical: `/project/${project.slug}`,
    },
    openGraph: {
      type: "article",
      url: `${siteUrl}/project/${project.slug}`,
      title: `${project.title} | Mostafa Elwazzany`,
      description,
      siteName: "Mostafa Elwazzany Portfolio",
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: `${project.title} project by Mostafa Elwazzany`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.title} | Mostafa Elwazzany`,
      description,
      images: [image],
    },
  };
}

export default async function ProjectPage({ params }) {
  const { id } = await params;
  const project = await getProject(id);

  const jsonLd = project
    ? {
        "@context": "https://schema.org",
        "@type": "CreativeWork",
        name: project.title,
        description: project.description,
        about: [
          ...(project.challenges || []),
          ...(project.solutions || []),
          ...(project.results || []),
        ],
        url: `${siteUrl}/project/${project.slug}`,
        image: project.image?.map((image) => image.url) || [],
        creator: {
          "@type": "Person",
          name: "Mostafa Elwazzany",
          url: siteUrl,
        },
      }
    : null;

  return (
    <>
      {jsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      )}
      <ProjectDetailsClient project={project} />
    </>
  );
}
