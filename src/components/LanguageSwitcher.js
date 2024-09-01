"use client";
import { useState } from "react";
import { useLanguageContext } from "@/context/LanguageContext";
import thaiFlag from "@/utils/images/svg/thaiflag.svg";
import ukFlag from "@/utils/images/svg/ukFlag.svg";
import { TiLocationOutline } from "react-icons/ti";

const flagMap = {
  thai: thaiFlag,
  english: ukFlag,
};

export function LanguageSwitcher() {
  const { language, switchLanguage } = useLanguageContext();
  const [isOpen, setIsOpen] = useState(false);

  const handleLanguageChange = (lang) => {
    switchLanguage(lang);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <div
        className="flex items-center gap-0 cursor-pointer p-2  bg-neutral-100 border-gray-300 rounded-full "
        onClick={() => setIsOpen(!isOpen)}
      >
        <TiLocationOutline className="text-xl mr-1" />

        {language === "thai" ? (
          <div className="w-16 flex gap-2 flex-row-reverse items-center">
            ไทย
            <img src={flagMap["thai"].src} alt="Thai Flag" className="h-4" />
          </div>
        ) : (
          <div className="w-22 flex gap-2 flex-row-reverse items-center">
            English{" "}
            <img
              src={flagMap["english"].src}
              alt="UK Flag"
              className="w-12 h-4"
            />
          </div>
        )}
      </div>
      {isOpen && (
        <div className="absolute top-full mt-2   bg-neutral-100   rounded-lg shadow-lg z-10 w-24">
          <div
            className="flex  items-center gap-1 p-2 cursor-pointer hover:bg-gray-200"
            onClick={() => handleLanguageChange("thai")}
          >
            <img
              src={flagMap["thai"].src}
              alt="Thai Flag"
              className="w-7 h-4"
            />{" "}
            ไทย{" "}
          </div>
          <div
            className="flex items-center gap-1 p-2 cursor-pointer hover:bg-gray-200"
            onClick={() => handleLanguageChange("english")}
          >
            {" "}
            <img
              src={flagMap["english"].src}
              alt="UK Flag"
              className="w-7 h-4"
            />
            English{" "}
          </div>
        </div>
      )}
    </div>
  );
}
