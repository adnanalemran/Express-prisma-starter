import React from "react";
import bgImage from "@/utils/images/svg/layered-waves-haikei.svg";
import ServiceItem from "./Service/ServiceItem";
import SecTitle from "@/components/common/SecTitle";
import useLanguage from "@/hook/useLanguage";
import { homePageLanguage } from "@/app/language/Lan-homepage";

const OurService = () => {
  const len = useLanguage(homePageLanguage);
  return (
    <>
      <div
        className="hero min-h-[90vh] lg:-mt-48  -mt-80"
        style={{
          backgroundImage: `url(${bgImage.src})`,
        }}
      >
        <div className=" container    w-full flex justify-start  ">
          <h2 className=" mt-16 lg:mx-8    text-black">
            <SecTitle
              title={len?.serviceSec?.title}
              subtitle={len?.serviceSec?.subtitle}
            />
          </h2>
        </div>
      </div>

      <div className="lg:pt-16 pb-8   text-black bg-[#FFB49A] ">
        <div className="container mx-auto min-h-100 ">
          <ServiceItem />
        </div>
      </div>
    </>
  );
};

export default OurService;
