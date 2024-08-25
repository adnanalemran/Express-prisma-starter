import ButtonPrimary from "@/components/common/ButtonPrimary";
import React from "react";

const ContactHomeSection = () => {
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
              Start a Conversation
            </h1>
            <p className="mb-5">
              Connect with our specialists to develop innovative strategies for
              your digital products and drive real business value.
            </p>
            <ButtonPrimary text="Contact Us" sideLink="/" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactHomeSection;
