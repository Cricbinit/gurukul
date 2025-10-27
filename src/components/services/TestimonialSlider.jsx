// File: TestimonialSlider.jsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";


import { Quote } from "lucide-react";
const testimonials = [
  {
    title: "Great food & coffee",
    text: "Brought my kids here today and it was awesome! Very friendly staff at the entrance and the food we ordered came out fast and hot. Coffee was great and the toilets easy to access and very clean.",
    name: "SAMANTHA, NY",
    role: "John’s and Mary’s mother",
    img: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    title: "Lovely atmosphere",
    text: "Such a cozy place! My kids loved the play area and I could relax with a latte. The food was delicious and freshly prepared. Definitely coming back again soon.",
    name: "JULIA, CA",
    role: "Liam’s mother",
    img: "https://randomuser.me/api/portraits/women/45.jpg",
  },
  {
    title: "Amazing service",
    text: "The staff were so friendly and accommodating. They made sure we were comfortable the whole time. The desserts were the highlight of the day!",
    name: "EMILY, TX",
    role: "Sophia’s mother",
    img: "https://randomuser.me/api/portraits/women/46.jpg",
  },
];

export default function TestimonialSlider() {
  return (
    <div className="bg-[#faf5f2] py-20 flex justify-center">
      <div className="w-full max-w-6xl px-4">
        <Swiper
          modules={[Autoplay, Pagination, EffectFade]}
          effect="fade"
          fadeEffect={{ crossFade: true }}
          pagination={{ clickable: true }}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          loop={true}
          speed={1000}
          className="rounded-[30px] bg-white shadow-md relative overflow-hidden"
        >
          {testimonials.map((t, index) => (
            <SwiperSlide key={index}>
              <div className="relative flex flex-col items-center text-center px-8 md:px-24 py-16 transition-opacity duration-1000">
                {/* Decorative Elements */}
                <img
                  src="https://cdn-icons-png.flaticon.com/512/1046/1046784.png"
                  alt="toy"
                  className="absolute left-[-30px] bottom-[-20px] w-24 md:w-28 rotate-[-20deg]"
                />
                <img
                  src="https://cdn-icons-png.flaticon.com/512/861/861386.png"
                  alt="basketball"
                  className="absolute right-[-30px] top-[-20px] w-28 md:w-32"
                />

                {/* Quote Icon */}
               <Quote className="w-12 h-12 text-green-600 mb-4" />

                {/* Title */}
                <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
                  {t.title}
                </h2>

                {/* Text */}
                <p className="text-gray-600 max-w-3xl leading-relaxed mb-10">
                  {t.text}
                </p>

                {/* User Info */}
                <div className="flex flex-col items-center space-y-2">
                  <img
                    src={t.img}
                    alt={t.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <p className="text-green-700 font-semibold uppercase">
                    {t.name}
                  </p>
                  <p className="text-gray-500 text-sm">{t.role}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
