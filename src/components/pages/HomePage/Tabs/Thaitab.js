import React from "react";
import bgImage from "@/utils/images/svg/th.svg"; // Correct import for an image
import ButtonPrimary from "@/components/common/ButtonPrimary";
const Thaitab = () => {
  return (
    <div
      className="hero h-115 rounded-lg bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${bgImage.src})`,
      }}
    >
      <div className="hero-content text-neutral-content text-center">
        <div className="  text-black">
          <h2 className="text-2xl">
            Branch office <span className="font-bold">thailand</span>
          </h2>
          <p className="mb-5">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <ButtonPrimary text="Get Started" sideLink="/" />
        </div>
      </div>
    </div>
  );
};

export default Thaitab;
