import SecTitle from "@/components/common/SecTitle";
import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { IoLocationOutline, IoPhonePortraitOutline } from "react-icons/io5";
import {  MdOutlinePhone } from "react-icons/md";

const ContentSide = () => {
 

  return (
    <div>
      <div className="text-xl text-slate-600">Let’s work together</div>
      <SecTitle title="Contact our Support and Sales team" />

      <div className="flex gap-4">
        <div className="w-full">
          <div className="text-base mt-16 w-full  ">
            Feel free to get in touch with us via email or phone
          </div>
          <div className="border-t-[1px] mt-2 border-neutral-400"></div>

          <div className="text-lg ">
            <div className="flex gap-8 flex-col   py-8">
              <div className="flex flex-row gap-4 items-center">
                <MdOutlinePhone className="text-3xl text-primary " />
                <div>
                  <p className="text-sm"> Phone No : </p>
                  <p className=""> +8809617209581</p>
                </div>
              </div>
              <div className="flex flex-row gap-4 items-center">
                <AiOutlineMail className="text-3xl text-primary " />
                <div>
                  <p className="text-sm"> Email us: </p>
                  <p className=""> info@zaimah.co.th</p>
                </div>
              </div>
              <div className="flex flex-row gap-4 items-center">
                <IoLocationOutline className="text-4xl text-primary " />
                <div>
                  <p className="text-sm"> Location :</p>
                  <p className="text-base">
                    Level 11, 540 Mercury Tower, Ploenchit Road, Lumpini,
                    Pathumwan, Bangkok 10330, Thailand
                  </p>
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
