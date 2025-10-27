import React from "react";
import { Briefcase } from "lucide-react"; // for the Experience icon

export default function ExperienceSection() {
  const experiences = [
    {
      title: "Bachelor of Technology",
      company: "Swami Vivekananda Institute Of Science & Technology",
      year: "2018 - 2022",
      desc: "Graduated in 2022 with a Bachelor of Engineering in Electronics and Communication Engineering (ECE) from SVIST (Swami Vivekananda Institute of Science and Technology). Passionate about technology and software development, with a strong foundation in problem-solving, modern web development, and building scalable ReactJS applications.",
      icon: "⚡",
    },
    {
      title: "Higher Secondary Education",
      company: "AHHS",
      year: "2016 - 2018",
      desc: "I completed my Higher Secondary Education in 2018 from AHHS.",
      icon: "⬢",
    },
    {
      title: "Secondary Education",
      company: "AHHS",
      year: "2016",
      desc: "I completed my Secondary Education in 2016 from AHHS",
      icon: "🟩",
    },
  ];

  return (
    <div className="flex-1 w-full md:w-[700px]">
      <div className="flex items-center gap-2 mb-6">
        <Briefcase className="text-white w-6 h-6" />
        <h2 className="text-2xl font-semibold text-white">Education</h2>
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
