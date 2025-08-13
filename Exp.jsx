import React from 'react';

import { DiNodejs } from "react-icons/di";

import { SiExpress, SiTypescript, SiCplusplus } from "react-icons/si";

import { TbBrandCSharp,TbLetterESmall  } from "react-icons/tb";

import { FaDiscord, FaBootstrap, FaReact, FaHtml5, FaCss3Alt, FaCloud } from "react-icons/fa";

import { BiLogoMongodb } from "react-icons/bi";

import { IoLogoJavascript } from "react-icons/io";

const HtmlCssIcon = () => (
  <div className="relative inline-flex items-center justify-center">
    <FaHtml5 className="text-orange-500 text-xl md:text-2xl" />
    <FaCss3Alt className="text-blue-500 text-xl md:text-2xl -ml-1" />
  </div>
);


const Exp = () => {
const experiences = [
    { name: "Node.js", level: "Expert", category: "Backend", icon: <DiNodejs className="text-green-500" /> },
    { name: "JavaScript", level: "Expert", category: "Language", icon: <IoLogoJavascript className="text-yellow-400" /> },
    { name: "TypeScript", level: "Advanced", category: "Language", icon: <SiTypescript className="text-blue-500" /> },
    { name: "C++", level: "Intermediate", category: "Language", icon: <SiCplusplus className="text-blue-400" /> },
    { name: "C#", level: "Intermediate", category: "Language", icon: <TbBrandCSharp className="text-purple-500" /> },
    { name: "Cloud Essential", level: "Intermediate", category: "Infrastructure", icon: <FaCloud className="text-cyan-400" /> },
    { name: "ES6", level: "Intermediate", category: "Infrastructure", icon: <TbLetterESmall className="text-orange-400" /> },
    { name: "React", level: "Expert", category: "Frontend", icon: <FaReact className="text-cyan-500" /> },
    { name: "Express.js", level: "Expert", category: "Backend", icon: <SiExpress className="text-gray-300" /> },
    { name: "HTML & CSS", level: "Advanced", category: "Frontend", icon: <HtmlCssIcon /> },
    { name: "Discord.js", level: "Advanced", category: "API", icon: <FaDiscord className="text-indigo-400" /> },
    { name: "Bootstrap", level: "Intermediate", category: "Frontend", icon: <FaBootstrap className="text-pink-500" /> },
    { name: "MongoDB", level: "Expert", category: "Database", icon: <BiLogoMongodb className="text-green-400" /> },
];


    const getLevelColor = (level) => {
        switch (level) {
            case 'Expert': return 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20';
            case 'Advanced': return 'text-blue-400 bg-blue-500/10 border-blue-500/20';
            case 'Intermediate': return 'text-yellow-400 bg-yellow-500/10 border-yellow-500/20';
            default: return 'text-gray-400 bg-gray-500/10 border-gray-500/20';
        }
    };

    const getCategoryColor = (category) => {
        const colors = {
            Frontend: 'bg-blue-500/10 text-blue-300',
            Backend: 'bg-green-500/10 text-green-300',
            Database: 'bg-purple-500/10 text-purple-300',
            Language: 'bg-yellow-500/10 text-yellow-300',
            Infrastructure: 'bg-cyan-500/10 text-cyan-300',
            Framework: 'bg-red-500/10 text-red-300',
            API: 'bg-indigo-500/10 text-indigo-300',
        };
        return colors[category] || 'bg-gray-500/10 text-gray-300';
    };

    return (
        <div className='py-12 px-4'>
            {/* Compact Header */}
            <div className='max-w-5xl mx-auto text-center mb-8'>
                <div className='m-6 w-fit mx-auto justify-center  hover:bg-primary transition  text-center'>
                    <h4 className='text-white text-4xl   hover:text-primary2 sm:text-5xl md:text-6xl font-bold'>
                        Technical Skills
                    </h4>
                    <div className='w-full border-t-primary mt-5 border-t-2'></div>
                </div>
                <p className='text-gray-400 text-sm md:text-base max-w-xl mx-auto'>
                    Technologies and frameworks I work with
                </p>
                <div className='w-16 h-0.5 bg-gradient-to-r from-primary to-primary2 mx-auto mt-3'></div>
            </div>

            {/* Compact Skills Grid */}
            <div className='max-w-6xl mx-auto'>
                <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 md:gap-4'>
                    {experiences.map((skill, index) => (
                        <div
                            key={index}
                            className="group relative bg-gray-900/30 backdrop-blur-sm border border-gray-700/30 rounded-xl p-3 md:p-4 hover:border-primary/40 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/10"
                        >
                            {/* Skill Icon & Name */}
                            <div className="text-center mb-2">
                            {/* كونتينر يوسّط الأيقونة أفقياً وعمودياً ويوحّد الارتفاع */}
                            <div className="mb-2 flex items-center justify-center h-10 md:h-12">
                                <span className="text-2xl md:text-3xl inline-flex items-center justify-center">
                                {skill.icon}
                                </span>
                            </div>

                            <h3 className="text-white font-semibold text-xs md:text-sm leading-tight">
                                {skill.name}
                            </h3>
                            </div>


                            {/* Level Badge */}
                            <div className="text-center mb-2">
                                <span className={`text-xs px-2 py-1 rounded-full border ${getLevelColor(skill.level)}`}>
                                    {skill.level}
                                </span>
                            </div>

                            {/* Category */}
                            <div className="text-center">
                                <span className={`text-xs px-2 py-0.5 rounded ${getCategoryColor(skill.category)}`}>
                                    {skill.category}
                                </span>
                            </div>

                            {/* Hover Effect */}
                            <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </div>
                    ))}
                </div>

                {/* Compact Stats */}
                <div className='grid grid-cols-3 gap-4 max-w-2xl mx-auto mt-8'>
                    <div className='text-center p-3 bg-gray-900/20 backdrop-blur-sm rounded-xl border border-gray-700/20'>
                        <div className='text-xl font-bold text-emerald-400'>{experiences.filter(s => s.level === 'Expert').length}</div>
                        <div className='text-xs text-gray-400'>Expert</div>
                    </div>
                    <div className='text-center p-3 bg-gray-900/20 backdrop-blur-sm rounded-xl border border-gray-700/20'>
                        <div className='text-xl font-bold text-blue-400'>{experiences.filter(s => s.level === 'Advanced').length}</div>
                        <div className='text-xs text-gray-400'>Advanced</div>
                    </div>
                    <div className='text-center p-3 bg-gray-900/20 backdrop-blur-sm rounded-xl border border-gray-700/20'>
                        <div className='text-xl font-bold text-yellow-400'>{experiences.filter(s => s.level === 'Intermediate').length}</div>
                        <div className='text-xs text-gray-400'>Intermediate</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Exp;
