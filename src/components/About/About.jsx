import React from "react";
import Typewriter from "../shared/Typewriter";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";


import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const videoLinks = [
  {
    title: "Aryan's Journey",
    url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  { title: "Parent Story 1", url: "https://www.youtube.com/embed/tgbNymZ7vqY" },
  { title: "Parent Story 2", url: "https://www.youtube.com/embed/xvFZjo5PgG0" },
  {
    title: "Early Support Experience",
    url: "https://www.youtube.com/embed/ysz5S6PUM-U",
  },
];

const About = () => {
  let data = [
    {
      header: "🧭 The First Steps and Confusion",
      para: "We visited a well-known institute for guidance. There, Aryan was diagnosed with ADHD — a term completely new to us. A few weeks later, after further assessments elsewhere, the diagnosis changed to Autism Spectrum Disorder (ASD)...",
    },
    {
      header: "🏠 Turning Our Home Into a Learning Space",
      para: "We decided to start learning ourselves and turned our home into a learning space. With online resources, we began engaging Aryan in activities that stimulated his senses and supported communication...",
    },
    {
      header: "💪 Progress and Hope",
      para: "Despite initial discouragement, we saw Aryan making progress. Small milestones filled us with hope and strength to keep going. Today, we want to help other parents feel that same hope...",
    },
  ];

  const loopedData = [...data, ...data]; // for infinite loop in swiper

  return (
    <>
      {/* Founder Section */}
      <section
        id="about-us"
        className="w-full bg-white px-6 sm:px-12 md:px-20 pt-24 md:py-24"
      >
        <div className="max-w-[1100px] mx-auto flex flex-col md:flex-row items-center md:items-stretch gap-10">
          {/* Text Container */}
          <div className="flex-1 flex flex-col justify-center w-full overflow-y-auto p-4 bg-white">
            <h2 className="text-[clamp(1.75rem,3vw,2.5rem)] font-medium bg-gradient-to-tl from-[#54169C] to-[#DA159B] bg-clip-text text-transparent leading-tight mb-2">
              Meet our founder
            </h2>
            <h2 className="text-[clamp(1.25rem,2.5vw,2rem)] font-light bg-gradient-to-tl from-[#54169C] to-[#DA159B] bg-clip-text text-transparent leading-tight">
              Name
            </h2>
            <p className="text-gray-700 mb-4 font-light">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reiciendis tempore tempora et mollitia...
            </p>
            <p className="text-gray-700 font-light mt-1 mb-4 text-[clamp(1rem,1.8vw,1.125rem)]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reiciendis tempore tempora et mollitia...
            </p>
            <blockquote className="italic font-medium mb-6 whitespace-pre-line min-h-[4rem]">
              <q className="text-gray-800">
                <Typewriter
                  text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itate dolorem sequi facere dolus excepturi!"
                  typingSpeed={40}
                  deletingSpeed={20}
                  pauseAfterTyping={2000}
                  loop={true}
                  className="whitespace-pre-line"
                />
              </q>
            </blockquote>
          </div>

          {/* Image Container */}
          <div className="flex-1 w-full flex justify-center md:justify-end">
            <img
              src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1100&q=80"
              alt="founder"
              className="w-full h-full max-h-[500px] object-cover shadow-lg rounded-lg"
            />
          </div>
        </div>
      </section>

      <section className="w-full px-4 sm:px-8 md:px-16 lg:px-20 py-10">
        {/* Centered Heading */}
        <div className="max-w-[1100px]  mx-auto text-center mb-8 px-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-green-900 mb-2">
            Our Story
          </h2>
          <Typewriter
            text="🌿 Our Journey with Aryan - The Heart Behind Gurukula Early Support"
            typingSpeed={40}
            deletingSpeed={20}
            pauseAfterTyping={2000}
            loop={true}
            className="text-sm sm:text-base text-gray-700"
          />
        </div>

        {/* Content Section */}
        <div className="max-w-[1100px] mx-auto flex flex-col md:flex-row gap-10">
          {/* Left Column: Swiper */}
          <div className="Swiper-main w-full md:w-1/2 h-[500px] mb-5">
            <div className="h-full rounded-xl p-4  overflow-hidden">
              <Swiper
                direction="vertical"
                slidesPerView={3}
                spaceBetween={10}
                loop={true}
                modules={[Autoplay]}
                autoplay={{
                  delay: 1,
                  disableOnInteraction: false,
                  pauseOnMouseEnter: false,
                }}
                speed={5000}
                className="swiper-data h-full"
              >
                {loopedData.map((item, index) => (
                  <SwiperSlide key={index}>
                    <div className="bg-white rounded-xl p-4 flex gap-4 items-start shadow-[0_4px_20px_rgba(0,0,0,0.1)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.15)] transition-all duration-300 ease-in-out">
                      <div className="w-10 h-10 bg-green-100 rounded-full flex justify-center items-center text-sm font-bold shrink-0">
                        {item.header.slice(0, 2)}
                      </div>
                      <div className="overflow-hidden">
                        <h3 className="text-green-900 font-semibold text-sm mb-1 truncate">
                          {item.header}
                        </h3>
                        <p className="text-gray-700 text-sm line-clamp-3">
                          {item.para}
                        </p>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>

          {/* Right Column: Story Text */}
          <div className="w-full md:w-1/2 flex flex-col justify-center bg-[#FFFFFF] p-6 rounded-xl text-gray-700 text-justify leading-relaxed">
            <p>
              Every parent dreams of seeing their child grow, learn, and express
              themselves confidently. But for us, the journey took an unexpected
              turn when our son, Aryan, was around two years old.
            </p>
            <p>
              We first noticed that Aryan hadn’t started speaking yet.
              Naturally, concern grew at home — and questions began to surface:
              “Why isn’t he talking yet?” We even heard the common myth: “Boys
              talk late.”
            </p>
            <p>
              As a mother, I sensed something deeper. Communication isn’t just
              speaking — it’s understanding and connecting. Aryan had stopped
              responding to his name, preferred playing alone, and showed little
              interest in other children.
            </p>
            <p>
              Through this experience, we learned the importance of early
              observation, responsive parenting, and seeking guidance when
              developmental milestones seem delayed. Every child is unique, and
              early intervention can make a remarkable difference.
            </p>
          </div>
        </div>
      </section>
      {/* Parent Stories */}
     {/* Parent Stories */}
  <section className="parent-stories w-full bg-gradient-to-br from-purple-50 to-purple-100 py-20 px-6 sm:px-12 md:px-20 relative">
      {/* Heading */}
      <div className="text-center mb-12 max-w-xl mx-auto">
        <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-700 via-pink-600 to-pink-400">
          📽️ Parent Stories
        </h2>
        <div className="h-1 w-24 bg-pink-400 rounded mx-auto mt-4 mb-6"></div>
        <p className="text-gray-600 text-lg sm:text-xl">
          Hear directly from parents about their journeys and breakthroughs.
        </p>
      </div>

      <div className="max-w-[1100px] mx-auto relative">
        <Swiper
          modules={[Navigation, Autoplay]}
          slidesPerView={1}
          spaceBetween={20}
          loop={true}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          navigation={{
            nextEl: ".custom-next",
            prevEl: ".custom-prev",
          }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="py-4"
        >
          {videoLinks.map((video, idx) => (
            <SwiperSlide key={idx}>
              <div className="bg-white rounded-xl overflow-hidden shadow-lg transform transition hover:scale-[1.03]">
                <div className="aspect-w-16 aspect-h-9 bg-black">
                  <iframe
                    src={video.url}
                    title={video.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  ></iframe>
                </div>
                <div className="p-4">
                  <h3 className="text-purple-900 font-semibold text-lg">
                    {video.title}
                  </h3>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Left Arrow */}
        <button
          className="custom-prev cursor-pointer absolute -left-6 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-[#DA159B] to-[#54169C] bg-opacity-10 hover:bg-opacity-70 text-white w-11 h-11 rounded-full hidden md:flex items-center justify-center z-30 transition-all duration-300 hover:scale-125 active:scale-95 hover:shadow-lg"
          aria-label="Previous slide"
        >
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 320 512"
            height="24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z"></path>
          </svg>
        </button>

        {/* Right Arrow */}
        <button
          className="custom-next cursor-pointer absolute -right-6 top-1/2 transform -translate-y-1/2 bg-gradient-to-l from-[#DA159B] to-[#54169C] bg-opacity-10 hover:bg-opacity-70 text-white w-11 h-11 rounded-full hidden md:flex items-center justify-center z-30 transition-all duration-300 hover:scale-125 active:scale-95 hover:shadow-lg"
          aria-label="Next slide"
        >
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 320 512"
            height="24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M285.48 272.97L91.13 467.31c-9.37 9.37-24.57 9.37-33.94 0l-22.67-22.67c-9.36-9.36-9.37-24.52-.04-33.9L188.51 256 34.49 101.25c-9.34-9.38-9.32-24.54.04-33.9l22.67-22.67c9.37-9.37 24.57-9.37 33.94 0l194.35 194.34c9.37 9.37 9.37 24.57 0 33.94z"></path>
          </svg>
        </button>
      </div>
    </section>

      {/* End Parent Stories */}
    </>
  );
};

export default About;
