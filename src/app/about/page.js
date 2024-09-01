"use client";
import SecTitle from "@/components/common/SecTitle";
import React from "react";

import image from "@/utils/images/large/about.webp";
import { MdWorkspacesOutline } from "react-icons/md";
import Member from "@/components/pages/About/Member";
import jabedLargeImage from "@/utils/images/person/jabedfull.jpeg";
import adnan from "@/utils/images/employee/adnan.jpg";
import arafat from "@/utils/images/employee/arafat.jpg";
import tanvir from "@/utils/images/employee/tanver.jpg";
import Taufik from "@/utils/images/employee/Taufik.jpg";
import per1 from "@/utils/images/employee/1.png";
import per2 from "@/utils/images/employee/Chanon Dalai.png";
import per3 from "@/utils/images/employee/3.png";
import per4 from "@/utils/images/employee/4.png";
import per5 from "@/utils/images/employee/5.png";
import per6 from "@/utils/images/employee/6.png";
import per7 from "@/utils/images/employee/7.png";
import useLanguage from "@/hook/useLanguage";
import { LanAbout } from "../language/Lan-About";

const page = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const lan = useLanguage(LanAbout);
  return (
    <div className="min-h-100 container mx-auto lg:pt-16 pt-6 p-4 ">
      <SecTitle title={lan?.about} subtitle="" />

      <div className="flex flex-col lg:flex-row lg:gap-16">
        <div className="w-full lg:w-1/2">
          <p className="text-justify">{lan?.dis}</p>
          <div className="grid  grid-cols-2 gap-4 justify-between lg:mt-30 py-10 lg:py-0">
            <div className="flex  items-center lg:gap-4 gap-1 ">
              <div className=" text-3xl bg-primary p-3 rounded-full text-white">
                <MdWorkspacesOutline />
              </div>
              <div className="whitespace-nowrap">{lan?.clients}</div>
            </div>
            <div className="flex  items-center lg:gap-4 gap-1 ">
              <div className=" text-3xl bg-primary p-3 rounded-full text-white">
                <MdWorkspacesOutline />
              </div>
              <div className="whitespace-nowrap">{lan?.industries}</div>
            </div>
            <div className="flex  items-center lg:gap-4 gap-1 ">
              <div className=" text-3xl bg-primary p-3 rounded-full text-white">
                <MdWorkspacesOutline />
              </div>
              <div className="whitespace-nowrap">{lan?.teamMembers}</div>
            </div>{" "}
            <div className="flex  items-center lg:gap-4 gap-1 ">
              <div className=" text-3xl bg-primary p-3 rounded-full text-white">
                <MdWorkspacesOutline />
              </div>
              <div className="whitespace-nowrap">{lan?.operations}</div>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-1/2">
          <img src={image.src} alt="about" className="w-full rounded-xl" />
        </div>
      </div>

      <div className="py-24">
        <div className="flex justify-between lg:gap-8 flex-col lg:flex-row items-center ">
          <div className="w-full lg:w-2/6 ">
            <img
              src={jabedLargeImage.src}
              alt="Jabed"
              className=" rounded-xl lg:w-100 w-32"
            />
          </div>
          <div className="w-full lg:w-4/6 rounded-xl ">
            <h2 className="text-end lg:text-3xl text-2xl font-bold">
              {lan?.VoiceOfCEO.title}
            </h2>
            <p className="  text-justify py-8 ">
              {lan?.VoiceOfCEO?.p1}
              <br />
              <br />
              {lan?.VoiceOfCEO?.p2}
              <br />
              <br />
              {lan?.VoiceOfCEO?.p3}
              <br />
              <br />
              {lan?.VoiceOfCEO?.p4}
              <br />
              <br />
              {lan?.VoiceOfCEO?.p5}
            </p>
            <p className="text-end"> Jabed Akhter</p>
            <p className="text-end"> CEO, Zaimah Technologies</p>
          </div>
        </div>
      </div>

      <h2 className="text-3xl text-center font-bold">{lan?.ourTeams?.title}</h2>
      <p className="text-center py-4">{lan?.ourTeams?.dis}</p>

      <div className="pt-4 pb-16 grid lg:grid-cols-4  grid-cols-1 lg:gap-4 gap-2">
        <Member name="Yusron Lateh" designation="Director" image={per1?.src} />{" "}
        <Member
          name="Chanon Dalai"
          designation="Business Advisor"
          image={per2?.src}
        />{" "}
        <Member
          name="Solah mad-adam
"
          designation="Software Engineer
"
          image={per3?.src}
        />
        <Member
          name="Azizun Usama

"
          designation="AI Engineer
"
          image={per4?.src}
        />
        <Member
          name="Rimzan Hussain
"
          designation="Senior Product Manager
"
          image={per5?.src}
        />
        <Member
          name="Laddawan Khan

"
          designation="Legal Advisor


"
          image={per6?.src}
        />
        <Member
          name="Phyu Phyu Kyaw

 "
          designation="Business Developer

"
          image={per7?.src}
        />
        <Member
          name="Arafat Hossain"
          designation="Software engineer"
          image={arafat.src}
        />
        <Member
          name="Adnan Al emran "
          designation="Software engineer"
          image={adnan.src}
        />{" "}
        <Member
          name="Md Tanvir Alam"
          designation="Software engineer"
          image={tanvir.src}
        />{" "}
        <Member
          name="Taufique Elahi
 "
          designation="Software engineer"
          image={Taufik.src}
        />
      </div>
    </div>
  );
};

export default page;
