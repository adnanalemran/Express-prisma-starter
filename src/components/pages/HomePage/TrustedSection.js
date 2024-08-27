import Image from "next/image";
import React from "react";
import image1 from "@/utils/images/svg/Mastercard.svg";
import SecTitle from "@/components/common/SecTitle";

const TrustedSection = () => {
  return (
    <div className="  mx-auto py-8 pb-16  lg:mx-8 ">
      <SecTitle title="Trusted by over 400+ clients Zaimah Tech.  worldwide" />
      <div
        className="grid 
      grid-cols-2 md:grid-cols-3
      lg:grid-cols-4 justify-center items-center lg:gap-6 lg:px-36 pt-10"
      >
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
