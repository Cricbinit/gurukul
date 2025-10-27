// import React from "react";
// import { motion, useScroll, useTransform } from "framer-motion";
// import faceImg from "../../assets/image_01_services.jpg";
// import faceImg1 from "../../assets/image_01_services.jpg";

// export default function ServiceDeal() {
//   return (
//     <>
//       <ScrollSection
//         title="Face Paint"
//         img={faceImg}
//         reverse={false}
//       />
//       <ScrollSection
//         title="Balloon Fun"
//         img={faceImg1}
//         reverse={true}
//       />
//     </>
//   );
// }

// // ✅ Reusable section with scroll effect
// function ScrollSection({ title, img, reverse }) {
//   const ref = React.useRef(null);
//   const { scrollYProgress } = useScroll({
//     target: ref,
//     offset: ["start end", "end start"],
//   });

//   // Motion effects: image will slightly scale + fade as you scroll
//   const scale = useTransform(scrollYProgress, [0, 1], [1.2, 1]);
//   const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.7]);
//   const y = useTransform(scrollYProgress, [0, 1], [0, 100]);

//   return (
//     <section
//       ref={ref}
//       className="relative overflow-hidden bg-[#FFF9F5] py-24 flex flex-col lg:flex-row items-center gap-14"
//     >
//       {/* Decorative elements */}
//       <div className="absolute top-24 right-44 w-20 h-20 bg-[#FDBD2E] rounded-full -z-10"></div>
//       <div className="absolute bottom-10 left-10 w-40 h-40 bg-[radial-gradient(#FDBD2E_1px,transparent_1px)] [background-size:12px_12px] opacity-30 -z-10"></div>

//       <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-14">
//         {/* Conditional layout for alternating sections */}
//         {!reverse && (
//           <TextBlock title={title} />
//         )}

//         {/* ✅ Animated Image */}
//         <motion.div
//           style={{ scale, opacity, y }}
//           className="flex-1 relative flex justify-center items-center sticky top-20"
//         >
//           <img
//             src={img}
//             alt={title}
//             className="w-[90%] max-w-[500px] rounded-[45%_55%_40%_60%/60%_40%_60%_40%] object-cover shadow-2xl"
//           />
//         </motion.div>

//         {reverse && (
//           <TextBlock title={title} />
//         )}
//       </div>
//     </section>
//   );
// }

// // ✅ Reusable Text Block
// function TextBlock({ title }) {
//   return (
//     <div className="flex-1">
//       <p className="text-[#1DBF73] font-bold uppercase mb-2 tracking-wider">
//         Special Offer
//       </p>
//       <h2 className="text-5xl font-extrabold text-gray-900 mb-6">{title}</h2>

//       <ul className="space-y-3 mb-8">
//         <li className="flex items-start text-gray-600">
//           <span className="text-[#FDBD2E] text-xl mr-3">✔</span>
//           Bambino is a place for unbelievable adventures.
//         </li>
//         <li className="flex items-start text-gray-600">
//           <span className="text-[#FDBD2E] text-xl mr-3">✔</span>
//           Climbing, jumping, sliding, and most importantly having fun.
//         </li>
//         <li className="flex items-start text-gray-600">
//           <span className="text-[#FDBD2E] text-xl mr-3">✔</span>
//           Challenge yourself, test your limits at Bambino indoor playground.
//         </li>
//       </ul>

//       <div className="flex items-center mb-10">
//         <span className="text-gray-400 line-through text-2xl mr-3">$10.00</span>
//         <span className="text-[#1DBF73] text-4xl font-extrabold">$5.00</span>
//         <span className="text-[#1DBF73] ml-2 font-semibold">/ per person</span>
//       </div>

//       <button className="bg-[#1DBF73] hover:bg-[#18a864] text-white font-semibold text-lg py-3 px-8 rounded-full transition-all duration-300">
//         Get Quote
//       </button>
//     </div>
//   );
// }


// import React from "react";


// export default function ServiceDeal() {
//   return (
//     <>
//     <section className="w-screen min-h-screen flex flex-col lg:flex-row">
//       {/* Left: Fixed Image */}
//       <div className="w-full lg:w-1/2 sticky top-0 h-screen flex justify-center items-center bg-gray-100">
//         <img
//           src="https://cdn.pixabay.com/photo/2025/10/12/07/32/measuring-cups-9889151_1280.jpg" // dummy image
//           alt="Dummy"
//           className="w-[80%] h-auto object-cover rounded-xl shadow-2xl"
//         />
//       </div>

//       {/* Right: Scrolling Text */}
//       <div className="w-full lg:w-1/2 flex flex-col justify-center p-12 space-y-6">
//         <h2 className="text-4xl font-bold">Amazing Offer</h2>
//         <p className="text-gray-700 text-lg">
//           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
//           tincidunt, nisl eget vestibulum consequat, nunc justo tincidunt
//           sapien, at egestas purus nibh sit amet metus.
//         </p>
//         <p className="text-gray-700 text-lg">
//           Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
//           dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
//           proident.
//         </p>
//         <button className="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-full w-fit transition-all duration-300">
//           Get Quote
//         </button>
//         <p className="text-gray-700 text-lg">
//           More dummy text to allow scrolling. Lorem ipsum dolor sit amet,
//           consectetur adipiscing elit. Pellentesque ac ligula in odio tempor
//           dapibus.
//         </p>
//         <p className="text-gray-700 text-lg">
//           Even more content to scroll. Lorem ipsum dolor sit amet, consectetur
//           adipiscing elit. Sed non urna sed urna malesuada facilisis.
//         </p>
//       </div>
//     </section>
//      <section className="w-screen min-h-screen flex flex-col lg:flex-row">
//       {/* Left: Fixed Image */}
     
//       {/* Right: Scrolling Text */}
//       <div className="w-full lg:w-1/2 flex flex-col justify-center p-12 space-y-6">
//         <h2 className="text-4xl font-bold">Amazing Offer</h2>
//         <p className="text-gray-700 text-lg">
//           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
//           tincidunt, nisl eget vestibulum consequat, nunc justo tincidunt
//           sapien, at egestas purus nibh sit amet metus.
//         </p>
//         <p className="text-gray-700 text-lg">
//           Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
//           dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
//           proident.
//         </p>
//         <button className="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-full w-fit transition-all duration-300">
//           Get Quote
//         </button>
//         <p className="text-gray-700 text-lg">
//           More dummy text to allow scrolling. Lorem ipsum dolor sit amet,
//           consectetur adipiscing elit. Pellentesque ac ligula in odio tempor
//           dapibus.
//         </p>
//         <p className="text-gray-700 text-lg">
//           Even more content to scroll. Lorem ipsum dolor sit amet, consectetur
//           adipiscing elit. Sed non urna sed urna malesuada facilisis.
//         </p>
//       </div>
//        <div className="w-full lg:w-1/2 sticky top-0 h-screen flex justify-center items-center bg-gray-100">
//         <img
//           src="https://cdn.pixabay.com/photo/2025/10/12/07/32/measuring-cups-9889151_1280.jpg" // dummy image
//           alt="Dummy"
//           className="w-[80%] h-auto object-cover rounded-xl shadow-2xl"
//         />
//       </div>

//     </section>
//     </>
//   );
// }
import React from 'react'

const ServiceDeal = () => {
  return (
    <div>ServiceDeal</div>
  )
}

export default ServiceDeal