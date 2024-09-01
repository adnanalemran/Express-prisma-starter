import { homePageLanguage } from "@/app/language/Lan-homepage";
import ButtonPrimary from "@/components/common/ButtonPrimary";
import useLanguage from "@/hook/useLanguage";
import React from "react";

const ContactHomeSection = () => {
  const lan = useLanguage(homePageLanguage)
  return (
    <div>
      <div
        className="hero lg:min-h-[80vh] min-h-[50vh]"
        style={{
          backgroundImage:
            "url(https://media.licdn.com/dms/image/C5612AQGs17nRnbH7VQ/article-cover_image-shrink_720_1280/0/1598336384122?e=2147483647&v=beta&t=ikKw2uWAQeUUGzgwLU2n_HLATUWi0E2i_-EQS-vbwqg)",
        }}
      >
        <div className="hero-overlay bg-opacity-60   "></div>
        <div className="hero-content text-white text-center">
          <div className=" ">
            <h1 className="mb-5 lg:text-5xl text-3xl  font-bold">
            {lan.contactSec.title}
            </h1>
            <p className="mb-5">
              {lan?.contactSec?.subtitle}
            </p>
            <ButtonPrimary text={lan?.contactSec?.button}sideLink="/contact" />
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactHomeSection;
