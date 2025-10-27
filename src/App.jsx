// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import ScrollToTop from './components/shared/ScrollToTop';

// import Navbar from './components/navbar/Navbar';
// import Contact from './components/Contact/Contact';

// // import Services from './components/Services/Services';
// import About from './components/About/About';
// import Faq from './components/Faq/Faq';
// import Footer from './components/Footer/Footer';
// // import Support from './components/Support/Support';
// import Home from './components/Home/Home';


// const App = () => {
//   return (
//     <Router>
//       <ScrollToTop />
//       <Navbar />
//      <section
//       id="about"
//       className="w-full  md:py-10"
//     > <Routes>
//         {/* Uncomment when you add these components */}
//         <Route path="/" element={<Home />} />
//         {/* <Route path="/services" element={<Services />} /> */}
//         <Route path="/contact" element={<Contact />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/faq" element={<Faq />} />
//         {/* <Route path="/support" element={<Support />} /> */}
//       </Routes>

//     </section>
     
//       <Footer />
//     </Router>
//   );
// };

// export default App;



// import React from "react";
// import centerImg from "./assets/logo1.png";
// import bgImage from "./assets/day.svg";

// export default function KidsFeaturesHero() {
//   const leftFeatures = [
//     { title: "Languages", desc: "Look into the eyes of a young child and see the sparkle" },
//     { title: "Birthday Party", desc: "Look into the eyes of a young child and see the sparkle" },
//     { title: "Healthy Food", desc: "Look into the eyes of a young child and see the sparkle" },
//   ];

//   const rightFeatures = [
//     { title: "Art Classes", desc: "Look into the eyes of a young child and see the sparkle" },
//     { title: "Special Education", desc: "Look into the eyes of a young child and see the sparkle" },
//     { title: "Activity Rooms", desc: "Look into the eyes of a young child and see the sparkle" },
//   ];

//   // Playful hover icon component
//   const HoverIcon = ({ children, color }) => (
//     <div
//       className={`w-14 h-14 rounded-lg bg-white shadow-sm flex items-center justify-center
//                  transition-transform duration-300 ease-in-out
//                  hover:-translate-y-1 hover:translate-x-1 hover:rotate-3 ${color}`}
//     >
//       {children}
//     </div>
//   );

//   return (
//     <section
//       className="py-12 bg-cover bg-center bg-no-repeat border-2"
//       style={{ backgroundImage: `url(${bgImage})` }}
//     >
//       <div className="max-w-7xl mx-auto px-6">
//         <div className="grid grid-cols-12 items-center gap-4">
//           {/* Left column features */}
//           <div className="col-span-12 lg:col-span-4">
//             <div className="flex flex-col gap-8 lg:pl-8">
//               {leftFeatures.map((f, idx) => (
//                 <div key={idx} className="flex items-center gap-6">
//                   <div className="flex-1 text-right hidden lg:block relative top-[-2">
//                     <h3 className="text-2xl font-extrabold text-[#15223A] mb-2">{f.title}</h3>
//                     <p className="text-gray-500 max-w-xs mx-auto">{f.desc}</p>
//                   </div>

//                   <div className="lg:ml-6">
//                     <HoverIcon color="bg-[#FFF4F8]">
//                       <svg
//                         width="28"
//                         height="28"
//                         viewBox="0 0 24 24"
//                         fill="none"
//                         xmlns="http://www.w3.org/2000/svg"
//                       >
//                         <circle cx="12" cy="8" r="3" stroke="#8B5CF6" strokeWidth="1.5" />
//                         <path
//                           d="M4 20c0-3.333 4-5 8-5s8 1.667 8 5"
//                           stroke="#8B5CF6"
//                           strokeWidth="1.5"
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                         />
//                       </svg>
//                     </HoverIcon>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Center image */}
//           <div className="col-span-12 lg:col-span-4 flex justify-center">
//             <div className="relative w-80 h-80 lg:w-[420px] lg:h-[420px] flex items-center justify-center">
//               <div className="absolute inset-0 rounded-full border-4 border-dashed border-pink-300 flex items-center justify-center"></div>
//               <img
//                 src={centerImg}
//                 alt="child"
//                 className="relative rounded-full object-cover w-72 h-72 lg:w-[380px] lg:h-[380px] shadow-md"
//                 style={{ objectPosition: "center" }}
//               />
//             </div>
//           </div>

//           {/* Right column features */}
//           <div className="col-span-12 lg:col-span-4">
//             <div className="flex flex-col gap-8 lg:pr-8">
//               {rightFeatures.map((f, idx) => (
//                 <div key={idx} className="flex items-center gap-6">
//                   <div className="mr-4">
//                     <HoverIcon color="bg-[#FFF8E6]">
//                       <svg
//                         width="28"
//                         height="28"
//                         viewBox="0 0 24 24"
//                         fill="none"
//                         xmlns="http://www.w3.org/2000/svg"
//                       >
//                         <rect x="3" y="6" width="18" height="12" rx="2" stroke="#06B6D4" strokeWidth="1.5" />
//                         <path d="M8 10h8" stroke="#06B6D4" strokeWidth="1.5" strokeLinecap="round" />
//                       </svg>
//                     </HoverIcon>
//                   </div>

//                   <div className="hidden lg:block">
//                     <h3 className="text-2xl font-extrabold text-[#15223A] mb-2">{f.title}</h3>
//                     <p className="text-gray-500 max-w-xs">{f.desc}</p>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }


import React from 'react'
import Service from './components/services/Services'
import ExperienceSection from './components/services/ExperienceSection'
import Footer from './components/Footer/Footer'

const App = () => {
  return (
    <div className="">
      <Service/>
       <Footer/>
    </div>
  )
}

export default App