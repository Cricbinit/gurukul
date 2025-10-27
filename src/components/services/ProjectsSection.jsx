import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import testyantra from "../../assets/TestYantra.png"; // replace with your image
import dhee from "../../assets/Dhee.png"; // replace with your image
import bbs from "../../assets/bbs1.png"; // replace with your image


const projects = [
  {
    id: 1,
    title: "TestYantra Global",
    category: "Company Website",
    image: testyantra,
  },
  {
    id: 2,
    title: "Dhee Coding Lab",
    category: "Edu-Tech",
    image: dhee,
  },
   {
    id: 2,
    title: "Bright Business School",
    category: "Edu-Tech",
    image: bbs,
  },
   
];

export default function ProjectsSection() {
  return (
    <section className="bg-black text-white py-14 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <h2 className="text-2xl md:text-3xl font-semibold flex items-center gap-2 mb-10">
          <span>🚀</span> Projects
        </h2>

        {/* Cards Container */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((proj, i) => (
            <motion.div
              key={proj.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              whileHover={{ scale: 1.03 }}
              className="bg-neutral-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 group"
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <img
                  src={proj.image}
                  alt={proj.title}
                  className="rounded-t-2xl w-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-500" />
              </div>

              {/* Content */}
              <div className="p-5 flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-semibold">{proj.title}</h3>
                  <p className="text-gray-400 text-sm mt-1">
                    {proj.category} • {proj.pages}
                  </p>
                </div>
                <motion.a
                  whileHover={{ rotate: 45 }}
                  href="#"
                  className="bg-neutral-800 hover:bg-neutral-700 p-2 rounded-full transition-colors"
                >
                  <ArrowUpRight size={18} />
                </motion.a>
              </div>
            </motion.div>
          ))}

          {/* You can paste your 3rd card here later */}
        </div>
      </div>
    </section>
  );
}
