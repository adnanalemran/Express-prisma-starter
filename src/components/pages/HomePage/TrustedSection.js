import Image from "next/image";
import React from "react";

import image1 from "@/utils/images/logo/4x/Asset 11@4x.png";
import image2 from "@/utils/images/logo/4x/Asset @4x.png";
import image3 from "@/utils/images/logo/4x/Asset 2@4x.png";
import image4 from "@/utils/images/logo/4x/Asset 3@4x.png";
import image5 from "@/utils/images/logo/4x/Asset 4@4x.png";
import image6 from "@/utils/images/logo/4x/Asset 5@4x.png";
import image7 from "@/utils/images/logo/4x/Asset 6@4x.png";
import image8 from "@/utils/images/logo/4x/Asset 7@4x.png";
import image9 from "@/utils/images/logo/4x/Asset 8@4x.png";
import image10 from "@/utils/images/logo/4x/Asset 9@4x.png";
import image11 from "@/utils/images/logo/4x/Asset 10@4x.png";
import image12 from "@/utils/images/logo/4x/Asset 12@4x.png";
import SecTitle from "@/components/common/SecTitle";
import { homePageLanguage } from "@/app/language/Lan-homepage";
import useLanguage from "@/hook/useLanguage";

const TrustedSection = () => {
  const lan = useLanguage(homePageLanguage);
  return (
    <div className="  mx-auto py-8    lg:mx-8 ">
      <SecTitle title={lan?.clientsSec?.title} />
      <div
        className="grid 
      grid-cols-2 md:grid-cols-3
      lg:grid-cols-4  items-center   lg:px-32  justify-between gap-8 lg:gap-10 py-20"
      >
        <div className="flex justify-center items-center">
          <Image width={65} height={70} src={image11} alt="client" />
        </div>
        <div className="flex justify-center items-center">
          <Image width={80} height={80} src={image12} alt="client" />
        </div>
        <div className="flex justify-center items-center">
          <Image width={110} height={80} src={image2} alt="client" />
        </div>
        <div className="flex justify-center items-center">
          <Image width={80} height={80} src={image3} alt="client" />
        </div>
        <div className="flex justify-center items-center">
          <Image width={80} height={80} src={image4} alt="client" />
        </div>
        <div className="flex justify-center items-center">
          <Image width={130} height={80} src={image5} alt="client" />
        </div>
        <div className="flex justify-center items-center">
          <Image width={80} height={80} src={image6} alt="client" />
        </div>
        <div className="flex justify-center items-center">
          <Image width={80} height={80} src={image7} alt="client" />
        </div>
        <div className="flex justify-center items-center">
          <Image width={70} height={70} src={image8} alt="client" />
        </div>
        <div className="flex justify-center items-center">
          <Image width={120} height={80} src={image9} alt="client" />
        </div>
        <div className="flex justify-center items-center">
          <Image width={80} height={80} src={image10} alt="client" />
        </div>
        <div className="flex justify-center items-center">
          <Image width={80} height={80} src={image1} alt="client" />
        </div>
      </div>
    </div>
  );
};

export default TrustedSection;
