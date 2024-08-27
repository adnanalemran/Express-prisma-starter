import React from "react";
 
import flowImage from "@/utils/images/svg/flow.webp";

const StatusFlow = () => {
  return (
    <div className="hero    rounded-lg bg-contain  bg-center bg-no-repeat">
      <div>
        <img
          src={flowImage.src}
          alt="flow"
          className="container mx-auto  w-full lg:h-[100vh] mt-50 lg:mt-0"
        />
      </div>
    </div>
  );
};

export default StatusFlow;
