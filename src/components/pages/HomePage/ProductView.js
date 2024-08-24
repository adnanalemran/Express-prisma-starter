import React from "react";
import heroImage1 from "@/utils/images/large/smartphone-6265047_640.jpg";
import TopServiceCard from "./TopService/TopServiceCard";
import SecTitle from "@/components/common/SecTitle";
import CustomSlider from "./CustomSlider/CustomSlider";

const ProductView = () => {
  return (
    <div>
      <div className="   container mx-auto text-black ">
        <div className="pt-8">
          <SecTitle title=" How we bring tangible business results  " />
          <h3 className="text-xl ">our top notch product</h3>{" "}
        </div>
        <div className="pt-10">
          <CustomSlider />
        </div>
      </div>
    </div>
  );
};

export default ProductView;
