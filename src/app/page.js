"use client";
import useLanguage from "@/hook/useLanguage";
import { homePageLanguage } from "./language/Lan-homepage";

import { LanguageSwitcher } from "@/components/LanguageSwitcher";

export default function Home() {
  const lan = useLanguage(homePageLanguage);
  // console.log(lan);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between  ">
      <h1 className="text-4xl font-bold">homepage</h1>

      <h3 className="text-center my-3">{lan?.name}</h3>
      <LanguageSwitcher />
    </main>
  );
}
