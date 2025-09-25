import React from "react";

const Cards = ({ cardImg, heading, para }) => {
  return (
    <div
      className="p-5 rounded shadow flex flex-col justify-center items-center gap-5 bg-white
                    w-full sm:w-[45%] md:w-[30%] lg:w-[28%] h-auto
                    transition-transform duration-300 hover:scale-105"
    >
      <div>
        <img
          src={cardImg}
          alt={heading}
          className="w-24 h-24 sm:w-28 sm:h-28 rounded-full object-cover transition-transform duration-300 hover:scale-110"
        />
      </div>
      <h1 className="text-lg sm:text-xl font-semibold text-center">
        {heading}
      </h1>
      <p className="text-sm sm:text-base text-center text-gray-600">{para}</p>
    </div>
  );
};

export default Cards;
