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
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3652.7572450240696!2d90.38719027432504!3d23.720361489930752!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b94c5defd7db%3A0xfbe3840598158ab6!2sZaimah%20Technologies%20Limited!5e0!3m2!1sen!2sbd!4v1724743454019!5m2!1sen!2sbd"
  
          loading="lazy"
 
        ></iframe>
      </div>
    </div>
  );
};

export default page;
