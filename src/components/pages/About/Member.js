import React from "react";
import { FaLine } from "react-icons/fa";
import { IoCall, IoMail } from "react-icons/io5";
import { MdEmail } from "react-icons/md";

const Member = (props) => {
  const { name, designation } = props;
  return (
    <>
      <div className="max-w-sm mx-auto lg:mt-8 bg-white shadow-xl rounded-lg text-gray-900">
        <div className="rounded-t-lg h-32 overflow-hidden">
          <img
            className="object-cover object-top w-full"
            src="https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
            alt="Mountain"
          />
        </div>
        <div className="mx-auto w-32 h-32 relative -mt-16 border-4 border-white rounded-full overflow-hidden">
          <img
            className="object-cover object-center h-full w-full"
            src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
            alt="Woman looking front"
          />
        </div>
        <div className="text-center mt-2">
          <h2 className="font-semibold">{name}</h2>
          <p className="text-gray-500">{designation}</p>
        </div>
        <ul className="py-2  gap-3 text-gray-700 flex flex-col items-center justify-between">
          <li className="flex gap-2 items-center">
            <IoCall /> <span className="text-sm"> 019-12345678 </span>
          </li>
          <li className="flex  gap-2 items-center">
            <IoMail /> <span className="text-sm"> example@gmail.com </span>
          </li>
        </ul>
        <div className="p-4 mx-8 mt-2"></div>
      </div>
    </>
  );
};

export default Member;
