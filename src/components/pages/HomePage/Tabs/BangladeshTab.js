import React from "react";
import bgImage from "@/utils/images/svg/bd.svg"; // Correct import for an image
import ButtonPrimary from "@/components/common/ButtonPrimary";
import useLanguage from "@/hook/useLanguage";
import { homePageLanguage } from "@/app/language/Lan-homepage";

const BangladeshTab = () => {
  const len = useLanguage(homePageLanguage);
  const title = len?.tabsSec?.Bangladesh?.title || "";

  const lastSpaceIndex = title.lastIndexOf(" ");

  const beginning = title.substring(0, lastSpaceIndex);
  const lastWord = title.substring(lastSpaceIndex + 1);

  return (
    <div
      className="hero   rounded-lg bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${bgImage.src})`,
      }}
    >
      <div className="hero-content text-neutral-content">
        <div className="text-black   p-6  ">
          <h2 className="text-3xl  ">
            {beginning} <span className="font-bold">{lastWord}</span>
          </h2>
          <p className="py-6">{len?.tabsSec?.Bangladesh?.subtitle}</p>
          <div className="flex flex-col md:flex-row md:justify-between">
            <div className="py-6 md:w-1/2">
              <p>
                <strong>{len?.tabsSec?.Bangladesh?.Operations}</strong>
              </p>
              <p>
                <strong>{len?.tabsSec?.Bangladesh?.Clients}</strong>
              </p>
              <p>
                <strong>{len?.tabsSec?.Bangladesh?.TeamMembers}</strong>
              </p>
              <p>
                <strong>{len?.tabsSec?.Bangladesh?.Projects}</strong>
              </p>
              <p>
                <strong>{len?.tabsSec?.Bangladesh?.Industries}</strong>
              </p>
              <p>
                <strong>{len?.tabsSec?.Bangladesh?.Years}</strong>
              </p>
            </div>
            <div className="py-6 md:w-1/2">
              <h3 className="text-xl font-semibold">
                {len?.tabsSec?.Bangladesh?.Expertise}
                {len?.contactUs}
              </h3>

              <ul className="list-disc list-inside mt-2">
                {len?.tabsSec?.Bangladesh?.OurExpertise.map(
                  (expertise, index) => (
                    <li key={index}>{expertise}</li>
                  )
                )}
              </ul>
            </div>
          </div>
          <div className="flex justify-end">
            <ButtonPrimary text={len?.contactUs} sideLink="/contact" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BangladeshTab;
