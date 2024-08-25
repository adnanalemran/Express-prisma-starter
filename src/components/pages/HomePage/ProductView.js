import React from "react";
import heroImage1 from "@/utils/images/large/smartphone-6265047_640.jpg";
import TopServiceCard from "./TopService/TopServiceCard";
import SecTitle from "@/components/common/SecTitle";
import CustomSlider from "./CustomSlider/CustomSlider";
import useLanguage from "@/hook/useLanguage";
import { homePageLanguage } from "@/app/language/Lan-homepage";

const ProductView = () => {
  const len = useLanguage(homePageLanguage);
  return (
    <div>
      <div div className="   container mx-auto text-black ">
        <div className="pt-8">
          <SecTitle
            title={len?.productSec?.title}
            subtitle={len?.productSec?.subtitle}
          />
        </div>
        <div className="pt-10">
          <CustomSlider />
        </div>
      </div>
    </div>
  );
};

export default ProductView;
