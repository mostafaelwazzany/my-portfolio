import React from 'react';
import { FaCode, FaDatabase, FaRocket, FaShieldHalved } from "react-icons/fa6";
import { MdPayment, MdOutlineApi } from "react-icons/md";

const OfferedServices = () => {
  const services = [
    {
      title: "Backend API Development",
      icon: <MdOutlineApi />,
      description:
        "REST APIs with Node.js, Express.js, authentication, validation, rate limiting, and clean production structure.",
    },
    {
      title: "Database Design & Optimization",
      icon: <FaDatabase />,
      description:
        "MongoDB schemas, indexing, aggregation pipelines, query optimization, and scalable data modeling.",
    },
    {
      title: "Payment Integrations",
      icon: <MdPayment />,
      description:
        "Paymob, PayPal, Sharji, checkout flows, automated delivery, and secure transaction handling.",
    },
    {
      title: "Full-Stack Web Apps",
      icon: <FaCode />,
      description:
        "React and Next.js interfaces connected to reliable backend services and admin dashboards.",
    },
    {
      title: "Deployment & DevOps Basics",
      icon: <FaRocket />,
      description:
        "Production deployments on Vercel, cloud basics, Docker workflows, environment setup, and CI/CD guidance.",
    },
    {
      title: "Security & Reliability",
      icon: <FaShieldHalved />,
      description:
        "JWT auth, secure access patterns, API hardening, uptime-focused backend structure, and production debugging.",
    },
  ];

  return (
    <section id="services" className="w-full px-4 py-12 overflow-x-hidden">
      <div className="mx-auto max-w-6xl">
        <div className='m-6 w-fit mx-auto justify-center hover:bg-primary transition text-center'>
          <h4 className='text-white text-4xl hover:text-primary2 sm:text-5xl md:text-6xl font-bold'>
            Offered Services
          </h4>
          <div className='w-full border-t-primary mt-5 border-t-2'></div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.title}
              className="group rounded-2xl border border-white/15 bg-white/10 p-6 shadow-2xl shadow-primary/10 backdrop-blur-sm transition hover:-translate-y-1 hover:border-primary/50 hover:shadow-primary/20"
            >
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary text-3xl text-primary2 transition group-hover:bg-white">
                {service.icon}
              </div>
              <h5 className="text-xl font-bold text-white">{service.title}</h5>
              <p className="mt-3 text-base leading-relaxed text-white/75">
                {service.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OfferedServices;
