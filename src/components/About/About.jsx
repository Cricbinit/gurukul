import React from "react";
import Typewriter from "../shared/Typewriter";
import Wcard from "./../shared/Wcard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { FaBullhorn, FaBullseye } from "react-icons/fa";
import { AiOutlineEye } from "react-icons/ai";

const About = () => {
  let data = [
    {
      img: "",
      header: "🧭 The First Steps and Confusion",
      para: "We visited a well-known institute for guidance. There, Aryan was diagnosed with ADHD — a term completely new to us. A few weeks later, after further assessments elsewhere, the diagnosis changed to Autism Spectrum Disorder (ASD).We were told his case was “severe” — that 75% of the disorder was already present and that recovery might not be possible. I was shocked, confused, and overwhelmed. I spent sleepless nights researching everything I could about autism — reading articles, following parents’ journeys on Instagram, watching videos, and trying to understand how I could help my son.Meanwhile, therapy centers asked us to wait for two months for sessions to begin. That was too long for us — I couldn’t just sit and wait.",
    },
    {
      img: "",
      header: "🏠 Turning Our Home Into a Learning Space",
      para: "We visited a well-known institute for guidance. There, Aryan was diagnosed with ADHD — a term completely new to us. A few weeks later, after further assessments elsewhere, the diagnosis changed to Autism Spectrum Disorder (ASD).We were told his case was “severe” — that 75% of the disorder was already present and that recovery might not be possible. I was shocked, confused, and overwhelmed. I spent sleepless nights researching everything I could about autism — reading articles, following parents’ journeys on Instagram, watching videos, and trying to understand how I could help my son.Meanwhile, therapy centers asked us to wait for two months for sessions to begin. That was too long for us — I couldn’t just sit and wait.",
    },
    {
      img: "",
      header: "🧭 The First Steps and Confusion",
      para: "We visited a well-known institute for guidance. There, Aryan was diagnosed with ADHD — a term completely new to us. A few weeks later, after further assessments elsewhere, the diagnosis changed to Autism Spectrum Disorder (ASD).We were told his case was “severe” — that 75% of the disorder was already present and that recovery might not be possible. I was shocked, confused, and overwhelmed. I spent sleepless nights researching everything I could about autism — reading articles, following parents’ journeys on Instagram, watching videos, and trying to understand how I could help my son.Meanwhile, therapy centers asked us to wait for two months for sessions to begin. That was too long for us — I couldn’t just sit and wait.",
    },
  ];
  const loopedData = [...data, ...data];
  return (
    <>
      <section
        id="about-us"
        className="w-full bg-white px-6 sm:px-12 md:px-20 pt-24 md:py-24"
      >
        <div className="max-w-[1100px] mx-auto flex flex-col md:flex-row items-center md:items-stretch">
          {/* Left Container */}
          <div className="flex-1 flex flex-col justify-center h-[500px] w-full md:w-1/2 overflow-y-auto p-4 bg-white ">
            <h2 className="text-[clamp(1.75rem,3vw,2.5rem)] font-medium bg-gradient-to-tl from-[#54169C] to-[#DA159B] bg-clip-text text-transparent leading-tight mb-2">
              Meet our founder
            </h2>
            <h2 className="text-[clamp(1.25rem,2.5vw,2rem)] font-light bg-gradient-to-tl from-[#54169C] to-[#DA159B] bg-clip-text text-transparent leading-tight">
              Name
            </h2>
            <p className="text-gray-700 mb-4 font-light">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reiciendis tempore tempora et mollitia, rem quis recusandae
              explicabo aspernatur voluptas sequi similique repellat laboriosam
              perferendis, officiis cupiditate omnis dignissimos ipsam animi!
            </p>
            <p className="text-gray-700 font-light mt-1 mb-4 text-[clamp(1rem,1.8vw,1.125rem)]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reiciendis tempore tempora et mollitia, rem quis recusandae
              explicabo aspernatur voluptas sequi similique repellat laboriosam
              perferendis, officiis cupiditate omnis dignissimos ipsam animi!
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

          {/* Right Container */}
          <div className="flex-1 h-[500px] w-full md:w-1/2 flex justify-center md:justify-end">
            <img
              src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1100&q=80"
              alt="founder"
              className="w-full h-full object-cover  shadow-lg"
            />
          </div>
        </div>
      </section>

      {/*  */}
      <section className="w-full bg-[#F7F7F7] px-6 sm:px-12 md:px-20 py-24">
        <div className="max-w-[1100px] mx-auto flex flex-col md:flex-row gap-10">
          {/* Left Column: Vertical carousel */}
          <div className="flex-1 w-full md:w-1/2 h-[500px] md:h-[600px] overflow-hidden pt-20">
            <Swiper
              direction="vertical"
              slidesPerView={3}
              spaceBetween={8}
              loop={true}
              modules={[Autoplay]}
              autoplay={{
                delay: 0,
                disableOnInteraction: false,
                pauseOnMouseEnter: false,
              }}
              speed={5000} // adjust speed for smooth continuous scroll
              className="h-full"
            >
              {loopedData.map((item, index) => (
                <SwiperSlide key={index}>
                  <div className="bg-white rounded-xl shadow-lg p-6 flex items-start gap-4 h-full overflow-hidden">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex justify-center items-center flex-shrink-0">
                      {item.icon}
                    </div>
                    <div className="overflow-hidden">
                      <h3 className="text-green-900 font-semibold text-lg mb-1 truncate">
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

          {/* Right Column: Story */}
          <div className="flex-1 w-full md:w-1/2 p-2 md:p-6 flex flex-col gap-4 overflow-hidden">
            <h2 className="text-3xl font-semibold text-green-900">
              Our Story
            </h2>
            <Typewriter
              text="🌿 Our Journey with Aryan - The Heart Behind Gurukula Early Support"
              typingSpeed={40}
              deletingSpeed={20}
              pauseAfterTyping={2000}
              loop={true}
              className="whitespace-pre-line"
            />
            <p className="text-gray-700 text-justify leading-relaxed line-clamp-5">
              Every parent dreams of seeing their child grow, learn, and express
              themselves confidently. But for us, the journey took an unexpected
              turn when our son, Aryan, was around two years old.
            </p>
            <p className="text-gray-700 text-justify leading-relaxed line-clamp-5">
              We first noticed that Aryan hadn’t started speaking yet.
              Naturally, concern grew at home — and questions began to surface:
              “Why isn’t he talking yet?” We even heard the common myth: “Boys
              talk late.”
            </p>
            <p className="text-gray-700 text-justify leading-relaxed ">
            As a mother, I sensed something deeper. Communication isn’t just speaking — it’s understanding and connecting. Aryan had stopped responding to his name, preferred playing alone, and showed little interest in other children. At first, we thought he just needed more time.
            </p>
             <p className="text-gray-700 text-justify leading-relaxed ">
            Through this experience, we learned the importance of early observation, responsive parenting, and seeking guidance when developmental milestones seem delayed. Every child is unique, and early intervention can make a remarkable difference in their speech, social skills, and overall growth.
            </p>
           
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
