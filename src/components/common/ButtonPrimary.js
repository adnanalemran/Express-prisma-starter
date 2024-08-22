import Link from "next/link";
import React from "react";

const ButtonPrimary = ({ text, sideLink }) => {
  return (
    <div>
      <Link
        href={sideLink}
        className="bg-primary hover:bg-red-800 border-none text-white ml-4 btn-md rounded-full btn "
      >
        {text}
      </Link>
    </div>
  );
};

export default ButtonPrimary;
