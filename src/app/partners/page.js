"use client";
import React from "react";
import ItemsPartners from "./ItemsPartners";
import SecTitle from "@/components/common/SecTitle";
import useLanguage from "@/hook/useLanguage";
import { LanPartners } from "../language/Lan-partners";

const Page = () => {
  const lan = useLanguage(LanPartners);

  return (
    <div className="bg-gray-100 lg:mx-18">
      <div>
        <SecTitle title={lan?.title} subtitle="" />
        <p className="lg:mx-0 mx-3 pb-8">{lan?.subtitle}</p>
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

        <h2 className="text-xl py-2">{lan?.Key.title}</h2>

        <div className="relative lg:flex gap-5 sm:grid-cols-2 lg:grid-cols-4">
          <ItemsPartners
            title={lan?.Key.key1.title}
            description={lan?.Key.key1.dis}
          />
          <ItemsPartners
            title={lan?.Key.key2.title}
            description={lan?.Key.key2.dis}
          />
          <ItemsPartners
            title={lan?.Key.key3.title}
            description={lan?.Key.key3.dis}
          />
          <ItemsPartners
            title={lan?.Key.key4.title}
            description={lan?.Key.key4.dis}
          />
        </div>
      </div>
    </div>
  );
};

export default Page;
