import React from "react";
import ItemsPartners from "./ItemsPartners";
import SecTitle from "@/components/common/SecTitle";

const page = () => {
  return (
    <div className="bg-gray-100    lg:mx-18 ">
      <div className="   ">
        <SecTitle title="       Our Partners " subtitle="" />
        <p className="lg:mx-0 mx-3  pb-8">
          At Zaimah Technologies (Thailand) Co., Ltd, we are proud to
          collaborate with a diverse network of partners who share our
          commitment to innovation, excellence, and customer satisfaction. Our
          partnerships are a testament to our dedication to delivering the best
          possible solutions for our clients.
        </p>
      </div>
      <div className="relative px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="absolute inset-x-0 top-0 items-center justify-center hidden overflow-hidden md:flex md:inset-y-0">
          <svg
            viewBox="0 0 88 88"
            className="w-full max-w-screen-xl text-indigo-100"
          >
            <circle fill="currentColor" cx="44" cy="44" r="15.5" />
            <circle
              fillOpacity="0.2"
              fill="currentColor"
              cx="44"
              cy="44"
              r="44"
            />
            <circle
              fillOpacity="0.2"
              fill="currentColor"
              cx="44"
              cy="44"
              r="37.5"
            />
            <circle
              fillOpacity="0.3"
              fill="currentColor"
              cx="44"
              cy="44"
              r="29.5"
            />
            <circle
              fillOpacity="0.3"
              fill="currentColor"
              cx="44"
              cy="44"
              r="22.5"
            />
          </svg>
        </div>

        <h2 className="text-xl py-2">Key Partnerships:</h2>

        <div className="relative lg:flex gap-5 sm:grid-cols-2 lg:grid-cols-4">
          <ItemsPartners
            title="Technology Partners"
            description="We work with leading technology providers to integrate the latest tools and platforms into our solutions, ensuring our clients have access to cutting-edge technologies. "
          />
          <ItemsPartners
            title="Industry Collaborations"
            description="Our collaborations with industry leaders across various sectors help us stay ahead of market trends and deliver solutions that are relevant and effective. "
          />
          <ItemsPartners
            title="Strategic Alliances:"
            description="By forming strategic alliances with other businesses, we enhance our service offerings and deliver comprehensive solutions that meet the evolving needs of our clients. "
          />{" "}
          <ItemsPartners
            title="Global Network"
            description="Our global partnerships allow us to extend our reach and offer our services to clients around the world, bringing international expertise to local markets."
          />
        </div>
      </div>
    </div>
  );
};

export default page;
