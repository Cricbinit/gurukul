import React from "react";
import "../style/button.css";

const Button = ({ children, variant = "primary", size = "md", ...props }) => {
  const tailwindSize = {
    sm: "text-xl px-5 py-2 border-2",
    lg: "text-2xl px-6 py-3",
  };
  
  const tailwindVariant = {
    primary: "bg-blue-500 text-white hover:bg-blue-600",
    danger: "bg-red-800 text-white hover:bg-red-700",
  };

  let tailwindSubmit = {
    larger:"text-2xl px-5 py-5 border-2 border-red-800",
    secondary:"bg-blue-800 text-white text-2xl"
  }

  return (
    <button
      className={`btn ${tailwindVariant[variant]} ${tailwindSize[size]} ${tailwindSubmit[size]} 
                  rounded-md font-medium transition-transform duration-300 
                  hover:scale-105 active:scale-95 focus:outline-none shadow-md`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
