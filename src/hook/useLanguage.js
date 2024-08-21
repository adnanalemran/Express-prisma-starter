import { useLanguageContext } from "@/context/LanguageContext";
export default function useLanguage(langData) {
  const { language } = useLanguageContext();
  const lang = langData[language];
  return lang;
}
