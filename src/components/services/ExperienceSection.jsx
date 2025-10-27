import React from "react";
import { Briefcase } from "lucide-react"; // for the Experience icon

export default function ExperienceSection() {
  const experiences = [

     {
      title: "Software Engineer",
      company: "Prodhee Technologies",
      year: "2025 - present",
      desc: "Designing and developing a modern Learning Management System (LMS) using ReactJS and Node.js. Involved in architecting the application structure, building reusable UI components, managing RESTful API integrations, and implementing authentication and role-based access using JWT. Focused on creating a scalable, maintainable, and responsive web experience with Tailwind CSS.",
      icon: "🟩",
    },
    {
      title: "Software Engineer",
      company: "Test Yantra Software Solution PVT.LTD",
      year: "2024 - 2025",
      desc: "Developed a modern, responsive ReactJS web application at TestYantra, focusing on clean architecture, optimized performance, and advanced UI animations.",
      icon: "⬢",
    },
    {
      title: "Associate Software Engineer",
      company: "Test Yantra Software Solution PVT.LTD",
      year: "2023 - 2024",
      desc: "Built a modern ReactJS web application at TestYantra Technologies, implementing a scalable component-based architecture with reusable UI modules, RESTful API integration, and responsive design using Tailwind CSS and Framer Motion for smooth, interactive user experiences.",
      icon: "⚡",
    },
    
   
  ];

  return (
    <div className="flex-1 w-full md:w-[700px]">
      <div className="flex items-center gap-2 mb-6">
        <Briefcase className="text-white w-6 h-6" />
        <h2 className="text-2xl font-semibold text-white">Experience</h2>
      </div>

      <div className="space-y-6">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="bg-[#111] border border-[#222] rounded-2xl p-6 relative hover:border-green-500 transition-all duration-300"
          >
            <div className="flex justify-between items-start mb-2">
              <div className="flex items-center gap-2">
                <span className="text-xl">{exp.icon}</span>
                <h3 className="text-lg font-semibold text-white">{exp.title}</h3>
              </div>
              <span className="bg-[#1b1b1b] text-gray-300 text-sm font-semibold rounded-lg px-3 py-1">
                {exp.year}
              </span>
            </div>
            <p className="text-gray-400 text-sm mb-1">{exp.company}</p>
            <hr className="border-[#222] my-3" />
            <p className="text-gray-300 leading-relaxed">{exp.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
