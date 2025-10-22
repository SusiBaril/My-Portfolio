"use client";

import { FaHtml5, FaCss3Alt, FaReact, FaLaravel, FaJava, FaDatabase, FaGitAlt, FaGithub } from "react-icons/fa";
import { SiJavascript, SiTailwindcss, SiTypescript, SiCplusplus, SiMysql } from "react-icons/si";

export default function Skills() {
    const skills = [
        { name: "HTML", icon: <FaHtml5 className="text-orange-500 text-4xl" /> },
        { name: "CSS", icon: <FaCss3Alt className="text-blue-500 text-4xl" /> },
        { name: "JavaScript", icon: <SiJavascript className="text-yellow-400 text-4xl" /> },
        { name: "React", icon: <FaReact className="text-sky-400 text-4xl" /> },
        { name: "Laravel", icon: <FaLaravel className="text-red-600 text-4xl" /> },
        { name: "TypeScript", icon: <SiTypescript className="text-blue-600 text-4xl" /> },
        { name: "Java", icon: <FaJava className="text-orange-600 text-4xl" /> },
        { name: "C++", icon: <SiCplusplus className="text-blue-700 text-4xl" /> },
        { name: "MySQL", icon: <SiMysql className="text-white text-4xl" /> },
        { name: "Git", icon: <FaGitAlt className="text-orange-600 text-4xl" /> },
        { name: "GitHub", icon: <FaGithub className="text-white text-4xl" /> },
        { name: "Tailwind", icon: <SiTailwindcss className="text-teal-400 text-4xl" /> },
    ];

    return (
        <div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 justify-items-center max-h-96 overflow-y-auto py-4 px-2">
                {skills.map((skill) => (
                    <div
                        key={skill.name}
                        className="flex flex-col items-center gap-2 bg-gray-700 rounded-lg p-4 hover:bg-muted transition-colors w-28"
                    >
                        {skill.icon}
                        <span className="text-sm font-medium text-foreground text-center">{skill.name}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}
