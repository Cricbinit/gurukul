import React from "react";

const SectionLayout = ({ children }) => {
  return (
    <section
      className="w-full bg-[#F2F6F9] px-6 sm:px-12 md:px-20 pt-24 md:py-24"
    >
      {children}
    </section>
  );
};

export default SectionLayout;
