'use client'
import Image from 'next/image'
import React from 'react'
import { MdCloudDownload } from "react-icons/md";
import { FaFileAlt } from "react-icons/fa";
import { TbMessageFilled } from "react-icons/tb";
import { FaFacebook } from "react-icons/fa6";
import { GrInstagram } from "react-icons/gr";
import { FaXTwitter } from "react-icons/fa6";
import { Analytics } from "@vercel/analytics/react"
const Hero = () => {

    const scrollToAbout = () => {
        document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
    };
    const scrollTocontact = () => {
        document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className='overflow-x-hidden'>
            <div className=' cursor-default select-none grid-cols-1  grid md:grid-cols-12'>

                <div className="p-5 max-sm:hidden  md:p-9 col-span-5 w-full  flex justify-center  md:h-screen rounded-tr-[100px] md:rounded-tr-[200px] rounded-bl-[100px] md:rounded-bl-[200px] shadow-primary/30 shadow-2xl bg-primary">
                    <div className="relative  w-full max-w-[300px] sm:max-w-[400px] md:max-w-[450px]">
                        <Image
                            className="rounded-3xl scale-90 "
                            width={400}
                            height={400}
                            alt="profile picture"
                            src="/prof.jpg"
                            layout="responsive"
                        />
                        <div className="absolute right-0 bottom-5">
                            <h3 className="bg-white text-lg sm:text-xl md:text-3xl font-lalezar text-primary2 rounded-bl-2xl rounded-tr-2xl p-2 text-center">
                                Mostafa Ayman
                            </h3>
                        </div>
                    </div>
                </div>


                <div className='relative order-3  justify-center items-center col-span-7 flex text-7xl'>

                    <div className='  p-10'>
                        <div className=' md:hidden  top-1 place-items-center gap-4 flex right-5'>

                            <div className='  m-6 text-4xl text-primary flex gap-3'>

                                <FaFacebook>
                                    
                                </FaFacebook>

                                <GrInstagram />
                                <FaXTwitter />


                            </div>
                            <button className='  flex gap-2 place-items-center bg-primary text-primary2 text-2xl p-2 font-bold rounded-bl-2xl  rounded-tr-2xl '>
                                contact
                                <TbMessageFilled /></button>
                        </div>
                        <div className=' hidden absolute md:block   top-1 place-items-center gap-4  right-5'>

                            <div className=' place-items-center  m-6 text-4xl text-primary flex gap-3'>

                            <a 
      href="https://www.facebook.com/mostafa.aimanelwzzany/" 
      target="_blank" 
      rel="noopener noreferrer"
    >
      <FaFacebook className="hover:scale-125 transition hover:text-blue-500 cursor-pointer" />
    </a>
    <a 
          href="https://www.instagram.com/mostafa_elwzzany/"
          target="_blank" 
          rel="noopener noreferrer"
        >
                                <GrInstagram className=' hover:scale-125 transition hover:text-red-500 cursor-pointer' />
                                </a>

                                <a 
          href="https://x.com/Mostafawazzany1" 
          target="_blank" 
          rel="noopener noreferrer"
        >     
                                <FaXTwitter className=' hover:scale-125 transition hover:text-black cursor-pointer' />
                                </a>
                                <button onClick={scrollTocontact} className='  hover:scale-110 transition hover:bg-white shadow-xl shadow-primary/30 hover:shadow-white/30 flex gap-2 place-items-center bg-primary text-primary2 text-2xl p-2 font-bold rounded-bl-2xl  rounded-tr-2xl '>
                                    contact
                                    <TbMessageFilled /></button>

                            </div>

                        </div>

                        <h3 className=' font-bold text-white' >i'm <span className=' text-primary font-bold'> SASA  </span> </h3>
                        <h3 className=' text-white font-extrabold'>Web developer</h3>
                        <h3 className=' text-primary text-3xl flex pl-8 p-5 font-lalezar'>I'm a back-end Developer</h3>

                        <div className=' w-full h-1 border-t-2 rounded-xl border-primary'></div>


                        
                        <div className="flex order-3 flex-col sm:flex-row items-center justify-center md:justify-start gap-4 mt-6">
                            {/* Read More Button */}
                            <button onClick={scrollToAbout} className="font-bold shadow-white/30 hover:shadow-primary/30 shadow-xl hover:scale-110 transition hover:bg-primary   flex items-center justify-center gap-2 text-primary2 bg-white rounded-full px-5 py-2 w-full  text-sm sm:text-base md:text-lg">
                                <MdCloudDownload />
                                About Me
                            </button>

                            {/* My CV Button */}
                            <button
    className="font-bold shadow-white/30 hover:shadow-primary/30 shadow-xl hover:scale-110 transition hover:bg-primary flex items-center justify-center gap-3 text-primary2 bg-white rounded-full px-5 py-2 w-full text-sm sm:text-base md:text-lg"
    onClick={() => window.open('https://drive.google.com/file/d/1j_XBhSme-s8HnxVslvnwA4xM4GytS3vN/view?usp=sharing', '_blank')}
>
    <FaFileAlt />
    My CV
</button>
                        </div>



                    </div>
                </div>


            </div>
        </div>
    )
}

export default Hero