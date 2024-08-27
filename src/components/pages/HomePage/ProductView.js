import React from "react";

import SecTitle from "@/components/common/SecTitle";
import CustomSlider from "./CustomSlider/CustomSlider";
import useLanguage from "@/hook/useLanguage";
import { homePageLanguage } from "@/app/language/Lan-homepage";

const ProductView = () => {
  const len = useLanguage(homePageLanguage);
  return (
    <div className="lg:flex hidden mt-10">
      <div div className=" container mx-auto text-black ">
        <div className="pt-8 lg:py-0 mb-200  ">
          <SecTitle
            title={len?.productSec?.title}
            subtitle={len?.productSec?.subtitle}
          />
        </div>
        <div className="pt-10 "><CustomSlider /></div>
      </div>
    </div>
  );
};

export default ProductView;
