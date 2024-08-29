import Link from "next/link";
import React from "react";

const UniversalPage = ({
  title,
  description,
  imageTop,
  imageCenter,
  features,
  title2,
}) => {
  return (
    <div className="lg:pt-1 ">
      <div className="flex flex-col-reverse lg:flex-row gap-8 container mx-auto py-16 lg:pb-16 px-4">
        <div className="lg:w-4/6">
          <p className="text-[#EF971D] font-bold text-sm py-4">SOLUTIONS</p>
          <h1 className="text-5xl font-bold">{title}</h1>
          <p className="py-4">{description}</p>

          <div className="flex gap-2 py-7 px-1 ">
            <Link
              href="/demo"
              className="font-light rounded px-3 py-2 bg-[#035E7B]  hover:bg-gradient-to-r hover:from-[#035E7B] hover:to-[#094364] text-white hover:ring-2 hover:ring-offset-2 hover:ring-[#035E7B] "
            >
              <span className="capitalize text-sm font-semibold">
                Demo request
              </span>
            </Link>
            <Link
              href="/contact"
              className="font-light rounded px-3 py-2 bg-base-300  hover:bg-gradient-to-r hover:from-[#d4f4ff] hover:to-[#d7f0ff]   hover:ring-2 hover:ring-offset-2 hover:ring-[#d6f5ff] "
            >
              <span className="capitalize text-sm font-semibold">see more</span>
            </Link>
          </div>
        </div>
        <div className="w-4/6 flex justify-center">
          <img className="rounded-xl   w-96" src={imageTop} alt="" />
        </div>
      </div>

      <div className="bg-base-300 py-4">
        <div className="container mx-auto px-4">
          <div className="py-8 lg:pt-20">
            <h2 className="text-4xl font-bold text-center lg:px-12">
              {title2}
            </h2>

            <div className="flex flex-col lg:flex-row gap-8 py-16 items-center">
              <div className="lg:w-5/12 flex  justify-center items-center">
                <img
                  className="rounded-xl lg:p-8 px-32 "
                  src={imageCenter?.src}
                  alt=""
                />
              </div>

              <div className="lg:w-7/12   justify-center">
                <div className="flex flex-col gap-4">
                  {features.map((feature, index) => (
                    <div
                      key={index}
                      className="    justify-center items-center"
                    >
                      <h1 className="text-lg font-bold">{feature.title}</h1>
                      <p className="py-2 text-neutral-500 text-sm">
                        {feature.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="  ">{/* <FAQs /> */}</div>
    </div>
  );
};

export default UniversalPage;
