import { contactLanguage } from "@/app/language/Lan-Contact";
import SecTitle from "@/components/common/SecTitle";
import useLanguage from "@/hook/useLanguage";
import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { IoLocationOutline, IoPhonePortraitOutline } from "react-icons/io5";
import { MdOutlinePhone } from "react-icons/md";

const ContentSide = () => {
  const lan = useLanguage(contactLanguage);

  return (
    <div className="px-4">
      <div className="text-xl text-slate-600">{lan?.TopTitle}</div>
      <SecTitle title={lan?.title} />

      <div className="flex gap-4">
        <div className="w-full">
          <div className="text-base mt-16 w-full  "> {lan?.infoTop}</div>
          <div className="border-t-[1px] mt-2 border-neutral-400"></div>

          <div className="text-lg ">
            <div className="flex gap-8 flex-col   py-8">
              <div className="flex flex-row gap-4 items-center">
                <MdOutlinePhone className="text-3xl text-primary " />
                <div>
                  <p className="text-sm"> {lan?.phoneLabel}</p>
                  <p className=""> {lan?.phoneNo}</p>
                </div>
              </div>
              <div className="flex flex-row gap-4 items-center">
                <AiOutlineMail className="text-3xl text-primary " />
                <div>
                  <p className="text-sm"> {lan?.emailLabel} </p>
                  <p className=""> {lan?.email}</p>
                </div>
              </div>
              <div className="flex flex-row gap-4 items-center">
                <IoLocationOutline className="text-4xl text-primary " />
                <div>
                  <p className="text-sm"> {lan?.locationLabel}</p>
                  <p className="text-base">{lan?.location}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentSide;
