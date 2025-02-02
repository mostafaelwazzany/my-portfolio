'use client'

import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import GlobalApi from '../api/GlobalApi';
import Link from 'next/link';
import { FaCircleArrowLeft } from "react-icons/fa6";
import { FaCircleArrowRight } from "react-icons/fa6";

const Projects = () => {

    const [project, setProjcet] = useState([])
    const [currentIndex, setCurrentIndex] = useState(0)
    const [visibleProjects, setVisibleProjects] = useState(1);

    useEffect(() => {
        fetchProjects()
    }, [])

    useEffect(() => {
        const updateVisibleProjects = () => {
            if (window.innerWidth >= 1024) setVisibleProjects(3);
            else if (window.innerWidth >= 768) setVisibleProjects(2);
            else setVisibleProjects(1);
        };

        updateVisibleProjects();
        window.addEventListener('resize', updateVisibleProjects);

        return () => window.removeEventListener('resize', updateVisibleProjects);
    }, []);

    const fetchProjects = () => {
        GlobalApi.mainpageProjects().then(res => {
            console.log(res)
            setProjcet(res.projectdatas)
        })
    }

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? project.length - visibleProjects : prevIndex - 1))
    }

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex === project.length - visibleProjects ? 0 : prevIndex + 1))
    }

    return (
        <div className='flex justify-center m-auto p-5 overflow-x-hidden'>
            <div className='w-full max-w-7xl'>
                <div className='m-6 w-fit mx-auto justify-center  hover:bg-primary transition  text-center'>
                    <h4 className='text-white text-4xl   hover:text-primary2 sm:text-5xl md:text-6xl font-bold'>My Projects</h4>
                    <div className='w-full border-t-primary mt-5 border-t-2'></div>
                </div>
                <p className='text-white text-xl sm:text-2xl md:text-3xl font-bold m-auto text-center mb-6'>
                    Some of the projects I worked on during my work period. You can see detailed pictures of them and contact us for more details.
                </p>

                <div className='relative'>
                    <button onClick={handlePrev} className='absolute z-10 left-0 top-1/2 transform -translate-y-1/2 bg-primary p-4 rounded-full text-3xl'>
                        <FaCircleArrowLeft />

                    </button>
                    <div className='flex transition-transform duration-500' style={{ transform: `translateX(-${currentIndex * (100 / visibleProjects)}%)` }}>
                        {project.map((item, index) => (
                            <div key={index} className='relative mt-4 w-full md:w-1/2 lg:w-1/3 flex-shrink-0 p-4'>
                                <div className='bg-white  rounded-xl shadow-lg overflow-hidden'>
                                    <img
                                        className='w-full h-64 object-cover'
                                        alt='project'
                                        src={item.image[0]?.url}
                                    />
                                    <div className='p-4'>
                                        <h2 className='text-2xl text-right font-arabicUI3 mb-2'>{item.title}</h2>
                                        <Link href={`/project/${item.slug}`} >
                                            <h1 className='inline-block font-arabicUI3 drop-shadow-2xl  bg-gray-800 outline-dashed outline-2 outline-offset-2 hover:bg-gray-700 outline-gray-800 text-white hover:scale-110 hover:ease-in-out transition font-bold py-2 px-4 rounded-lg'>
                                                Show More 
                                            </h1>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <button onClick={handleNext} className='absolute z-10 right-0 top-1/2 transform -translate-y-1/2 bg-primary p-4 rounded-full text-3xl'>
                        <FaCircleArrowRight />

                    </button>
                </div>
            </div>
        </div>
    );
};

export default Projects;
