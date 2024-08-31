import React from "react";
import bgImage from "@/utils/images/svg/bd.svg"; // Correct import for an image
import ButtonPrimary from "@/components/common/ButtonPrimary";
import useLanguage from "@/hook/useLanguage";
import { homePageLanguage } from "@/app/language/Lan-homepage";
import { GoProjectRoadmap } from "react-icons/go";
import { GrProjects } from "react-icons/gr";
import { FcBusinessman } from "react-icons/fc";
import { SiSemanticweb } from "react-icons/si";
import { RiTeamFill } from "react-icons/ri";

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
          <div className="flex flex-col md:flex-row md:justify-between min-h-[200px]">
            <div className="grid lg:grid-cols-4 grid-cols-2 mt-10  w-full bg-white rounded-xl p-2">
              <div className="flex flex-col items-center gap-2 ">
                <div className="p-4   bg-primary text-white rounded-full  shadow-2xl ">
                  <GoProjectRoadmap
                    className="
                text-3xl   "
                  />
                </div>

                <p> 100+ Clients</p>
              </div>

              <div className="flex flex-col items-center gap-2 ">
                <div className="p-4   bg-primary text-white rounded-full  shadow-2xl ">
                  <GrProjects
                    className="
                text-3xl   "
                  />
                </div>

                <p> 30+ Industries Served</p>
              </div>
              <div className="flex flex-col items-center gap-2 ">
                <div className="p-4   bg-primary text-white rounded-full  shadow-2xl ">
                  <RiTeamFill
                    className="
                text-3xl   "
                  />
                </div>

                <p> 20+ Members </p>
              </div>
              <div className="flex flex-col items-center gap-2 ">
                <div className="p-4   bg-primary text-white rounded-full  shadow-2xl ">
                  <SiSemanticweb
                    className="
                text-3xl   "
                  />
                </div>

                <p> 600+ Operations</p>
              </div>
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
