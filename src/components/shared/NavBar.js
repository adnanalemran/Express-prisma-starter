"use client";
import React from "react";
import logoImage from "@/utils/images/logo/Asset 1@4x.png";
import { usePathname } from "next/navigation";
import "./HeaderStyle.css";
import Link from "next/link";
import Image from "next/image";

import NavMobile from "./NavMobile";
import MegaNav from "./MegaNav";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <div>
      <div className=" min-w-26   py-4 bg-white  border-b-[1px] border-stick">
        <div className="   container mx-auto flex items-center text-sm justify-between gap-10 px-16 ">
          <div className="lg:text-2xl font-bold flex gap-2 items-center ">
            <Link href="/" className=" r">
              <Image src={logoImage} width={150} alt="logo" />
            </Link>
          </div>
          <div>
            <div className="lg:flex gap-0 text-xs items-center justify-center hidden">
              <ul>
                <span className="text-base "> </span>

                <Link
                  href="tel:+8809617209581"
                  className="bg-brandColor whitespace-nowrap mr-1 text-black ml-1 btn-sm rounded-full btn "
                >
                  <li> +8809617209581 </li>
                </Link>
              </ul>
            </div>{" "}
            <div className="lg:hidden gap-0 text-xs items-center justify-center pr-2  ">
              <ul>
                <NavMobile />
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className=" hidden lg:flex justify-between     border-b-[1px] border-stick    ">
        <div className="container mx-auto px-16 ">
          <MegaNav />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
