import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";

import Container from "../shared/container";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const data = [
    { link: "/", name: "Home" },
    { link: "/services", name: "Services" },
    { link: "/parent-stories", name: "Parent Stories" },

    { link: "/about", name: "About" },
    { link: "/support", name: "Support" },
    { link: "/faq", name: "FAQ" },
    { link: "/contact", name: "Contact Us" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-gradient-to-r from-blue-100 to-pink-100 shadow-md z-50">
      <Container styleCss="px-4 sm:px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center space-x-3"
          aria-label="Gurukul Early Home"
          onClick={() => setMenuOpen(false)}
        >
          {/* Logo Circle */}
          <div className="w-12 h-12 bg-gradient-to-tr from-[#B0C4DE] to-[#D3D3D3] rounded-full flex items-center justify-center shadow-md">
            <span className="text-[#2F4F4F] font-bold text-xl">G</span>
          </div>

          {/* Text Logo */}
          <div className="flex flex-col leading-tight">
            <h1 className="text-2xl font-extrabold text-[#2F4F4F]">
              Gurukul Early
            </h1>
            <h2 className="text-sm font-semibold text-[#708090]">Support</h2>
          </div>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6">
          {data.map(({ link, name }) => (
            <li key={name}>
              <Link
                to={link}
                onClick={() => setMenuOpen(false)}
                className={`transition-all duration-300 font-medium ${
                  name === "Contact Us"
                    ? "bg-purple-600 text-white px-4 py-2 rounded-full hover:bg-purple-700"
                    : "text-gray-700 hover:text-purple-700"
                }`}
              >
                {name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-purple-700 focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </Container>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-md">
          <ul className="flex flex-col space-y-4 px-6 py-4">
            {data.map(({ link, name }) => (
              <li key={name}>
                <Link
                  to={link}
                  onClick={() => setMenuOpen(false)}
                  className={`block font-semibold transition-all duration-300 ${
                    name === "Contact Us"
                      ? "bg-purple-600 text-white px-4 py-2 rounded-full hover:bg-purple-700 text-center"
                      : "text-gray-700 hover:text-purple-700"
                  }`}
                >
                  {name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
