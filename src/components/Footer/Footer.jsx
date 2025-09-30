import React from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaClock,
  FaWhatsapp,
} from "react-icons/fa";

import { FaAngleRight } from "react-icons/fa6";

const socialLinks = [
  {
    href: "https://facebook.com",
    icon: <FaFacebookF size={18} />,
    hoverColor: "#1877F2",
    title: "Facebook",
  },
  {
    href: "https://instagram.com",
    icon: <FaInstagram size={18} />,
    hoverColor: "#E4405F", // Instagram pink/red
    title: "Instagram",
  },
  {
    href: "https://linkedin.com",
    icon: <FaLinkedinIn size={18} />,
    hoverColor: "#0077B5",
    title: "LinkedIn",
  },
  {
    href: "https://x.com/",
    icon: <FaTwitter size={18} />,
    hoverColor: "#1DA1F2",
    title: "X",
  },
  {
    href: "https://wa.me/+919X7X5XX2XX",
    icon: <FaWhatsapp size={18} />,
    hoverColor: "#25D366",
    title: "WhatsApp",
  },
];

const SocialFloating = () => {
  return (
    <div className="fixed right-4 bottom-4 flex flex-col gap-4 bg-white shadow-lg rounded-l-md p-2 z-50">
      {socialLinks.map(({ href, icon, hoverColor, title }, index) => (
        <a
          key={index}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          title={title}
          className="relative p-3 rounded-full flex justify-center items-center bg-transparent text-gray-600
            transition-transform duration-300
            hover:scale-110
            "
          style={{ boxShadow: `0 0 8px ${hoverColor}55` }} // subtle glow effect on shadow using hoverColor with transparency
        >
          {/* Icon wrapper */}
          <span
            className="inline-block transition-transform duration-300"
            style={{
              transformOrigin: "center",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(0.85) translateY(3px)";
              e.currentTarget.parentElement.style.backgroundColor = hoverColor;
              e.currentTarget.parentElement.style.color = "#fff";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1) translateY(0)";
              e.currentTarget.parentElement.style.backgroundColor = "transparent";
              e.currentTarget.parentElement.style.color = "gray";
            }}
          >
            {icon}
          </span>
        </a>
      ))}
    </div>
  );
};



const Footer = () => {
  return (
    <>
      <SocialFloating />

      <footer className="w-full bg-[#b1a4a481] px-6 sm:px-12 md:px-20 py-16">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Column 1 */}
          <div className="relative">
            <div className="relative">
              <h3 className="text-lg font-semibold text-purple-800 mb-4">
                About Us
              </h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                Gurukula Early Support is dedicated to nurturing children's
                development through early intervention and holistic care.
              </p>
            </div>
            <div className="hidden lg:block absolute top-0 right-0 h-full w-[1px] bg-gradient-to-b from-purple-400 via-purple-600 to-purple-400 animate-lineFlow"></div>
          </div>

          {/* Column 2 */}
          <div className="relative">
            <h3 className="text-lg font-semibold text-purple-800 mb-4">
              Quick Links
            </h3>
            <ul className="text-sm text-gray-700 space-y-2">
              <li className="flex items-center gap-2">
                <FaAngleRight className="text-purple-600" />
                <a href="/about" className="hover:text-purple-600 transition">
                  About
                </a>
              </li>
              <li className="flex items-center gap-2">
                <FaAngleRight className="text-purple-600" />
                <a href="/services" className="hover:text-purple-600 transition">
                  Services
                </a>
              </li>
              <li className="flex items-center gap-2">
                <FaAngleRight className="text-purple-600" />
                <a href="/faq" className="hover:text-purple-600 transition">
                  FAQ
                </a>
              </li>
              <li className="flex items-center gap-2">
                <FaAngleRight className="text-purple-600" />
                <a href="/contact" className="hover:text-purple-600 transition">
                  Contact
                </a>
              </li>
            </ul>
            <div className="hidden lg:block absolute top-0 right-0 h-full w-[1px] bg-gradient-to-b from-purple-400 via-purple-600 to-purple-400"></div>
          </div>

          {/* Column 3 */}
          <div className="relative">
            <h3 className="text-lg font-semibold text-purple-800 mb-4">
              Programs
            </h3>
            <ul className="text-sm text-gray-700 space-y-2">
              <li>Early Literacy & Numeracy</li>
              <li>Sensory Integration</li>
              <li>Language Development</li>
              <li>Parent Coaching</li>
            </ul>
            <div className="hidden lg:block absolute top-0 right-0 h-full w-[1px] bg-gradient-to-b from-purple-400 via-purple-600 to-purple-400"></div>
          </div>

          {/* Column 4 */}
          <div className="relative">
            <h3 className="text-lg font-semibold text-purple-800 mb-4">
              Contact
            </h3>
            <div className="text-sm text-gray-700 space-y-2">
              <p className="flex items-center gap-2">
                <FaPhoneAlt className="text-purple-600" />
                +91 9x7x5 xx2xx
              </p>
              <p className="flex items-center gap-2">
                <FaEnvelope className="text-purple-600" />
                support@gurukulaearly.com
              </p>
              <p className="flex items-start gap-2">
                <FaMapMarkerAlt className="text-purple-600 mt-1" />
                Bangalore, India
              </p>
              <p className="flex items-start gap-2">
                <FaClock className="text-purple-600 mt-1" />
                <span>
                  Mon – Fri : 8.30 AM – 7.00 PM
                  <br />
                  Saturday – 8.30 AM – 5 PM <br />
                  Sunday – Closed
                </span>
              </p>
            </div>
          </div>
        </div>
      </footer>

      {/* Footer Bottom */}
      <div className="text-center text-sm text-gray-500 bg-[#1F2124] py-4">
        © {new Date().getFullYear()} Gurukula Early Support. All rights reserved.
      </div>
    </>
  );
};

export default Footer;
