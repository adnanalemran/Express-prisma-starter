import React from "react";
import Image from "next/image";
import flowImage from "@/utils/images/svg/flow.svg";

const StatusFlow = () => {
  return (
    <div className="hero    rounded-lg bg-contain  bg-center bg-no-repeat">
      <div>
        <img
          src={flowImage.src}
          alt="flow"
          className="container mx-auto  w-full h-[100vh]"
        />
      </div>
    </div>
  );
};

export default StatusFlow;
