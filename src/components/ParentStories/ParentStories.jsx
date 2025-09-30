import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
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

const ParentStoriesCarousel = () => {
  return (
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
  );
};

export default ParentStoriesCarousel;
