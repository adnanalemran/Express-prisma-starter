import { useLanguageContext } from "@/context/LanguageContext";

export function LanguageSwitcher() {
  const { switchLanguage } = useLanguageContext();

  const handleChange = (event) => {
    switchLanguage(event.target.value);
  };

  return (
    <select className="flex gap-2" onChange={handleChange}>
      <option value="english">English</option>
      <option value="thai">ไทย</option>
    </select>
  );
}
