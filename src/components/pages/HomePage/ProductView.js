import React from "react";
import heroImage1 from "@/utils/images/large/smartphone-6265047_640.jpg";
import TopServiceCard from "./TopService/TopServiceCard";

const ProductView = () => {
  console.log("heroImage1", heroImage1);
  return (
    <div>
      <div className="pt-16 pb-8 container mx-auto text-black ">
        <h2 className="text-4xl font-bold text-center lg:text-left py-8 flex  justify-center">
          Introduce our top notch product
        </h2>

        <div className="px-4">
          <div className="  pt-8 flex flex-col lg:flex-row justify-start items-center lg-flex-row gap-2 lg:gap-4   ">
            <TopServiceCard
              LargeText="HR bee"
              Subtext="  HR bee is a human resource management system  to manage your company. "
              bgImage={heroImage1}
              urlLink="/"
            />{" "}
            <TopServiceCard
              LargeText="Apart Pro"
              Subtext=" Use Apart Pro management system that you need to manage your property.  "
              bgImage={heroImage1}
              urlLink="/"
            />{" "}
            <TopServiceCard
              LargeText="School Pro"
              Subtext=" School Pro is a school management system that you need to manage your school. "
              bgImage={heroImage1}
              urlLink="/"
            />{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductView;
