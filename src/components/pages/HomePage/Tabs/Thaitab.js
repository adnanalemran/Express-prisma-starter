import React from "react";
import bgImage from "@/utils/images/svg/th.svg"; // Correct import for an image
import ButtonPrimary from "@/components/common/ButtonPrimary";
import { GoProjectRoadmap } from "react-icons/go";
import { GrProjects } from "react-icons/gr";
import { RiTeamFill } from "react-icons/ri";
import { SiSemanticweb } from "react-icons/si";
const Thaitab = () => {
  return (
    <div
      className="hero  rounded-lg bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${bgImage.src})`,
      }}
    >
      <div className="hero-content text-neutral-content">
        <div className="text-black   p-6  ">
          <h2 className="text-3xl font-bold">
            ZTL - Branch Office in <span className="font-bold">Thailand</span>
          </h2>
          <p className="py-6">
            Our Thailand branch is dedicated to expanding our presence in
            Southeast Asia. We focus on delivering high-quality IT solutions and
            fostering strong partnerships in the region. Our local expertise and
            global vision enable us to address the unique challenges and
            opportunities within the Thai market.
          </p>
          <div className="flex flex-col md:flex-row md:justify-between min-h-[200px]">
            <div className="grid lg:grid-cols-4 grid-cols-2 mt-10  w-full bg-white rounded-xl p-2">
              <div className="flex flex-col items-center gap-2 ">
                <div className="p-4   bg-primary text-white rounded-full  shadow-2xl ">
                  <GoProjectRoadmap
                    className="
                text-3xl   "
                  />
                </div>

                <p> 50+ Clients</p>
              </div>

              <div className="flex flex-col items-center gap-2 ">
                <div className="p-4   bg-primary text-white rounded-full  shadow-2xl ">
                  <GrProjects
                    className="
                text-3xl   "
                  />
                </div>

                <p> 20+ Industries Served</p>
              </div>
              <div className="flex flex-col items-center gap-2 ">
                <div className="p-4   bg-primary text-white rounded-full  shadow-2xl ">
                  <RiTeamFill
                    className="
                text-3xl   "
                  />
                </div>

                <p> 10+ Members </p>
              </div>
              <div className="flex flex-col items-center gap-2 ">
                <div className="p-4   bg-primary text-white rounded-full  shadow-2xl ">
                  <SiSemanticweb
                    className="
                text-3xl   "
                  />
                </div>

                <p> 100+ Operations</p>
              </div>
            </div>
          </div>
          <div className="flex justify-end">
            <ButtonPrimary text="Contact Us" sideLink="/" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Thaitab;
