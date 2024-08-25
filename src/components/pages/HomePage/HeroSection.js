import React from "react";
import { TypeAnimation } from "react-type-animation";
import heroImage from "@/utils/images/large/pexels-divinetechygirl-1181271.jpg";
import useLanguage from "@/hook/useLanguage";
import { homePageLanguage } from "@/app/language/Lan-homepage";

const HeroSection = () => {
  const lan = useLanguage(homePageLanguage);
  return (
    <div>
      <div
        className="hero min-h-[95vh] "
        style={{
          backgroundImage: `url(${heroImage.src})`,
        }}
      >
        <div className="hero-overlay bg-opacity-70"></div>
        <div className="hero-content  text-white  ">
          <div className=" ">
            <div className="  gap-3  items-center  ">
              <h1 className="text-5xl font-bold mb-22 mt-16">{lan?.ZTLThai}</h1>{" "}
            </div>
            <TypeAnimation
              sequence={[
                ` ${lan?.sub1}`,
                1000,
                ` ${lan?.sub2}`,
                1000,
                ` ${lan?.sub3}`,
                1000,
                ` ${lan?.sub4}`,
                1000,
              ]}
              wrapper="span"
              speed={50}
              style={{ fontSize: "2em", display: "inline-block" }}
              repeat={Infinity}
            />

            <p className="mb-5">{lan?.productSec?.sub1}</p>

            <button className=" bg-white  text-secondary py-2 rounded-full px-4 hover:text-black border-[2px]  ">
              {lan?.getStarted}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
