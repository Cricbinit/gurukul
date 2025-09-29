import React from "react";
import Icons from "../shared/Icons";
import "../../App.css";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaClock,
  FaWhatsapp
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
    gradient: true, // special case for Instagram
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
    href: "https://wa.me/919035842458",
    icon: <FaWhatsapp size={18} />,
    hoverColor: "#25D366",
    title: "WhatsApp",
  },
];

const Footer = () => {
  return (
    <footer className="w-full bg-[#b1a4a481] px-6 sm:px-12 md:px-20 py-16">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Column 1 */}
        <div className="relative">
          {/* Column content */}
          

          {/* Animated vertical line */}
          <div className="relative">
            {/* Column content */}
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
          <div className="hidden lg:block absolute top-0 right-0 h-full w-[1px] bg-gradient-to-b from-purple-400 via-purple-600 to-purple-400 "></div>
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
          <div className="hidden lg:block absolute top-0 right-0 h-full w-[1px] bg-gradient-to-b from-purple-400 via-purple-600 to-purple-400 "></div>
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
      {/* Social Icons */}
      <div className="mt-12 flex justify-center gap-4">
        {socialLinks.map(
          ({ href, icon, hoverColor, gradient, title }, index) => (
            <Icons
              key={index}
              href={href}
              icon={icon}
              hoverColor={hoverColor}
              gradient={gradient}
              title={title}
            />
          )
        )}
      </div>
      ;{/* Footer Bottom */}
      <div className="mt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Gurukula Early Support. All rights
        reserved.
      </div>
    </footer>
  );
};

export default Footer;
