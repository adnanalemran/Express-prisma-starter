import React from "react";
import bgImage from "@/utils/images/svg/th.svg"; /// Correct import for an image
import ButtonPrimary from "@/components/common/ButtonPrimary";
import { GoProjectRoadmap } from "react-icons/go";
import { GrProjects } from "react-icons/gr";
import { RiTeamFill } from "react-icons/ri";
import { SiSemanticweb } from "react-icons/si";

const UKtab = () => {
  return (
    <div
      className="hero   rounded-lg bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${bgImage.src})`,
      }}
    >
      <div className="hero-content text-neutral-content">
        <div className="text-black   p-6  ">
          <h2 className="text-3xl font-bold">
            ZTL - Partner Office in <span className="font-bold">UK</span>
          </h2>
          <p className="py-6">
            Our partner office in UK plays a crucial role in extending our
            reach and capabilities across Southeast Asia. By collaborating with
            local experts, we ensure that our clients receive tailored solutions
            that address their specific needs while leveraging our global
            expertise.
          </p>
          <div className="flex flex-col md:flex-row md:justify-between min-h-[200px]">
            <div className="grid grid-cols-4 mt-10  w-full">
              <div className="flex flex-col items-center gap-2 ">
                <div className="p-4   bg-primary text-white rounded-full  shadow-2xl ">
                  <GoProjectRoadmap
                    className="
                text-3xl   "
                  />
                </div>

                <p> 70+ Clients</p>
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

                <p> 120+ Operations</p>
              </div>
            </div>
          </div>
          <ButtonPrimary text="Contact Us" sideLink="/" />
        </div>
      </div>
    </div>
  );
};

 


export default UKtab;