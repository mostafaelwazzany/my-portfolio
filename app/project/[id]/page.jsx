'use client';

import GlobalApi from '@/app/api/GlobalApi';
import React, { useEffect, useState } from 'react';
import { FaLink } from "react-icons/fa";
import { BsFillPatchCheckFill } from "react-icons/bs";
import Link from 'next/link';

const ProjectCont = ({ params }) => {
  const [project, setProject] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);

  const { id } = React.use(params);
  console.log(id)
  useEffect(() => {
    if (id) {
      getProject(id);
    }
  }, [id]);

  const getProject = async (projectId) => {
    try {
      const response = await GlobalApi.projectdatas(projectId)
      console.log(response)

      setProject(response.projectdatas[0]);
    } catch (error) {
      console.error('Error fetching project:', error);
    }
  };

  return (
    <div className='mb-8 m-20 mt-10 mx-4 md:mx-10 border-2 border-yellow-500 shadow-2xl backdrop-blur-sm shadow-yellow-500/20 p-5  bg-black/40 rounded-xl lg:mx-40'>
      {/*
  Heads up! This component comes with some `rtl` classes. Please remove them if they are not needed in your project.
*/}
      <nav aria-label="Breadcrumb" className="flex">
        <ol className="flex overflow-hidden m-4 rounded-lg border border-yellow-400 text-gray-600">
          <li className="flex items-center">
            <Link
              href="/"
              className="flex h-10 items-center gap-1.5 bg-yellow-400 px-4 transition hover:text-gray-900"
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

              <span className="ms-1.5 text-sm  md:text-xl text-gray-800 font-arabicUI2">الصفحة الرئيسية</span>
            </Link>
          </li>

          <li className="relative cursor-default  flex items-center">
            <span
              className="absolute inset-y-0 -start-px h-10 w-4 bg-yellow-400 [clip-path:_polygon(0_0,_0%_100%,_100%_50%)] rtl:rotate-180"
            >
            </span>

            <h1
              href="#"
              className="flex h-10  text-sm  md:text-xl text-gray-800 font-arabicUI2 items-center bg-white pe-4 ps-8  font-medium transition hover:text-gray-900"
            >
              {project.title}
            </h1>
          </li>
        </ol>
      </nav>

      <div className='grid grid-cols-1 mt-5 md:grid-cols-2 lg:grid-cols-5 mb-32 gap-4'>


        {/* Project Image */}
        <div className='col-span-1 lg:col-span-3'>
          {project?.image?.length > 0 && (
            <img
              height={550}
              width={550}
              alt="Project Image"
              src={project.image[activeIndex].url}
              className="mx-auto  rounded-lg shadow-lg"
            />
          )}
        </div>

        {/* Project Description */}
        <div dir='rtl' className='col-span-1 lg:col-span-2 relative'>
          <h4 className='bg-white/10 gap-2 place-items-center p-2 mr-0 flex rounded-xl text-2xl md:text-3xl  w-fit   md:leading-relaxed text-right my-4 font-arabicUI3 text-white'>
            {project.title}
          </h4>
          <h3 className='bg-yellow-500/10 w-fit p-2 rounded-xl  text-sm md:text-xl   md:leading-relaxed place-items-center flex gap-2 text-right my-4 font-arabicUI3 text-yellow-500'>
            {` تاريخ انشاء المشروع => ${project.dataCreateion}  `}<BsFillPatchCheckFill className=' text-xl text-yellow-500'></BsFillPatchCheckFill>
          </h3>
          <p className='text-xl sm:text-2xl md:text-3xl text-right leading-snug font-arabicUI3 text-white/80'>
            {project.description}
          </p>

          {/* Project Link */}
          <a target='_blank' href={project.link}>
            <h4 className='bg-blue-500 place-items-center active:ring-4 ring-blue-400 absolute right-0 p-4 rounded-xl  text-xl md:text-3xl text-right my-8 w-fit font-arabicUI3 text-white flex gap-2'>
              <FaLink />
              رابط المشروع
            </h4>
          </a>
        </div>


      </div>

      {/* Image Gallery */}
      <div className='grid grid-cols-2 md:grid-cols-4  gap-14 mt-10'>
        {project?.image?.map((image, index) => (
          index !== 0 && (
            <div key={index} className="p-2">
              <img
                onClick={() => { setActiveIndex(index); }}
                src={image.url}
                alt={`Image for ${project.name}`}
                className={`rounded-lg shadow-lg transition-all transform ${activeIndex === index ? 'scale-125 border-4 border-white' : ''}`}
              />
            </div>
          )
        )) || <p>No images available</p>}
      </div>
    </div>
  );
};

export default ProjectCont;
