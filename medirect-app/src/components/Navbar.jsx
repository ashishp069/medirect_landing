import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getTranslation } from "../arabic";
import MEdirect from "../assets/images/medirectLogo.png";

// 1. Accept language and toggleLanguage as props
export default function Navbar({ language, toggleLanguage }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const t = getTranslation(language);

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
        <a href="#about" onClick={(e) => handleNavClick(e, "about")}>{t.navbar.about}</a>
        <a href="#oursolution" onClick={(e) => handleNavClick(e, "oursolution")}>{t.navbar.solutions}</a>
        <a href="#whychoose" onClick={(e) => handleNavClick(e, "whychoose")}>{t.navbar.whyChoose}</a>
        <a href="#howitwork" onClick={(e) => handleNavClick(e, "howitwork")}>{t.navbar.howItWorks}</a>
        <a href="#benefits" onClick={(e) => handleNavClick(e, "benefits")}>{t.navbar.benefits}</a>

        <button className="close-icon" onClick={toggleMenu}>
          <i className="fa-solid fa-xmark"></i>
        </button>
      </div>

      {/* 2. Attach the toggle function and dynamically change the button text */}
      <div className="d-flex align-items-center  button-header">
        <button
          className="lang-btn background-btn"
          onClick={toggleLanguage}
        >
          {language === "en" ? "عربي" : "English"}
        </button>

        <button
          className={`header-btn button-bg ${isMenuOpen ? "show" : ""}`}
          onClick={() => navigate("/signup")}
        >
          {t.navbar.signup}
        </button>

        <button className="menu-icon" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div >

    </header>

  );
}