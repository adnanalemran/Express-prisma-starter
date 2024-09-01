import ButtonPrimary from "@/components/common/ButtonPrimary";
import Link from "next/link";
import React from "react";

const WebItems = (props) => {
  const { BgImage, title, siteLink } = props;
  return (
    <div>
      <div
        className="hero min-h-[70vh] rounded-xl"
        style={{
          backgroundImage: `url(${BgImage})`,
        }}
      >
        <div className="hero-overlay bg-opacity-70 rounded-xl"></div>
        <div className="hero-content text-white text-center">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">{title}</h1>
            <p className="mb-5">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <Link href={siteLink}>
              <ButtonPrimary text="Get Started" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebItems;
