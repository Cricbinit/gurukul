import React, { useState, useEffect } from "react";
import SectionLayout from "../shared/SectionLayout";
import Typewriter from "../shared/Typewriter";

const faqData = [
  {
    question: "What is Gurukula Early Support?",
    answers: [
      "Gurukula Early Support is a specialized center that focuses on early intervention, holistic development, and individualized learning support for children with language, sensory, and developmental needs.",
    ],
  },
  {
    question: "Who can benefit from your programs?",
    answers: [
      "Language and communication delays",
      "Autism Spectrum Disorder (ASD)",
      "ADHD and attention difficulties",
      "Sensory processing challenges",
      "Early literacy and numeracy delays",
      "Any child who needs extra support in their developmental journey.",
    ],
  },
  {
    question: "What age group do you support?",
    answers: [
      "We primarily support young children in their early years, as early intervention can make a significant difference.",
      "However, our programs are customized, so older children may also benefit depending on their needs.",
    ],
  },
  {
    question: "What services do you offer?",
    answers: [
      "Language development",
      "Sensory integration support",
      "Early literacy and numeracy",
      "Parent coaching and training",
      "Evolving Cosmic Communion (spiritual & holistic growth)",
    ],
  },
  {
    question: "Do parents have to be involved in the sessions?",
    answers: [
      "Yes, parent involvement is a key part of our approach.",
      "We work as a team with families to ensure consistent support both at the center and at home.",
    ],
  },
  {
    question: "How do I enroll my child?",
    answers: [
      "You can book an initial consultation with our team.",
      "We will assess your child’s needs, explain the programs in detail, and design a personalized plan for their development.",
    ],
  },
  {
    question: "Why should I choose Gurukula Early Support over other centers?",
    answers: [
      "A warm, inclusive environment",
      "A holistic, child-centered approach",
      "Experienced professionals who care deeply",
      "Programs that nurture the mind, body, and spirit",
      "Strong parent–therapist collaboration for best outcomes",
    ],
  },
];

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  // Inject structured data for SEO (FAQPage schema)
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "application/ld+json";

    const structuredData = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": faqData.map((faq) => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answers.join(" "),
        },
      })),
    };

    script.innerHTML = JSON.stringify(structuredData);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <SectionLayout>
      <div id="faq"className="min-h-screen w-full max-w-[1400px] mx-auto">
        <header>
          <h1 className="text-[clamp(1.75rem,3vw,2.5rem)] font-semibold text-purple-800 mb-4">
            Frequently Asked Questions – Gurukula Early Support
          </h1>

          <Typewriter
            text="Got questions about our programs? We've got answers."
            typingSpeed={50}
            deletingSpeed={20}
            pauseAfterTyping={2000}
            loop={true}
            className="text-lg italic text-gray-600"
          />
        </header>

        <div className="mt-8 space-y-4" role="list">
          {faqData.map((faq, index) => (
            <article
              key={index}
              itemScope
              itemProp="mainEntity"
              itemType="https://schema.org/Question"
              className="border border-gray-300 rounded-lg p-4 transition-all duration-300 bg-white shadow-sm"
            >
              <button
                onClick={() => toggleFaq(index)}
                className="w-full text-left font-medium text-purple-700 flex justify-between items-center focus:outline-none"
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                <h2 itemProp="name" className="text-base md:text-lg font-medium">
                  {faq.question}
                </h2>
                <span className="text-xl font-bold">{openIndex === index ? "−" : "+"}</span>
              </button>

              <div
                id={`faq-answer-${index}`}
                itemScope
                itemProp="acceptedAnswer"
                itemType="https://schema.org/Answer"
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  openIndex === index ? "max-h-[500px] opacity-100 mt-3" : "max-h-0 opacity-0"
                }`}
              >
                <ul className="list-disc list-inside text-gray-700 text-sm space-y-1" itemProp="text">
                  {faq.answers.map((answer, i) => (
                    <li key={i}>{answer}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </SectionLayout>
  );
};

export default Faq;
