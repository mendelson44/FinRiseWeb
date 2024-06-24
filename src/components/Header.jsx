import React from "react";
import { Link } from "react-router-dom";

import "../styles/header.css";

function Header() {
  const scrollToServices = (e) => {
    e.preventDefault();
    document.getElementById("services").scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = (e) => {
    e.preventDefault();
    document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <a href="#services" onClick={scrollToServices}>
              Our Services
            </a>
          </li>
          <li>
            <a href="#contact" onClick={scrollToContact}>
              Contact Us
            </a>
          </li>
        </ul>
        <ul>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/signup">Sign Up</Link>
          </li>
          <li>
            <Clock />
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Header;
