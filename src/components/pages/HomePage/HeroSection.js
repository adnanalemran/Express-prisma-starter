import React from "react";
import { TypeAnimation } from "react-type-animation";
import heroImage from "@/utils/images/large/pexels-divinetechygirl-1181271.jpg";
const HeroSection = () => {
  return (
    <div>
      <div
        className="hero min-h-[95vh] "
        style={{
          backgroundImage: `url(${heroImage.src})`,
        }}
      >
        <div className="hero-overlay bg-opacity-70"></div>
        <div className="hero-content  text-white  ">
          <div className=" ">
            <div className="  gap-3  items-center  ">
              <h1 className="text-5xl font-bold mb-22 mt-16">
                Zaimah Technologies Limited (Thai)
              </h1>{" "}
            </div>
            <TypeAnimation
              sequence={[
                "Empowering Businesses Through Technology",
                1000,
                "Innovating Digital Solutions for Growth",
                1000,
                "Transforming Ideas into Reality",
                1000,
                "Delivering Excellence in Every Project",
                1000,
              ]}
              wrapper="span"
              speed={50}
              style={{ fontSize: "2em", display: "inline-block" }}
              repeat={Infinity}
            />

            <p className="mb-5">
              We involves leveraging various digital tools, platforms, and
              strategies to enhance efficiency, productivity, innovation, and
              overall competitiveness.
            </p>

            <button className=" bg-white  text-secondary py-2 rounded-full px-4 hover:text-black border-[2px]  ">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
