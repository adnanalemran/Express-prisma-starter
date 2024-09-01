import React from "react";
// import bgImage from "@/utils/images/svg/bd.svg"; // Correct import for an image
import ButtonPrimary from "@/components/common/ButtonPrimary";
import useLanguage from "@/hook/useLanguage";
import { homePageLanguage } from "@/app/language/Lan-homepage";
import { GoProjectRoadmap } from "react-icons/go";
import { GrProjects } from "react-icons/gr";
import { SiSemanticweb } from "react-icons/si";
import { RiTeamFill } from "react-icons/ri";

const CommonTab = (props) => {
  const { header, dis, clients, industries, teamMembers, operations,bgImage } = props;
  const len = useLanguage(homePageLanguage);
  const title = len?.tabsSec?.Bangladesh?.title || "";

  return (
    <div
      className="hero  rounded-lg bg-cover bg-center bg-no-repeat  lg:h-[500px]"
      style={{
        backgroundImage: `url(${bgImage.src})`,
      }}
    >
      <div className="hero-content text-neutral-content">
        <div className="text-black   p-6  ">
          <h2 className="text-3xl  ">{header}</h2>
          <p className="lg:py-6"> {dis}</p>
          <div className="flex flex-col md:flex-row md:justify-between ">
            <div className="grid lg:grid-cols-4 grid-cols-2 mt-10  w-full bg-white   rounded-xl p-2">
              <div className="flex flex-col items-center gap-2 ">
                <div className="p-4   bg-primary text-white rounded-full  shadow-2xl ">
                  <GoProjectRoadmap
                    className="
                text-3xl   "
                  />
                </div>

                <p> {clients}</p>
              </div>

              <div className="flex flex-col items-center gap-2 ">
                <div className="p-4   bg-primary text-white rounded-full  shadow-2xl ">
                  <GrProjects
                    className="
                text-3xl   "
                  />
                </div>

                <p> {industries}</p>
              </div>
              <div className="flex flex-col items-center gap-2 ">
                <div className="p-4   bg-primary text-white rounded-full  shadow-2xl ">
                  <RiTeamFill
                    className="
                text-3xl   "
                  />
                </div>

                <p> {teamMembers}</p>
              </div>
              <div className="flex flex-col items-center gap-2 ">
                <div className="p-4   bg-primary text-white rounded-full  shadow-2xl ">
                  <SiSemanticweb
                    className="
                text-3xl   "
                  />
                </div>

                <p> {operations}</p>
              </div>
            </div>
          </div>
          <div className="flex justify-end mt-3">
            <ButtonPrimary text={len?.contactUs} sideLink="/contact" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommonTab;
