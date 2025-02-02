import Image from 'next/image';
import React from 'react';
import { FaRegAddressCard, FaPhone, FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { HiOutlineLanguage } from "react-icons/hi2";

const About = () => {
    const about = [
        { name: "Name", icon: <FaRegAddressCard />, details: "Mostafa Ayman" },
        { name: "Nick Name", icon: <FaRegAddressCard />, details: "SASA" },
        { name: "Email", icon: <MdEmail />, details: "mostafawazzany@gmail.com" ,size: "text-sm md:text-lg" },
        { name: "Phone", icon: <FaPhone />, details: "+201013915804" },
        { name: "Location", icon: <FaLocationDot />, details: "Egypt, Elminya" },
        { name: "Language", icon: <HiOutlineLanguage />, details: "Arabic, English" },
    ];

    return (
        <div id='about' className="m-5 md:m-20 overflow-x-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-6 gap-8">
                {/* Image Section */}
                <div className="relative col-span-1 lg:col-span-2  justify-center">
                    <Image
                        layout="responsive"
                        className="  shadow-black/30 shadow-2xl  rounded-[30px]"
                        alt="profile"
                        width={200}
                        height={300}

                        src="/prof2.jpg"
                    />
                    <h1 className="font-bold text-2xl sm:text-3xl bg-primary text-primary2 p-2 w-fit rounded-bl-xl rounded-tr-xl absolute top-0 right-0">
                        18 Years
                    </h1>
                </div>

                {/* About Section */}
                <div className="col-span-1 lg:col-span-4">
                    <div className="md:p-10 p-3  shadow-white/20 shadow-2xl  bg-white rounded-tr-[80px] rounded-bl-[80px] ">
                        <h3 className="font-bold bg-primary text-primary2 mx-auto mb-6 p-2 text-center w-fit text-2xl sm:text-3xl md:text-4xl rounded-md">
                            About Me
                        </h3>

                        <div className="text-primary2 px-2 sm:px-6">
                            <h4 className="mt-4 font-bold text-2xl sm:text-3xl md:text-4xl">
                                Well-experienced Web Developer (3 Years)
                            </h4>
                            <p className="mt-4 font-bold text-lg sm:text-xl md:text-2xl">
                                My name is "Mostafa Aiman", my nickname is "Sasa". I am a student at Minya
                                University. I have more than three years of experience in website programming.
                                I have completed many projects and worked with several companies. You can see my
                                projects below.
                            </p>

                            {/* White Rectangle Wrapper */}
                            <div className="flex justify-center items-center w-full mt-8">
                                <div
                                    id="#about"
                                    className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-5 rounded-xl shadow-xl bg-primary w-full"
                                >
                                    {about.map((item, index) => (
                                        <div className="font-bold hover:scale-105 transition p-5 bg-white rounded-md shadow-md" key={index}>
                                            <div className="md:flex gap-4 items-center">
                                                <h4 className="text-3xl sm:text-4xl md:text-5xl text-primary">{item.icon}</h4>
                                                <div>
                                                    <h4 className="text-sm sm:text-2xl text-primary2">{item.name}:</h4>
                                                    <h4 className={` ${item.size || "text-xl"} sm:text-xl text-primary2 `}>{item.details}</h4>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
