import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import { getCmsList } from "../api/cmsApi";

export default function Home() {

  const [cmsData, setCmsData] = useState(null);

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "en" ? "ar" : "en"));
  };

  const [language, setLanguage] = useState(() => {
    return localStorage.getItem("lang") || "en";
  });

  useEffect(() => {
  localStorage.setItem("lang", language);
}, [language]);

  
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

  
  useEffect(() => {
    const fetchCms = async () => {
      try {
        const data = await getCmsList(language); // ar langauage
        setCmsData(data.response);;
      } catch (error) {
        console.error(error);
      }
    };

    fetchCms();
  }, [language]);

  return (
    <>
      <Navbar language={language} toggleLanguage={toggleLanguage} />
      <Hero language={language} cmsData={cmsData} />
    </>
  );
}