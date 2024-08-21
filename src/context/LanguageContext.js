"use client";
import { createContext, useState, useEffect, useContext } from "react";

export const LanguageContext = createContext();
export const useLanguageContext = () => useContext(LanguageContext);
export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => {
    return localStorage.getItem("language") || "english";
  });

  useEffect(() => {
    localStorage.setItem("language", language);
  }, [language]);

  const switchLanguage = (lang) => setLanguage(lang);

  return (
    <LanguageContext.Provider value={{ language, switchLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
