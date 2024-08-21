import { MdHome, MdOutlineArrowDropDown } from "react-icons/md";

import "./style.css";
import { TiArrowSortedDown } from "react-icons/ti";

import Link from "next/link";
import { usePathname } from "next/navigation";

const MegaNav = () => {
  const pathname = usePathname();
  return (
    <div>
      <div className="    min-w-26   text-sm  ">
        <div className="  flex gap-4 w-full my-1   ">
          <div className="navbar-center    flex uppercase">
            <nav>
              <ul className="flex items-center justify-center font-semibold gap-1  ">
                <li className="relative group px-3 py-2 hover:bg-tertiary  hover:rounded-full  ">
                  <Link
                    href="/"
                    className={` rounded-full cursor-pointer  ${
                      pathname === "/" ? "active" : " "
                    }`}
                  >
                    <span className="flex gap-2 items-center ">
                      <MdHome /> <p>Home </p>
                    </span>
                  </Link>
                </li>
                <li className="relative group px-3 py-2 hover:bg-tertiary  hover:rounded-full  ">
                  <Link
                    href="/"
                    className={` rounded-full  cursor-pointer   ${
                      pathname === "/about" ? "active" : " "
                    }`}
                  >
                    <span className="flex gap-3 items-center ">
                      <p>Services</p> <TiArrowSortedDown />
                    </span>
                  </Link>
                </li>
                <li className="relative group px-3 py-2 hover:bg-tertiary  hover:rounded-full  ">
                  <Link
                    href="/"
                    className={` rounded-full  cursor-pointer   ${
                      pathname === "/s" ? "active" : " "
                    }`}
                  >
                    <span className="flex gap-3 items-center ">
                      <p>Expertise </p> <TiArrowSortedDown />
                    </span>
                  </Link>
                </li>
                <li className="relative group px-3 py-2 hover:bg-tertiary  hover:rounded-full  ">
                  <Link
                    href="/"
                    className={` rounded-full  cursor-pointer   ${
                      pathname === "/s" ? "active" : " "
                    }`}
                  >
                    <span className="flex gap-3 items-center ">
                      <p>Portfolio </p> <TiArrowSortedDown />
                    </span>
                  </Link>
                </li>
                <li className="relative group px-3 py-2 hover:bg-tertiary  hover:rounded-full  ">
                  <Link
                    href="/"
                    className={` rounded-full  cursor-pointer   ${
                      pathname === "/s" ? "active" : " "
                    }`}
                  >
                    <span className="flex gap-3 items-center ">
                      <p>Partners </p> <TiArrowSortedDown />
                    </span>
                  </Link>
                </li>
                <li className="relative group px-3 py-2 hover:bg-tertiary  hover:rounded-full  ">
                  <Link
                    href="/"
                    className={` rounded-full  cursor-pointer   ${
                      pathname === "/s" ? "active" : " "
                    }`}
                  >
                    <span className="flex gap-3 items-center ">
                      <p>About </p>
                      <TiArrowSortedDown />
                    </span>
                  </Link>
                </li>
                <li className="relative group px-3 py-2 hover:bg-tertiary  hover:rounded-full  ">
                  <Link
                    href="/contact"
                    className={` rounded-full  cursor-pointer   ${
                      pathname === "/contact" ? "active" : " "
                    }`}
                  >
                    <span className="flex gap-3 items-center ">
                      <p>Contacts </p>{" "}
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
