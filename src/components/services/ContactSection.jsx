import React from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";
import { FaLinkedin, FaGithub, FaTwitter, FaInstagram , FaDribbble} from "react-icons/fa";

const ContactSection = () => {
  const contactInfo = [
    {
      icon: <Phone className="text-green-400 w-6 h-6 shrink-0" />,
      label: "Contact No",
      value: "+(91) 89101 26472",
    },
    {
      icon: <Mail className="text-green-400 w-6 h-6 shrink-0" />,
      label: "Email",
      value: "vivekkrchoubey2000@gmail.com",
    },
    {
      icon: <MapPin className="text-green-400 w-6 h-6 shrink-0" />,
      label: "Address",
      value: "Bangalore, Karnataka",
    },
  ];

  const socialLinks = [
    { icon: <FaLinkedin />, url: "https://www.linkedin.com/in/choubey2000236/" },
    { icon: <FaGithub />, url: "https://github.com/Cricbinit" },
    { icon: <FaDribbble />, url: "https://blog.mrchoubey.com/" },
    { icon: <FaInstagram />, url: "https://instagram.com/" },
  ];

  return (
    <section className="bg-black text-white py-16 px-4 sm:px-8 md:px-12 lg:px-20">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <motion.h2
          className="text-xl sm:text-2xl font-semibold flex items-center gap-2 mb-2"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          ✉️ Contact
        </motion.h2>

        <motion.h3
          className="text-2xl sm:text-3xl md:text-4xl font-bold mb-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
        >
          Let’s Get in Touch!
        </motion.h3>

        {/* Contact Info + Right Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Left Side */}
          <div className="space-y-5">
            {contactInfo.map((info, i) => (
              <motion.div
                key={i}
                className="flex items-start sm:items-center gap-4 bg-gray-900 border border-gray-800 p-5 rounded-lg hover:border-green-500 transition-colors duration-300"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.2, duration: 0.5 }}
                viewport={{ once: true }}
              >
                {info.icon}
                <div className="flex-1 min-w-0">
                  <p className="text-gray-400 text-sm sm:text-base">{info.label}</p>
                  <p className="font-semibold text-sm sm:text-[15px] break-words md:break-all">
                    {info.value}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right Side - Social / Message */}
          <motion.div
            className="flex flex-col justify-center items-center text-center bg-gray-900 border border-gray-800 rounded-lg p-8 md:p-10"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h4 className="text-2xl font-bold mb-4 text-green-400">
              Let’s Collaborate 🤝
            </h4>
            <p className="text-gray-300 mb-8 max-w-md">
              I’m always open to discussing new projects, creative ideas, or
              opportunities to be part of your vision.  
              Let’s build something amazing together!
            </p>

            {/* Social Icons */}
            <div className="flex gap-6 text-2xl text-gray-400">
              {socialLinks.map((social, i) => (
                <motion.a
                  key={i}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{
                    scale: 1.2,
                    color: "#22c55e",
                    textShadow: "0px 0px 10px rgba(34,197,94,0.7)",
                  }}
                  transition={{ type: "spring", stiffness: 200 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
