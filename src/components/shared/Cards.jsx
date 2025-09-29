import React from "react";


const Cards = ({ cardImg, heading, para }) => {
  return (
    <div
      className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center
        w-full transition-transform duration-300 hover:shadow-xl hover:-translate-y-2"
    >
      <img
        src={cardImg}
        alt={heading}
        className="w-28 h-28 rounded-full object-cover mb-4 transition-transform duration-300 hover:scale-110"
      />
      <h2 className="text-xl font-semibold mb-2 text-gray-800">{heading}</h2>
      <p className="text-gray-600">{para}</p>
    </div>
  );
};


export default Cards;
