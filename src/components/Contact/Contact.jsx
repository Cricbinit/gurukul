import React from "react";
import Cards from "../shared/Cards";
import ContactForm from "./ContactForm";

const Contact = () => {
  const data = [
    {
      src: "https://picsum.photos/800/600?random=1",
      heading: "Our Office",
      para: "Dubai healthcare city Building 47 Unit 301 & 302",
    },
    {
      src: "https://picsum.photos/800/600?random=2",
      heading: "Email Us",
      para: "support@gurukulaearly.com",
    },
    {
      src: "https://picsum.photos/800/600?random=3",
      heading: "Call us",
      para: "+91 9x7x5 xx2xx Mon - Sat (9AM - 7PM)",
    },
  ];

  return (
    <div id="contact" className="pt-20 bg-gray-50">
      {/* Header Section */}
      <div className="flex justify-center items-center bg-[#F2F6F9] px-4 sm:px-6 md:px-10 py-10 min-h-[300px]">
        <div className="text-center max-w-xl mx-auto py-10 px-6">
          <h1 className="text-4xl font-extrabold text-purple-900 mb-6 font-inter">
            Contact Us
          </h1>
          <p className="text-gray-700 leading-relaxed text-lg">
            At{" "}
            <span className="font-bold text-purple-800">
              Gurukula Early Support
            </span>
            , we’d love to hear from you! Whether you have a question about our
            services, pricing, or anything else, our team is ready to answer
            all your questions.
          </p>
        </div>
      </div>

      {/* Cards Section */}
      <div className="flex justify-center items-center bg-[#7fb3db] px-4 sm:px-6 md:px-10 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-7xl">
          {data.map((cardInfo, index) => (
            <Cards
              key={index}
              cardImg={cardInfo.src}
              heading={cardInfo.heading}
              para={cardInfo.para}
            />
          ))}
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="bg-[#adb7c0] px-4 sm:px-6 md:px-10 py-10">
        <div className="max-w-7xl mx-auto">
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default Contact;
