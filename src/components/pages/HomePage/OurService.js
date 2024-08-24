import React from "react";
import bgImage from "@/utils/images/svg/layered-waves-haikei.svg"; // Correct import for an image
import ServiceItem from "./Service/ServiceItem";

const OurService = () => {
  return (
    <>
      <div
        className="hero min-h-[80vh] -mt-48 "
        style={{
          backgroundImage: `url(${bgImage.src})`,
        }}
      >
        {/* <div className="hero-overlay bg-opacity-60"></div> */}
        <div className="hero-content text-neutral-content text-center  ">
          <h2 className=" mt-16 text-4xl font-bold text-center       text-black">
            Introduce our top notch service
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
