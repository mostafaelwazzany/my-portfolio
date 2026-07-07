import React from 'react';
import { FaBriefcase, FaLocationDot } from "react-icons/fa6";
import { BsCalendar2RangeFill } from "react-icons/bs";

const WorkExperience = () => {
  const experiences = [
    {
      company: "Tech Mastery",
      period: "Sep 2025 - Present",
      role: "Instructor, Mentor & Developer",
      location: "Minya, Egypt",
      highlights: [
        "Delivered Node.js, Express.js, and MongoDB courses to 30+ students, covering API development and deployment best practices.",
        "Provided 1:1 mentorship for backend explanations, debugging, and production deployment guidance.",
        "Led backend development for client websites and implemented REST APIs.",
        "Deployed 30+ production backends serving 10,000+ daily requests with 99.9% uptime and zero security incidents.",
      ],
    },
    {
      company: "Ria.bio",
      period: "June 2024 - June 2025",
      role: "Backend Developer & Database Administrator",
      location: "Algeria / Remote",
      highlights: [
        "Engineered scalable backend services using Node.js, Express.js, and MongoDB.",
        "Designed and optimized MongoDB schemas and queries, improving database performance by 40% under high load.",
        "Integrated payment systems including PayPal and Sharji automation for secure transactions.",
        "Built APIs supporting 100+ merchants and 500+ daily users with 99.9% uptime.",
      ],
    },
    {
      company: "1x-Math",
      period: "June 2023 - Feb 2025",
      role: "Backend Developer",
      location: "Educational Platform, Egypt",
      highlights: [
        "Developed the backend for an education platform serving 500+ students per month.",
        "Integrated Paymob payments with automated code delivery, reducing manual processing by 95%.",
        "Built student performance analytics using MongoDB aggregation pipelines.",
        "Implemented secure code validation with JWT authentication and real-time training session management.",
      ],
    },
    {
      company: "UNK Team",
      period: "Aug 2023 - Dec 2023",
      role: "Full-Stack Developer",
      location: "Discord E-commerce Platform, Egypt",
      highlights: [
        "Developed a full-stack e-commerce platform for Discord products with HTML, CSS, JavaScript, Bootstrap, Node.js, Express.js, and MongoDB.",
        "Implemented automated purchase and delivery with PayPal integration, processing 200+ daily transactions.",
        "Built user registration, product catalog, shopping cart, checkout, and order management features.",
        "Optimized APIs for sub-200ms response times and 99.8% transaction success rate.",
      ],
    },
    {
      company: "GDG Minia",
      period: "2025 - Present",
      role: "Technical Team Member",
      location: "Minya, Egypt",
      highlights: [
        "Developed production APIs and contributed to backend infrastructure for Google Developer Group events and workshops.",
        "Supported technical event operations with backend-ready solutions for community activities.",
        "Collaborated with team members on technical planning, implementation, and event support.",
      ],
    },
    {
      company: "IEEE Minia",
      period: "2025 - Present",
      role: "Technical Team Member",
      location: "Minya, Egypt",
      highlights: [
        "Conducted technical interviews for committee applicants.",
        "Evaluated Node.js, Express.js, and MongoDB skills for 20+ candidates.",
        "Helped the technical team select and prepare members for backend-related responsibilities.",
      ],
    },
    {
      company: "Bright Future",
      period: "2025 - Present",
      role: "Backend Track Instructor",
      location: "Minya, Egypt",
      highlights: [
        "Delivered backend development sessions for aspiring developers.",
        "Taught Node.js, Express.js, MongoDB, API design, and deployment fundamentals.",
        "Helped students understand backend workflows through practical explanations and examples.",
      ],
    },
  ];

  return (
    <section id="work-experience" className="w-full py-12 px-4 overflow-x-hidden">
      <div className="mx-auto max-w-6xl">
        <div className='m-6 w-fit mx-auto justify-center hover:bg-primary transition text-center'>
          <h4 className='text-white text-4xl hover:text-primary2 sm:text-5xl md:text-6xl font-bold'>
            Work Experience
          </h4>
          <div className='w-full border-t-primary mt-5 border-t-2'></div>
        </div>

        <div className="relative mt-10 space-y-8 before:absolute before:left-4 before:top-3 before:h-[calc(100%-24px)] before:w-0.5 before:bg-primary/40 md:before:left-1/2">
          {experiences.map((item, index) => (
            <article
              key={item.company}
              className="relative md:grid md:grid-cols-2 md:gap-12"
            >
              <div className="absolute left-1.5 top-8 z-10 flex h-5 w-5 items-center justify-center rounded-full bg-primary ring-8 ring-primary2 md:left-1/2 md:-translate-x-1/2">
                <FaBriefcase className="text-xs text-primary2" />
              </div>

              <div
                className={`ml-10 rounded-2xl border border-white/15 bg-white/10 p-5 shadow-2xl shadow-primary/10 backdrop-blur-sm transition hover:border-primary/50 hover:shadow-primary/20 md:ml-0 ${
                  index % 2 === 0 ? 'md:col-start-1' : 'md:col-start-2'
                }`}
              >
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <h3 className="text-2xl font-bold text-white">{item.company}</h3>
                    <p className="mt-1 text-lg font-semibold text-primary">{item.role}</p>
                  </div>
                  <span className="rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-sm font-bold text-primary">
                    {index === 0 ? "Current" : "Experience"}
                  </span>
                </div>

                <div className="mt-4 flex flex-wrap gap-3 text-sm font-semibold text-white/75">
                  <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1">
                    <BsCalendar2RangeFill className="text-primary" />
                    {item.period}
                  </span>
                  <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1">
                    <FaLocationDot className="text-primary" />
                    {item.location}
                  </span>
                </div>

                <ul className="mt-5 space-y-3 text-base leading-relaxed text-white/80">
                  {item.highlights.map((highlight) => (
                    <li key={highlight} className="flex gap-3">
                      <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-primary"></span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;
