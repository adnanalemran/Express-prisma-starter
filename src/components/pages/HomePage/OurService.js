import React from "react";
import bgImage from "@/utils/images/svg/layered-waves-haikei.svg"; // Correct import for an image
import ServiceItem from "./Service/ServiceItem";
import SecTitle from "@/components/common/SecTitle";
import useLanguage from "@/hook/useLanguage";
import { homePageLanguage } from "@/app/language/Lan-homepage";

const OurService = () => {
  const len = useLanguage(homePageLanguage);
  return (
    <>
      <div
        className="hero min-h-[80vh] -mt-48 "
        style={{
          backgroundImage: `url(${bgImage.src})`,
        }}
      >
        {/* <div className="hero-overlay bg-opacity-60"></div> */}
        <div className="hero-content    w-full flex justify-start  ">
          <h2 className=" mt-16 text-4xl font-bold text-        text-black">
            <SecTitle
              title={len?.serviceSec?.title}
              subtitle={len?.serviceSec?.subtitle}
            />
          </h2>
        </div>
      </div>

      <div className="pt-16 pb-8   text-black bg-[#FFB49A] ">
        <div className="container mx-auto min-h-100">
          <ServiceItem />
        </div>
      </div>
    </>
  );
};

export default OurService;
