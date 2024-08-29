"use client";
import React, { useState, useEffect } from "react";
import logoImage from "@/utils/images/logo/singleLogo.png";
import { usePathname } from "next/navigation";
import "./HeaderStyle.css";
import Link from "next/link";
import Image from "next/image";
import { LanNavBar } from "../../app/language/Lan-NavBar";
import NavMobile from "./NavMobile";
import MegaNav from "./MegaNav";
import { LanguageSwitcher } from "../LanguageSwitcher";
import useLanguage from "@/hook/useLanguage";

const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);
  const lan = useLanguage(LanNavBar);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 60) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      {/* Top Navbar */}
      <div className={`min-w-26 py-4 bg-white border-b-[1px] border-stick `}>
        <div className="container mx-auto flex items-center text-sm justify-between gap-10 lg:px-16 px-4">
          <div className="lg:text-2xl font-bold flex gap-2 items-center">
            <Link href="/" className="flex justify-center items-center gap-2">
              <Image src={logoImage} width={50} alt="logo" />

              <div className="flex flex-col">
                <p className="text-xl  ">
                  ZAIMAH TECHNOLOGIES (THAILAND) CO., LTD
                </p>
                <p className="text-sm">
                  บริษัท ไซมา เทคโนโลยี (ประเทศไทย) จำกัด
                </p>
              </div>
            </Link>
          </div>
          <div>
            <div className="lg:flex gap-0 items-center justify-center hidden">
              <LanguageSwitcher />
              <ul>
                <Link
                  href="tel:+8809617209581"
                  className="bg-brandColor whitespace-nowrap mr-1 text-black ml-1 btn-sm rounded-full btn"
                >
                  <li>+8809617209581</li>
                </Link>
              </ul>
            </div>
            <div className="lg:hidden gap-0 text-xs items-center justify-center pr-2">
              <ul>
                <NavMobile />
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Mega Navigation Bar */}
      <div
        className={`hidden lg:flex justify-between border-b-[1px] border-stick sticky-transition  ${
          isSticky
            ? "fixed top-[0px] left-0 w-full z-999 bg-white is-sticky"
            : ""
        }`}
      >
        <div className="container mx-auto px-16">
          <MegaNav />
        </div>
      </div>

      {/* Placeholder to avoid content jump */}
      {isSticky && <div className=" "></div>}
    </div>
  );
};

export default Navbar;
