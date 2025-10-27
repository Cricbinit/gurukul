// import React from 'react'
// import bgImage from "../../assets/hero_services.jpg"
// import ServicesOffer from './ServicesOffer'
// import ServiceDeal from './ServiceDeal'
// import WhatWeOffer from './TestimonialSlider'
// import Testimonial from './TestimonialSlider'
// import TestimonialSlider from './TestimonialSlider'

// const Services = () => {
//   return (
//   <>
//    <section
//       className="relative min-h-[100vh] flex items-center justify-center bg-cover bg-center"
//       style={{ backgroundImage: `url(${bgImage})` }}
//     >
//       {/* Overlay */}
//       <div className="absolute inset-0 bg-black/40"></div>

//       {/* Content */}
//       <div className="relative z-10 text-center text-white px-6 md:px-0 max-w-3xl">
//         <p className="uppercase tracking-widest font-semibold text-sm md:text-base">
//           Take a Look at
//         </p>

//         <h1 className="text-4xl md:text-6xl font-extrabold mt-2 mb-4">
//           Our <span className="text-yellow-400">Services</span>
//         </h1>

//         <p className="text-base md:text-lg leading-relaxed mb-8 text-gray-100">
//           With indoor playgrounds, state-of-the-art indoor rock climbing arenas and
//           fully-enclosed toddler arenas, funtopia is the place to come for hours
//           of family entertainment.
//         </p>

//         {/* Button */}
//         <div className="flex justify-center">
//           <button className="bg-[#2cb67d] text-white text-lg font-bold py-4 px-8 rounded-full hover:bg-[#28a46f] transition-all duration-300 transform hover:scale-105">
//             LET’S PLAY
//           </button>
//         </div>
//       </div>

//       {/* Wave bottom effect */}
//       <svg
//         className="absolute bottom-[-1px] left-0 w-full"
//         xmlns="http://www.w3.org/2000/svg"
//         viewBox="0 0 1440 320"
//       >
//         <path
//           fill="#ffffff"
//           fillOpacity="1"
//           d="M0,256L48,234.7C96,213,192,171,288,144C384,117,480,107,576,128C672,149,768,203,864,213.3C960,224,1056,192,1152,165.3C1248,139,1344,117,1392,106.7L1440,96V320H0Z"
//         ></path>
//       </svg>
//     </section>
//     <ServicesOffer/>
//     <ServiceDeal/>
//     <TestimonialSlider/>
//     </>
//   )
// }

// export default Services

import React from "react";
import { motion } from "framer-motion";
import {
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaDribbble,
  FaBehance,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";
import { HiDownload, HiPaperAirplane } from "react-icons/hi";
import profileImg from "../../assets/Vivek.png";
import ExperienceSection from "./ExperienceSection";
import ProjectsSection from "./ProjectsSection";
import EducationSection from "./EducationSection";
import ContactSection from "./ContactSection";
import Footer from "../Footer/Footer";
import ResumePdf from "../../assets/Vivek_Kumar_Choubey.pdf"

export default function Service() {
  const socialLinks = [
    {
      Icon: FaInstagram,
      url: "https://www.instagram.com/vivek_kr_choubey/?hl=en",
    },
    { Icon: FaDribbble, url: "https://blog.mrchoubey.com/" },
    { Icon: FaLinkedin, url: "https://www.linkedin.com/in/choubey2000236/" },
    { Icon: FaGithub, url: "https://github.com/Cricbinit" },
  ];

  return (
    <>
      <div className="min-h-screen bg-black text-white flex flex-col md:flex-row">
        {/* ✅ LEFT CARD (Profile Section) */}
        <motion.div
          transition={{
            duration: 2,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "mirror",
          }}
          className="md:fixed md:left-10 md:top-10 md:h-[80vh] md:w-[350px] flex justify-center items-center px-6 py-6 md:py-0"
        >
          {/* Glowing Gradient Border Wrapper */}
          <div className="p-[2px] bg-gradient-to-r from-green-400 via-emerald-500 to-green-400 rounded-3xl shadow-[0_0_25px_rgba(34,197,94,0.3)] hover:shadow-[0_0_35px_rgba(34,197,94,0.6)] transition-all duration-500 w-full">
            <div className="bg-[#111] rounded-3xl p-6 flex flex-col items-center shadow-lg">
              {/* Profile Image */}
              <motion.img
                src={profileImg}
                alt="Profile"
                className="rounded-2xl w-48 h-56 sm:w-60 sm:h-72 object-cover mb-4 border-2 border-transparent hover:border-green-500 transition-all duration-500 hover:shadow-[0_0_15px_rgba(34,197,94,0.6)]"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 200 }}
              />

              {/* Availability Badge */}
              <motion.div
                className="bg-[#1b1b1b] rounded-xl flex items-center gap-2 px-4 py-2 mb-4 shadow-inner"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></span>
                <p className="text-sm font-medium text-gray-200">
                  Available for work
                </p>
              </motion.div>

              {/* Name */}
              <motion.h2
                className="text-lg sm:text-xl font-bold mb-4 text-white text-center tracking-wide"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                Vivek Kumar Choubey
              </motion.h2>

              {/* Social Icons */}
              <motion.div
                className="flex flex-wrap justify-center gap-5 text-xl mb-6 text-gray-400"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                {socialLinks.map(({ Icon, url }, i) => (
                  <motion.a
                    key={i}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{
                      scale: 1.2,
                      color: "#22c55e",
                      textShadow: "0px 0px 10px rgba(34,197,94,0.7)",
                    }}
                    transition={{ type: "spring", stiffness: 250 }}
                    className="cursor-pointer transition-colors duration-300"
                  >
                    <Icon />
                  </motion.a>
                ))}
              </motion.div>

              {/* Buttons */}
              <motion.div
                className="flex flex-col sm:flex-row gap-3 w-full"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <a
                  href={ResumePdf}
                  download="Vivek_Kumar_Choubey_Resume.pdf"
                  className="flex-1 bg-[#1b1b1b] hover:bg-[#222] hover:shadow-[0_0_12px_rgba(255,255,255,0.2)] text-white rounded-xl py-3 flex items-center justify-center gap-2 transition-all duration-300 text-sm sm:text-base"
                >
                  <HiDownload className="text-sm" /> Download CV
                </a>

                <button className="flex-1 bg-green-500 hover:bg-green-600 hover:shadow-[0_0_15px_rgba(34,197,94,0.6)] text-black rounded-xl py-3 flex items-center justify-center gap-2 font-semibold transition-all duration-300 text-sm sm:text-base">
                  <HiPaperAirplane className="rotate-45 text-sm" /> Contact Me
                </button>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* ✅ RIGHT SCROLLABLE CONTENT */}
        <div className="flex-1 mt-10 md:mt-0 md:ml-[400px] px-6 md:px-16 py-20 overflow-y-auto scroll-smooth">
          <section className="max-w-3xl mx-auto space-y-20">
            {/* 👋 Hero Text */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <p className="text-gray-400 text-lg mb-3">👋 Say Hello</p>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6">
                I’m Vivek Kumar Choubey,{" "}
                <span className="text-green-500">Software Developer</span>{" "}
                <br />
                Based in Bangalore, Karnataka.
              </h1>
              <p className="text-gray-400 mb-10 text-sm sm:text-base">
                I'm a passionate Frontend Developer with 2+ years of
                professional experience crafting responsive, scalable, and
                reusable UI systems using React.js, JavaScript, TailwindCSS, and
                Next.js. I specialize in building modern, high-performance web
                apps and have hands-on experience with full-stack projects using
                MongoDB, Express, and Node.js.
              </p>
            </motion.div>

            {/* 📊 Stats Section */}
            <motion.div
              className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 mb-20"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              {[
                { number: "10+", label: "Completed Projects" },
                { number: "2+", label: "Years of Experience" },
                { number: "5+", label: "Happy Clients" },
                { number: "2+", label: "Awards Received" },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.05 }}
                  className="p-4 bg-[#111] rounded-xl text-center hover:bg-[#1b1b1b] transition-all duration-300"
                >
                  <h3 className="text-2xl sm:text-3xl font-bold text-white">
                    {item.number}
                  </h3>
                  <p className="text-gray-400 text-xs sm:text-sm">
                    {item.label}
                  </p>
                </motion.div>
              ))}
            </motion.div>

            {/* 💼 Other Sections */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <ExperienceSection />
              <ProjectsSection />
              <EducationSection />
              <ContactSection />
            </motion.div>
          </section>
        </div>
      </div>

      {/* ✅ Fixed Footer */}
      <Footer />
    </>
  );
}
