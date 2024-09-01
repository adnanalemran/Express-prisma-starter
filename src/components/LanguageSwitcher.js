"use client";
import { useLanguageContext } from "@/context/LanguageContext";

export function LanguageSwitcher() {
  const { language, switchLanguage } = useLanguageContext();

  const handleChange = (event) => {
    switchLanguage(event.target.value);
  };

  return (
    <select className="flex gap-2" value={language} onChange={handleChange}>
      <option value="thai">ไทย</option>
      <option value="english">English</option>
    </select>
  );
}
