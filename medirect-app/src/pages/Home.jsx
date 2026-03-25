import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";

export default function Home() {
 
  const [language, setLanguage] = useState("en");

 
  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "en" ? "ar" : "en"));
  };

 
 useEffect(() => {
  const isArabic = language === "ar";

  document.documentElement.dir = isArabic ? "rtl" : "ltr";
  document.documentElement.lang = language;

  if (isArabic) {
    document.body.classList.add("ar");
  } else {
    document.body.classList.remove("ar");
  }
}, [language]);

  return (
   
    <>
      <Navbar language={language} toggleLanguage={toggleLanguage} />
     
      <Hero language={language} /> 
    </>
  );
}