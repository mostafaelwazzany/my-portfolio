'use client';

import Link from 'next/link';
import { useState } from 'react';
import { FaLink } from "react-icons/fa";
import { BsBuildingFill, BsFillPatchCheckFill } from "react-icons/bs";
import { FaUserTie } from "react-icons/fa6";

const DetailCard = ({ title, children }) => (
  <section className="rounded-2xl border border-white/15 bg-white/10 p-5 shadow-xl shadow-primary/10 backdrop-blur-sm">
    <h3 className="mb-3 text-xl font-bold text-primary">{title}</h3>
    {children}
  </section>
);

const BulletList = ({ items }) => (
  <ul className="space-y-3 text-base leading-relaxed text-white/80">
    {items.map((item) => (
      <li key={item} className="flex gap-3">
        <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-primary"></span>
        <span>{item}</span>
      </li>
    ))}
  </ul>
);

const ProjectDetailsClient = ({ project }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  if (!project) {
    return (
      <div className='mb-8 m-20 mt-10 mx-4 md:mx-10 border-2 border-primary/40 shadow-2xl backdrop-blur-sm shadow-primary/20 p-5 bg-white/10 rounded-xl lg:mx-40'>
        <p className='text-center text-white text-2xl font-bold'>Project not found.</p>
      </div>
    );
  }

  return (
    <div className='mb-8 m-20 mt-10 mx-4 md:mx-10 border-2 border-primary/40 shadow-2xl backdrop-blur-sm shadow-primary/20 p-5 bg-white/10 rounded-xl lg:mx-40'>
      <nav aria-label="Breadcrumb" className="flex">
        <ol className="flex overflow-hidden m-4 rounded-lg border border-primary/50 text-gray-600">
          <li className="flex items-center">
            <Link
              href="/"
              className="flex h-10 items-center gap-1.5 bg-primary px-4 transition hover:text-gray-900"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>

              <span className="ms-1.5 text-sm md:text-xl text-gray-800 font-arabicUI2">Home</span>
            </Link>
          </li>

          <li className="relative cursor-default flex items-center">
            <span className="absolute inset-y-0 -start-px h-10 w-4 bg-primary [clip-path:_polygon(0_0,_0%_100%,_100%_50%)] rtl:rotate-180"></span>

            <h1 className="flex h-10 text-sm md:text-xl text-gray-800 font-arabicUI2 items-center bg-white pe-4 ps-8 font-medium transition hover:text-gray-900">
              {project.title}
            </h1>
          </li>
        </ol>
      </nav>

      <div className="px-2 pb-4 pt-2 text-center">
        <p className="text-sm font-bold uppercase tracking-[0.25em] text-primary">Project Details</p>
        <h2 className="mt-2 text-4xl font-extrabold text-white md:text-6xl">{project.title}</h2>
      </div>

      <div className='grid grid-cols-1 mt-5 gap-8 lg:grid-cols-5'>
        <div className='col-span-1 lg:col-span-3'>
          {project?.image?.length > 0 && (
            <img
              height={550}
              width={550}
              alt={`${project.title} project screenshot`}
              src={project.image[activeIndex].url}
              className="mx-auto w-full max-w-3xl rounded-2xl shadow-2xl shadow-black/30"
            />
          )}

          {project?.image?.length > 1 && (
            <div className='mt-6 grid grid-cols-2 gap-4 md:grid-cols-4'>
              {project.image.map((image, index) => (
                <button
                  key={image.url || index}
                  onClick={() => { setActiveIndex(index); }}
                  className={`overflow-hidden rounded-xl border-2 transition ${activeIndex === index ? 'border-primary scale-105' : 'border-white/15 hover:border-primary/60'}`}
                >
                  <img
                    src={image.url}
                    alt={`${project.title} screenshot ${index + 1}`}
                    className="h-24 w-full object-cover"
                  />
                </button>
              ))}
            </div>
          )}
        </div>

        <div className='col-span-1 space-y-4 lg:col-span-2'>
          <DetailCard title="Project Title">
            <p className="text-2xl font-bold text-white">{project.title}</p>
            {project.dataCreateion && (
              <p className='mt-3 inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-sm font-semibold text-primary'>
                <BsFillPatchCheckFill className='text-base text-primary'></BsFillPatchCheckFill>
                {project.dataCreateion}
              </p>
            )}
          </DetailCard>

          <div className="grid gap-4 sm:grid-cols-2">
            <DetailCard title="Client / Company">
              <p className="flex items-center gap-3 text-lg font-semibold text-white">
                <BsBuildingFill className="text-primary" />
                {project.client}
              </p>
            </DetailCard>

            <DetailCard title="Role">
              <p className="flex items-center gap-3 text-lg font-semibold text-white">
                <FaUserTie className="text-primary" />
                {project.role}
              </p>
            </DetailCard>
          </div>

          <DetailCard title="Description">
            <p className='text-lg leading-relaxed text-white/80'>{project.description}</p>
          </DetailCard>

          {project.link && (
            <a
              target='_blank'
              rel="noopener noreferrer"
              href={project.link}
              className='inline-flex w-full items-center justify-center gap-3 rounded-xl bg-primary p-4 text-xl font-bold text-primary2 transition hover:scale-[1.02] hover:bg-white'
            >
              <FaLink />
              Visit Project
            </a>
          )}
        </div>
      </div>

      <div className="mt-8 grid gap-5 lg:grid-cols-2">
        <DetailCard title="Challenges & Solutions">
          <div className="space-y-5">
            <div>
              <h4 className="mb-3 font-bold text-white">Challenges</h4>
              <BulletList items={project.challenges || []} />
            </div>
            <div>
              <h4 className="mb-3 font-bold text-white">Solutions</h4>
              <BulletList items={project.solutions || []} />
            </div>
          </div>
        </DetailCard>

        <DetailCard title="Result & Impact">
          <BulletList items={project.results || []} />
        </DetailCard>
      </div>
    </div>
  );
};

export default ProjectDetailsClient;
