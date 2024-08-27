import ContentFrom from "@/components/pages/Contact/ContentFrom";
import ContentSide from "@/components/pages/Contact/ContentSide";
import React from "react";

const page = () => {
  return (
    <div className="min-h-[100vh] container mx-auto lg:px-16">
      <div className="flex flex-col lg:flex-row pt-16 g">
        <div className="lg:w-1/2 w-full  ">
          <ContentSide />
        </div>
        <div className="lg:w-1/2 w-full  ">
          <ContentFrom />
        </div>
      </div>
    </div>
  );
};

export default page;
