import Image from "next/image";
import React from "react";
import image1 from "@/utils/images/svg/Mastercard.svg";

const TrustedSection = () => {
  return (
    <div className="container mx-auto py-16">
      <h2 className="text-4xl font-bold text-center lg:text-left py-8 flex  justify-center text-black">
        Trusted by over 400+ clients served worldwide
      </h2>
      <div className="grid grid-cols-4 justify-center items-center gap-8 px-30 pt-10">
        <div className="flex justify-center items-center">
          <Image
            width={150}
            height={150}
            src={image1}
            alt="client"
            className="h-16"
          />
        </div>{" "}
        <div className="flex justify-center items-center">
          <Image
            width={150}
            height={150}
            src={image1}
            alt="client"
            className="h-16"
          />
        </div>{" "}
        <div className="flex justify-center items-center">
          <Image
            width={150}
            height={150}
            src={image1}
            alt="client"
            className="h-16"
          />
        </div>{" "}
        <div className="flex justify-center items-center">
          <Image
            width={150}
            height={150}
            src={image1}
            alt="client"
            className="h-16"
          />
        </div>{" "}
        <div className="flex justify-center items-center">
          <Image
            width={150}
            height={150}
            src={image1}
            alt="client"
            className="h-16"
          />
        </div>{" "}
        <div className="flex justify-center items-center">
          <Image
            width={150}
            height={150}
            src={image1}
            alt="client"
            className="h-16"
          />
        </div>{" "}
        <div className="flex justify-center items-center">
          <Image
            width={150}
            height={150}
            src={image1}
            alt="client"
            className="h-16"
          />
        </div>{" "}
        <div className="flex justify-center items-center">
          <Image
            width={150}
            height={150}
            src={image1}
            alt="client"
            className="h-16"
          />
        </div>
      </div>
    </div>
  );
};

export default TrustedSection;
