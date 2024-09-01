import Image from "next/image";
import React from "react";
import bgEmployee from "@/utils/images/large//bg-employee.jpg";
const Member = (props) => {
  const { name, designation, image } = props;
  return (
    <>
      <div className="max-w-sm mx-auto  bg-white shadow-2 rounded-lg text-gray-900">
        <div className="rounded-t-lg h-32 overflow-hidden">
          <Image
            width={300}
            height={200}
            className="object-cover object-top w-full"
            src={bgEmployee.src}
            alt="Mountain"
          />
        </div>
        <div className="mx-auto w-32 h-32 relative -mt-16 border-4 border-white rounded-full overflow-hidden">
          <Image
            width={200}
            height={200}
            className="object-cover object-center h-full w-full"
            src={image}
            alt="Employee of ZTL"
          />
        </div>
        <div className="text-center mt-2">
          <h2 className="font-semibold">{name}</h2>
          <p className="text-gray-500">{designation}</p>
        </div>

        <div className="p-4 mx-8 mt-2"></div>
      </div>
    </>
  );
};

export default Member;
