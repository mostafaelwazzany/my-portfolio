import React from 'react';

import { DiNodejs } from "react-icons/di";

import { SiExpress, SiTypescript, SiCplusplus, SiDocker, SiGithub, SiGooglecloud, SiPostman } from "react-icons/si";

import { TbBrandCSharp,TbLetterESmall  } from "react-icons/tb";

import { FaDiscord, FaBootstrap, FaReact, FaHtml5, FaCss3Alt, FaCloud, FaGitAlt } from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";

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
    { name: "ES6", level: "Expert", category: "Infrastructure", icon: <TbLetterESmall className="text-orange-400" /> },
    { name: "React", level: "Advanced", category: "Frontend", icon: <FaReact className="text-cyan-400" /> },
    { name: "Express.js", level: "Expert", category: "Backend", icon: <SiExpress className="text-gray-200" /> },
    { name: "HTML & CSS", level: "Advanced", category: "Frontend", icon: <HtmlCssIcon /> },
    { name: "Discord.js", level: "Advanced", category: "API", icon: <FaDiscord className="text-indigo-400" /> },
    { name: "Bootstrap", level: "Intermediate", category: "Frontend", icon: <FaBootstrap className="text-purple-500" /> },
    { name: "MongoDB", level: "Expert", category: "Database", icon: <BiLogoMongodb className="text-green-400" /> },
];

const tools = [
    { name: "Git", category: "Version Control", icon: <FaGitAlt className="text-orange-500" /> },
    { name: "GitHub", category: "Version Control", icon: <SiGithub className="text-gray-100" /> },
    { name: "Docker", category: "DevOps", icon: <SiDocker className="text-blue-400" /> },
    { name: "VS Code", category: "Editor", icon: <VscVscode className="text-sky-400" /> },
    { name: "Google Cloud", category: "Cloud", icon: <SiGooglecloud className="text-yellow-400" /> },
    { name: "Postman", category: "API Testing", icon: <SiPostman className="text-orange-500" /> },
];


    const getLevelColor = (level) => {
        switch (level) {
            case 'Expert': return 'text-primary bg-primary/10 border-primary/25';
            case 'Advanced': return 'text-white/80 bg-white/10 border-white/20';
            case 'Intermediate': return 'text-primary/90 bg-primary/10 border-primary/20';
            default: return 'text-gray-400 bg-gray-500/10 border-gray-500/20';
        }
    };

    const getCategoryColor = (category) => {
        const colors = {
            Frontend: 'bg-primary/10 text-primary',
            Backend: 'bg-primary/10 text-primary',
            Database: 'bg-white/10 text-white/80',
            Language: 'bg-primary/10 text-primary',
            Infrastructure: 'bg-white/10 text-white/80',
            Framework: 'bg-primary/10 text-primary',
            API: 'bg-white/10 text-white/80',
        };
        return colors[category] || 'bg-gray-500/10 text-gray-300';
    };

    return (
        <div className='py-12 px-4'>
            {/* Compact Header */}
            <div className='max-w-5xl mx-auto text-center mb-8'>
                <div className='m-6 w-fit mx-auto justify-center  hover:bg-primary transition  text-center'>
                    <h4 className='text-white text-4xl   hover:text-primary2 sm:text-5xl md:text-6xl font-bold'>
                        Skills & Tools
                    </h4>
                    <div className='w-full border-t-primary mt-5 border-t-2'></div>
                </div>
                <p className='text-gray-400 text-sm md:text-base max-w-xl mx-auto'>
                    Technologies, frameworks, and tools I use to build and ship production apps
                </p>
                <div className='w-16 h-0.5 bg-gradient-to-r from-primary to-primary2 mx-auto mt-3'></div>
            </div>

            {/* Compact Skills Grid */}
            <div className='max-w-6xl mx-auto'>
                <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 md:gap-4'>
                    {experiences.map((skill, index) => (
                        <div
                            key={index}
                            className="group relative bg-white/10 backdrop-blur-sm border border-white/15 rounded-xl p-3 md:p-4 hover:border-primary/50 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/10"
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

                <div className='mt-12'>
                    <div className='mb-5 flex items-center justify-between gap-4'>
                        <h3 className='text-2xl md:text-3xl font-bold text-white'>Tools</h3>
                        <div className='h-px flex-1 bg-primary/30'></div>
                    </div>

                    <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-4'>
                        {tools.map((tool) => (
                            <div
                                key={tool.name}
                                className="group relative bg-white/10 backdrop-blur-sm border border-white/15 rounded-xl p-4 hover:border-primary/50 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/10"
                            >
                                <div className="mb-3 flex h-12 items-center justify-center">
                                    <span className="text-3xl inline-flex items-center justify-center">
                                        {tool.icon}
                                    </span>
                                </div>
                                <h4 className="text-center text-white font-semibold text-sm leading-tight">
                                    {tool.name}
                                </h4>
                                <p className="mt-2 text-center text-xs text-white/60">
                                    {tool.category}
                                </p>
                                <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Compact Stats */}
                <div className='grid grid-cols-4 gap-4 max-w-3xl mx-auto mt-8'>
                    <div className='text-center p-3 bg-white/10 backdrop-blur-sm rounded-xl border border-white/15'>
                        <div className='text-xl font-bold text-primary'>{experiences.filter(s => s.level === 'Expert').length}</div>
                        <div className='text-xs text-gray-400'>Expert</div>
                    </div>
                    <div className='text-center p-3 bg-white/10 backdrop-blur-sm rounded-xl border border-white/15'>
                        <div className='text-xl font-bold text-primary'>{experiences.filter(s => s.level === 'Advanced').length}</div>
                        <div className='text-xs text-gray-400'>Advanced</div>
                    </div>
                    <div className='text-center p-3 bg-white/10 backdrop-blur-sm rounded-xl border border-white/15'>
                        <div className='text-xl font-bold text-white/80'>{experiences.filter(s => s.level === 'Intermediate').length}</div>
                        <div className='text-xs text-gray-400'>Intermediate</div>
                    </div>
                    <div className='text-center p-3 bg-white/10 backdrop-blur-sm rounded-xl border border-white/15'>
                        <div className='text-xl font-bold text-primary'>{tools.length}</div>
                        <div className='text-xs text-gray-400'>Tools</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Exp;


