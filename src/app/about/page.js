import SecTitle from "@/components/common/SecTitle";
import React from "react";
import { PiUserSwitchFill } from "react-icons/pi";
import image from "@/utils/images/large/about.webp";
import { MdWorkspacesOutline } from "react-icons/md";
import Member from "@/components/pages/About/Member";
const page = () => {
  return (
    <div className="min-h-100 container mx-auto pt-16 ">
      <SecTitle title="ABOUT US   " subtitle="" />

      <div className="flex flex-col lg:flex-row lg:gap-16">
        <div className="w-full lg:w-1/2">
          <p className="text-justify">
            We are a software development company that specializes in creating
            custom software solutions for businesses and organizations of all
            sizes. Our team of skilled developers and designers are dedicated to
            delivering high-quality software products and services that help our
            clients achieve their goals. We are passionate about technology and
            innovation, and we are committed to helping our clients succeed in
            the digital age.
          </p>
          <div className="flex justify-between lg:mt-54">
            <div className="flex items-center gap-4 ">
              <div className="text-3xl bg-primary p-3 rounded-full text-white">
                <MdWorkspacesOutline />
              </div>
              <div>
                Total Operations: <div className="font-bold">10k+</div>
              </div>
            </div>
            <div className="flex items-center gap-4 ">
              <div className="text-3xl bg-primary p-3 rounded-full text-white">
                <PiUserSwitchFill />
              </div>
              <div>
                Total Clients: <div className="font-bold"> 300+ </div>
              </div>
            </div>{" "}
            <div className="flex items-center gap-4 ">
              <div className="text-3xl bg-primary p-3 rounded-full text-white">
                <PiUserSwitchFill />
              </div>
              <div>
                Total Clients: <div className="font-bold"> 300+ </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-1/2">
          <img src={image.src} alt="about" className="w-full rounded-xl" />
        </div>
      </div>

      <div className="pt-16 pb-32 grid grid-cols-4 gap-4">
        <Member name="John Doe" designation="CEO" />
        <Member name="John Doe" designation="CEO" />
        <Member name="John Doe" designation="CEO" />
        <Member name="John Doe" designation="CEO" />
      </div>

      <div>
        <p className="text-justify">
        Our team at  Zaimah Technologies Limited   will focus on product development, product life-cycle, and software development to create custom-made mobile and web apps. We will also provide software QA testing, cloud solutions, and other digital transformation services.
        </p>
      </div>
    </div>
  );
};

export default page;
