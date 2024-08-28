import Link from "next/link";
import React from "react";

const ServicesNav = () => {
  return (
    <div>
      <div className=" z-999 h-50 absolute top-4 -left-30 transition group-hover:translate-y-5 translate-y-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-500 ease-in-out group-hover:transform   transform ">
        <div className="relative top-3 p-6 bg-tertiary rounded-xl shadow w-full">
          <div className="w-10 h-10   bg-tertiary transform rotate-45 absolute top-0 z-0 translate-x-0 transition-transform group-hover:translate-x-[8rem] duration-500 ease-in-out rounded-sm  "></div>

          <div
            className="relative z-10 w-150
            "
          >
            {" "}
            <p className="uppercase tracking-wider text-gray-500 font-medium text-[13px] border-b-[1px] my-3 py-2">
              Services
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <ul className="mt-3 text-[15px]">
                  <li className="p-2 hover:bg-[#ff303018] rounded ">
                    <Link href="/about">
                      <div className="flex gap-2    items-center py-1">
                        <div className="text-sm font-bold">Who we are</div>
                      </div>
                      <div className="text-xs  font-light   ">
                        Learn about our company, our mission, and our team.
                      </div>
                    </Link>
                  </li>
                  <li className="p-2 hover:bg-[#ff303018] rounded ">
                    <Link href="/about">
                      <div className="flex  gap-2  items-center py-1">
                        <div className="text-sm font-bold">
                          what we got for you
                        </div>
                      </div>
                      <div className="text-xs  font-light   ">
                        Explore our services, features, and benefits.
                      </div>
                    </Link>
                  </li>{" "}
                  <li className="p-2 hover:bg-[#ff303018] rounded ">
                    <Link href="/about">
                      <div className="flex  gap-2  items-center py-1">
                        <div className="text-sm font-bold">
                          how we express our self
                        </div>
                      </div>
                      <div className="text-xs  font-light  ">
                        Discover our values, culture, and community initiatives.
                      </div>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesNav;
