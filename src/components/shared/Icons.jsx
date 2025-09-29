import React from "react";


const Icons = ({ href, icon, title, gradient, hoverColor }) => {
  const hoverClassMap = {
    "#1877F2": "hover:bg-[#1877F2]", // Facebook
    "#0077B5": "hover:bg-[#0077B5]", // LinkedIn
    "#1DA1F2": "hover:bg-[#1DA1F2]", // Twitter
    "#25D366": "hover:bg-[#25D366]", // WhatsApp
    
  };

  const baseClasses =
    "w-10 h-10 flex items-center justify-center rounded-full bg-purple-100 text-purple-700 transition-all duration-300";

  const hoverClasses = gradient
    ? "hover:bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 hover:text-white"
    : `${hoverClassMap[hoverColor] || ""} hover:text-white`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      title={title}
      className={`${baseClasses} ${hoverClasses}`}
    >
      {icon}
    </a>
  );
};

export default Icons;
