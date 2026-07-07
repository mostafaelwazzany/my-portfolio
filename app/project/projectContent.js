const projectContent = {
  "gdg-api": {
    client: "GDG Minia",
    role: "Backend Developer",
    challenges: [
      "The event team needed a reliable API to manage and expose GDG Minia data in a structured way.",
      "The backend had to support production usage while keeping the data model easy to maintain.",
    ],
    solutions: [
      "Built RESTful API endpoints for project and event data using Node.js and Express.js.",
      "Structured the database layer to keep reads fast and responses consistent for frontend usage.",
    ],
    results: [
      "Improved backend readiness for GDG Minia event and workshop infrastructure.",
      "Created a maintainable API foundation that can be extended for future community features.",
    ],
  },
  ria: {
    client: "Ria.bio",
    role: "Backend Developer & Database Administrator",
    challenges: [
      "Ria.bio needed scalable backend services for merchants, stores, virtual cards, and payment workflows.",
      "Database queries had to stay fast under higher usage and merchant activity.",
    ],
    solutions: [
      "Engineered backend services with Node.js, Express.js, and MongoDB.",
      "Optimized MongoDB schemas, indexes, and queries, and integrated payment automation with PayPal and Sharji.",
    ],
    results: [
      "Improved database performance by 40% under load.",
      "Supported 100+ merchants, 500+ daily users, and 99.9% uptime.",
    ],
  },
  "1xmath": {
    client: "1x-Math",
    role: "Backend Developer",
    challenges: [
      "The platform needed student training access, parent code purchases, analytics, and secure validation.",
      "Manual code delivery slowed down operations and reduced conversion.",
    ],
    solutions: [
      "Built the backend with secure JWT authentication and code validation.",
      "Integrated Paymob payments with automated code delivery and MongoDB analytics pipelines.",
    ],
    results: [
      "Served 500+ students per month.",
      "Reduced manual payment and code processing by 95%.",
    ],
  },
  unk: {
    client: "UNK Team",
    role: "Full-Stack Developer",
    challenges: [
      "The team needed an automated e-commerce flow for Discord products.",
      "Purchases, delivery, checkout, and order management had to work without manual handling.",
    ],
    solutions: [
      "Developed the frontend with HTML, CSS, JavaScript, and Bootstrap.",
      "Built the backend with Node.js, Express.js, MongoDB, PayPal integration, and automated delivery.",
    ],
    results: [
      "Processed 200+ daily transactions with zero payment failures.",
      "Achieved sub-200ms API response times and 99.8% transaction success rate.",
    ],
  },
  progames: {
    client: "Pro Games",
    role: "Full-Stack Developer",
    challenges: [
      "The project needed a clean management experience for Discord game and server tools.",
      "Users needed easier access to bot configuration and server management features.",
    ],
    solutions: [
      "Designed and implemented a web interface for managing Discord bot features.",
      "Built backend endpoints to support server and game management workflows.",
    ],
    results: [
      "Made Discord server management easier and more organized.",
      "Created a foundation for expanding game and bot administration tools.",
    ],
  },
  goldavt: {
    client: "Gold AVT",
    role: "Full-Stack Developer",
    challenges: [
      "The project needed a visual gallery for avatars and banners.",
      "Content had to be displayed clearly for Discord community users.",
    ],
    solutions: [
      "Built a simple, responsive display experience for avatar and banner assets.",
      "Organized project content so users can browse visuals quickly.",
    ],
    results: [
      "Delivered a focused gallery experience for community assets.",
      "Improved content discoverability for avatar and banner users.",
    ],
  },
};

export function enrichProject(project) {
  if (!project) return null;

  const details = projectContent[project.slug] || {};

  return {
    ...project,
    client: details.client || project.client || project.company || "Independent Project",
    role: details.role || project.role || "Full-Stack Developer",
    challenges: details.challenges || [
      "The project required a clean, reliable implementation that matched user needs and production constraints.",
    ],
    solutions: details.solutions || [
      "Built a maintainable solution using modern web development practices and a clear backend/frontend structure.",
    ],
    results: details.results || [
      "Delivered a working project with a scalable structure for future improvements.",
    ],
  };
}

export default projectContent;
