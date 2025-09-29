import React from "react";

const Wcard = ({ children }) => {
  return (
    <div className=" border-red-800 text-5xl mt-14">
      <div className="border border-gray-600 h-[200px] w-auto rounded-lg shadow-2xl">
        {children}
      </div>
    </div>
  );
};

export default Wcard;
