// "use client";
// import { createContext, useState, useEffect, useContext } from "react";

// export const LanguageContext = createContext();
// export const useLanguageContext = () => useContext(LanguageContext);
// export const LanguageProvider = ({ children }) => {
//   const [language, setLanguage] = useState(() => {
//     const localLanguage = window?.localStorage?.getItem("language");
//     return localLanguage;
//   });

//   useEffect(() => {
//     window?.localStorage?.setItem("language", language);
//   }, [language]);

//   const switchLanguage = (lang) => setLanguage(lang);

//   return (
//     <LanguageContext.Provider value={{ language, switchLanguage }}>
//       {children}
//     </LanguageContext.Provider>
//   );
// };

"use client";
import { createContext, useState, useEffect, useContext } from "react";

export const LanguageContext = createContext();
export const useLanguageContext = () => useContext(LanguageContext);

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => {
    if (typeof window !== "undefined") {
      const localLanguage = window.localStorage.getItem("language");
      return localLanguage || "defaultLanguage"; // Replace "defaultLanguage" with your default language
    }
    return "defaultLanguage"; // Replace "defaultLanguage" with your default language
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
