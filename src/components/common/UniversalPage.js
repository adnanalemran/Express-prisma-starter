import Link from "next/link";
import React from "react";
import "./style.css";
const UniversalPage = ({
  title,
  description,
  imageTop,
  imageCenter,
  features,
  title2,
}) => {
  return (
    <div className="lg:pt-1">
      <div className="container mx-auto py-16 px-4 lg:pb-16 flex flex-col-reverse lg:flex-row gap-8">
        <div className="lg:w-2/3 flex flex-col justify-center">
          <p className="text-primary font-bold text-sm pb-4">SOLUTIONS</p>
          <h1 className="text-5xl font-bold leading-tight">{title}</h1>
          <p className="py-4 text-lg text-neutral-600">{description}</p>

          <div className="flex gap-4 mt-7">
            <Link
              href="/contact"
              className=" "
            >
              <button class="learn-more">
                <span class="circle" aria-hidden="true">
                  <span class="icon arrow"></span>
                </span>
                <span class="button-text">Contact</span>
              </button>{" "}
            </Link>
          </div>
        </div>
        <div className="lg:w-1/3 flex justify-center">
          <img
            className="rounded-xl w-full max-w-sm"
            src={imageTop}
            alt="Top Image"
          />
        </div>
      </div>

      <div className="bg-base-200 py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 lg:px-12">
            {title2}
          </h2>

          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-5/12 flex justify-center">
              <img
                className="rounded-xl lg:p-8 w-full max-w-md"
                src={imageCenter}
                alt="Center Image"
              />
            </div>

            <div className="lg:w-7/12">
              <div className="flex flex-col gap-8">
                {features.map((feature, index) => (
                  <div key={index}>
                    <h3 className="text-xl font-semibold">{feature.title}</h3>
                    <p className="py-2 text-neutral-600 text-base">
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
  );
};

export default UniversalPage;
