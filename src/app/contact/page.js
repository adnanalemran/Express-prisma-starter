
"use client";
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
      <div>
        <iframe
          className="w-full h-[500px] mt-16 rounded-2xl"
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3875.5837523635823!2d100.5428408!3d13.7436325!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e29f52d9bb06e3%3A0xa8fddc991e17095b!2sZAIMAH%20TECHNOLOGIES%20(THAILAND)%20CO.%2C%20LTD!5e0!3m2!1sen!2sbd!4v1724823238433!5m2!1sen!2sbd"
  
          loading="lazy"
 
        ></iframe>

 
      </div>
    </div>
  );
};

export default page;
