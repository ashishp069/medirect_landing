import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

// Use master.css to match the HTML template styles
// import "../styles/master.css"; 
import MEdirect from "../assets/images/medirectLogo.png";

// 1. Accept language and toggleLanguage as props
export default function Navbar({ language, toggleLanguage }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }

    if (window.innerWidth <= 991) {
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="container-fluid d-flex align-items-center justify-content-between header">
      
      <Link to="/" className="logo">
        <img src={MEdirect} alt="Medirect logo" />
      </Link>

      <div className={`d-flex align-items-center header-center ${isMenuOpen ? "show" : ""}`}>
        {/* Note: You will eventually want to translate these hardcoded nav links too! */}
        <a href="#about" onClick={(e) => handleNavClick(e, "about")}>About</a>
        <a href="#oursolution" onClick={(e) => handleNavClick(e, "oursolution")}>Our solutions</a>
        <a href="#whychoose" onClick={(e) => handleNavClick(e, "whychoose")}>Why choose us</a>
        <a href="#howitwork" onClick={(e) => handleNavClick(e, "howitwork")}>How it works</a>
        <a href="#benefits" onClick={(e) => handleNavClick(e, "benefits")}>Benefits</a>
        
        <button className="close-icon" onClick={toggleMenu}>
          <i className="fa fa-times"></i>
        </button>
      </div>

      {/* 2. Attach the toggle function and dynamically change the button text */}
      <button 
        className="btn border-btn" 
        onClick={toggleLanguage}
      >
        {language === "عربي" ? "en" : "English"}
      </button>

      <button 
        className={`header-btn button-bg ${isMenuOpen ? "show" : ""}`}
        onClick={() => navigate("/signup")}
      >
        Sign up for free
      </button>

      <button className="menu-icon" onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </button>

    </header>
  );
}