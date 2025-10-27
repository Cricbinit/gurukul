import React from "react";
import climbingImg from "../../assets/hero_services.jpg";
import playgroundImg from "../../assets/hero_services.jpg";
import interactiveImg from "../../assets/hero_services.jpg";
import cafeImg from "../../assets/hero_services.jpg";

const services = [
  {
    title: "Climbing Wall",
    desc: "Have fun in the biggest and safest climbing arena.",
    img: climbingImg,
    bg: "bg-white",
  },
  {
    title: "Playground",
    desc: "Keep the kids entertained in indoor adventure playgrounds.",
    img: playgroundImg,
    bg: "bg-white",
  },
  {
    title: "Interactive Play",
    desc: "Interactive fitness attractions designed to improve child’s skills.",
    img: interactiveImg,
    bg: "bg-white",
  },
  {
    title: "Caffe & Snack Bar",
    desc: "Awesome barista made coffee, cafe menu with healthy choices.",
    img: cafeImg,
    bg: "bg-[#FDBD2E]",
  },
];

export default function ServicesOffer() {
  return (
    <section className="bg-white mb-10">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
          What we offer
        </h2>
        <p className="text-gray-600 max-w-3xl mx-auto mb-12">
          In today’s world most children would rather play video games than do
          physical activities. Our mission is to show children ways to enjoy
          themselves while they gain a love for physical play.
        </p>

        {/* Cards Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {services.map((item, i) => (
            <div
              key={i}
              className={`rounded-[2rem] overflow-hidden shadow-md transition-all duration-300 hover:shadow-xl ${item.bg}`}
            >
              <div className="p-6 text-left">
                <h3 className="text-xl font-extrabold text-gray-800 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4">{item.desc}</p>
              </div>
              <div className="w-full h-[200px] overflow-hidden rounded-b-[2rem]">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-105"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
