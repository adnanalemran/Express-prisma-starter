import Link from "next/link";
import React from "react";

const ButtonPrimary = ({ text, sideLink }) => {
  return (
    <div>
      <Link href={sideLink || "/"}>
        <button className=" whitespace-nowrap bg-white  text-secondary py-2 rounded-full px-4 hover:text-black border-[2px]  ">
          {text}
        </button>
      </Link>
    </div>
  );
};

export default ButtonPrimary;
