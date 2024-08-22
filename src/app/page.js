"use client";
import useLanguage from "@/hook/useLanguage";
import { homePageLanguage } from "./language/Lan-homepage";

import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import HeroSection from "@/components/pages/HomePage/HeroSection";
import TopServiceCard from "@/components/pages/HomePage/TopService/TopServiceCard";
import ProductView from "@/components/pages/HomePage/ProductView";
import OurService from "@/components/pages/HomePage/OurService";
import Tabs from "@/components/pages/HomePage/Tabs";

export default function Home() {
  const lan = useLanguage(homePageLanguage);
  // console.log(lan);
  return (
    <main>
      <HeroSection />
      <ProductView />
      <OurService />
      <Tabs />
      <h3 className="text-center my-3">{lan?.name}</h3>
    </main>
  );
}
