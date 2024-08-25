"use client";
import useLanguage from "@/hook/useLanguage";
import { homePageLanguage } from "./language/Lan-homepage";

import HeroSection from "@/components/pages/HomePage/HeroSection";

import ProductView from "@/components/pages/HomePage/ProductView";
import OurService from "@/components/pages/HomePage/OurService";
import Tabs from "@/components/pages/HomePage/Tabs";
import StatusFlow from "@/components/pages/HomePage/StatusFlow";
import TrustedSection from "@/components/pages/HomePage/TrustedSection";
import StatusCount from "@/components/pages/HomePage/StatusCount";
import ContactHomeSection from "@/components/pages/HomePage/ContactHomeSection";

export default function Home() {
  const lan = useLanguage(homePageLanguage);

  return (
    <main>
      <HeroSection />
      <ProductView />
      <OurService />
      <Tabs />
      <StatusFlow />
      {/* <OurJourney /> */}
      <TrustedSection />
      <StatusCount />
      <ContactHomeSection />

      {/* <h3 className="text-center my-3">{lan?.name}</h3> */}
    </main>
  );
}
