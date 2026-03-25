import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";

export default function Home() {
 
  const [language, setLanguage] = useState("en");

 
  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "en" ? "ar" : "en"));
  };

 
  useEffect(() => {
    document.documentElement.dir = language === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = language;
  }, [language]);

  return (
   
    <>
      <Navbar language={language} toggleLanguage={toggleLanguage} />
     
      <Hero language={language} /> 
    </>
  );
}