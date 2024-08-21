import { useLanguageContext } from "@/context/LanguageContext";

export function LanguageSwitcher() {
  const { switchLanguage } = useLanguageContext();

  return (
    <div>
      <button onClick={() => switchLanguage("english")}>English</button>
      <button onClick={() => switchLanguage("thai")}>Thai</button>
    </div>
  );
}
