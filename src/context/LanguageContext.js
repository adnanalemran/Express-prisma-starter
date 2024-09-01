"use client";
import React, { createContext, useState, useEffect, useContext } from "react";

export const LanguageContext = createContext();
export const useLanguageContext = () => useContext(LanguageContext);
export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => {
    
    if (typeof window !== "undefined") {
      return window.localStorage.getItem("language") || "thai";  
    }
    return "thai"; 
  });

  useEffect(() => {
    
    if (typeof window !== "undefined") {
      window.localStorage.setItem("language", language);
    }
  }, [language]);

  const switchLanguage = (lang) => setLanguage(lang);

  return (
    <LanguageContext.Provider value={{ language, switchLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
