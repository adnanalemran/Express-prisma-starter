"use client";
import { MdHome } from "react-icons/md";

import "./style.css";
import { TiArrowSortedDown } from "react-icons/ti";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LanNavBar } from "@/app/language/Lan-NavBar";
import useLanguage from "@/hook/useLanguage";
import Item1 from "./MegaNevItem/Item1";

const MegaNav = () => {
  const lan = useLanguage(LanNavBar);
  const pathname = usePathname();
  return (
    <div>
      <div className="    min-w-26   text-sm  ">
        <div className="  flex gap-4 w-full my-1   ">
          <div className="navbar-center    flex uppercase">
            <nav>
              <ul className="flex items-center justify-center font-semibold gap-1  ">
                <li className="relative group px-3 py-2 hover:bg-tertiary  hover:rounded-full cursor-pointer  ">
                  <Link
                    href="/"
                    className={` rounded-full cursor-pointer  ${
                      pathname === "/" ? "active" : " "
                    }`}
                  >
                    <span className="flex gap-2 items-center ">
                      <MdHome /> <p>{lan?.Home} </p>
                    </span>
                  </Link>
                </li>
                <li className="relative group px-3 py-2 hover:bg-tertiary  hover:rounded-full cursor-pointer cursor-pointer  ">
                  <Link
                    href="/"
                    className={` rounded-full  cursor-pointer   ${
                      pathname === "/a" ? "active" : " "
                    }`}
                  >
                    <span className="flex gap-3 items-center ">
                      <p> {lan?.Services} </p> <TiArrowSortedDown />
                    </span>
                  </Link>
                  <Item1 />
                </li>

                <li className="relative group px-3 py-2 hover:bg-tertiary  hover:rounded-full cursor-pointer  ">
                  <Link
                    href="/"
                    className={` rounded-full  cursor-pointer   ${
                      pathname === "/s" ? "active" : " "
                    }`}
                  >
                    <span className="flex gap-3 items-center ">
                      <p>{lan?.Expertise} </p> <TiArrowSortedDown />
                    </span>
                  </Link>
                </li>
                <li className="relative group px-3 py-2 hover:bg-tertiary  hover:rounded-full cursor-pointer  ">
                  <Link
                    href="/"
                    className={` rounded-full  cursor-pointer   ${
                      pathname === "/s" ? "active" : " "
                    }`}
                  >
                    <span className="flex gap-3 items-center ">
                      <p>{lan?.Portfolio} </p> <TiArrowSortedDown />
                    </span>
                  </Link>
                </li>
                <li className="relative group px-3 py-2 hover:bg-tertiary  hover:rounded-full cursor-pointer  ">
                  <Link
                    href="/"
                    className={` rounded-full  cursor-pointer   ${
                      pathname === "/s" ? "active" : " "
                    }`}
                  >
                    <span className="flex gap-3 items-center ">
                      <p>{lan?.Partners} </p> <TiArrowSortedDown />
                    </span>
                  </Link>
                </li>
                <li className="relative group px-3 py-2 hover:bg-tertiary  hover:rounded-full cursor-pointer  ">
                  <Link
                    href="/about"
                    className={` rounded-full  cursor-pointer   ${
                      pathname === "/about" ? "active" : " "
                    }`}
                  >
                    <span className="flex gap-3 items-center ">
                      <p>{lan?.About} </p>
                    </span>
                  </Link>
                </li>
                <li className="relative group px-3 py-2 hover:bg-tertiary  hover:rounded-full cursor-pointer  ">
                  <Link
                    href="/contact"
                    className={` rounded-full  cursor-pointer   ${
                      pathname === "/contact" ? "active" : " "
                    }`}
                  >
                    <span className="flex gap-3 items-center ">
                      <p>{lan?.Contacts} </p>{" "}
                    </span>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MegaNav;
