import React from "react";
import Cards from "../shared/Cards";
import Container from "../shared/container";
import ContactForm from "./ContactForm";

const Contact = () => {
  const data = [
    {
      src: "https://picsum.photos/800/600",
      heading: "Our Office",
      para: "Dubai healthcare city Building 47 Unit 301 & 302",
    },
    {
      src: "https://picsum.photos/800/600",
      heading: "Email Us",
      para: "info@thespeechclinic.ae",
    },
    {
      src: "https://picsum.photos/800/600",
      heading: "Call us",
      para: "+971-508857146 +971-4433 9891 Mon - Sat (9AM - 7PM)",
    },
  ];

  return (
    <Container className="px-4 md:px-10">
      {/* Hero Section */}
      <div className="border-2 flex flex-col justify-center items-center py-10 md:py-16 h-auto bg-gradient-to-r from-purple-200 to-blue-100 text-center text-white mt-20 rounded-lg">
        <h1 className="text-3xl md:text-5xl font-bold mb-4 text-purple-900">
          Contact Us
        </h1>
        <p className="text-sm md:text-base text-black max-w-2xl px-4 md:px-0">
          We'd love to hear from you! Whether you have a question about our
          services, pricing, or anything else, our team is ready to answer all
          your questions.
        </p>
      </div>

      {/* Cards Section */}
      <div className="flex flex-wrap justify-center md:justify-evenly items-stretch bg-[#f8f8f8] py-10 md:py-20 gap-6 md:gap-10">
        {data.map((cardInfo, index) => (
          <Cards
            key={index}
            cardImg={cardInfo.src}
            heading={cardInfo.heading}
            para={cardInfo.para}
            className="w-full sm:w-[45%] md:w-[30%] lg:w-[28%]"
          />
        ))}
      </div>

      {/* Contact Form */}
      <div className="px-4 md:px-0 mb-10">
        <ContactForm />
      </div>
    </Container>
  );
};

export default Contact;
