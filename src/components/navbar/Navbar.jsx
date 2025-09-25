import React from "react";
import List from "../shared/list";
import "./navbar.css";
import Button from "../shared/Button";
import Container from "../shared/container";

const Navbar = () => {
  let data = [
    { link: "#", name: "Home" },
    { link: "#", name: "Services" },
    { link: "#", name: "Contact" },
    { link: "#", name: "About" },
    { link: "#", name: "Support" },
  ];

  return (
    <Container
      styleCss="fixed top-0 left-0 w-full bg-gradient-to-r from-blue-100 to-pink-100 px-10 py-7 shadow-[0_4px_6px_rgba(0,0,0,0.1)] z-50"
    >
      <div className="nav__container">
        <div className="nav_sub_container">
          {/* Left Logo */}
          <div className="nav_left">
            <h1>
              <a href="#" className="nav_link">
                Gurukul Early
              </a>
            </h1>
          </div>

          {/* Right Nav Links */}
          <div className="nav_right">
            <ul>
              {data.map((m, index) => (
                <List key={index} m={m.name} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Navbar;
