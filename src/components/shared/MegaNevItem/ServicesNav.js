import Link from "next/link";
import React from "react";

const ServicesNav = () => {
  return (
    <div>
      <div className=" z-999 h-50 absolute top-4 -left-30 transition group-hover:translate-y-5 translate-y-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-500 ease-in-out group-hover:transform   transform ">
        <div className="relative top-3 p-6 bg-white rounded-xl shadow w-full">
          <div className="w-10 h-10   bg-white transform rotate-45 absolute top-0 z-0 translate-x-0 transition-transform group-hover:translate-x-[8rem] duration-500 ease-in-out rounded-sm  "></div>

          <div className="relative z-10 w-230  ">
            <p className="uppercase tracking-wider text-gray-500 font-medium text-[13px] border-b-[1px] my-3 py-2">
              Cloud Solutions
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <ul className="mt-1 text-[15px]">
                  <li className="p-2 hover:bg-[#ff303018] rounded ">
                    <Link href="/Software-Development">
                      <div className="flex gap-2    items-center py-1">
                        <div className="text-sm font-bold">
                          Custom & Enterprise Software
                        </div>
                      </div>
                      <div className="text-xs  font-light   ">
                        Tailored solutions for web, mobile, and enterprise
                        systems.
                      </div>
                    </Link>
                  </li>
                  <li className="p-2 hover:bg-[#ff303018] rounded ">
                    <Link href="/Enterprise-Software">
                      <div className="flex  gap-2  items-center py-1">
                        <div className="text-sm font-bold">
                          IT Consulting & Audits
                        </div>
                      </div>
                      <div className="text-xs  font-light   ">
                        Expert advice and detailed assessments for IT
                        optimization and security.
                      </div>
                    </Link>
                  </li>

                  <li className="p-2 hover:bg-[#ff303018] rounded ">
                    <Link href="/about">
                      <div className="flex  gap-2  items-center py-1">
                        <div className="text-sm font-bold">Cloud Solutions</div>
                      </div>
                      <div className="text-xs  font-light  ">
                        Seamless cloud migration and ongoing management for
                        scalable, secure operations.
                      </div>
                    </Link>
                  </li>
                  <li className="p-2 hover:bg-[#ff303018] rounded ">
                    <Link href="/about">
                      <div className="flex  gap-2  items-center py-1">
                        <div className="text-sm font-bold">
                          Cybersecurity & Data Protection
                        </div>
                      </div>
                      <div className="text-xs  font-light  ">
                        Real-time threat management and robust data protection
                        measures.
                      </div>
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <ul className="mt-1 text-[15px]">
                  <li className="p-2 hover:bg-[#ff303018] rounded ">
                    <Link href="/Software-Development">
                      <div className="flex gap-2    items-center py-1">
                        <div className="text-sm font-bold">
                        Technical Support & System Maintenance
                        </div>
                      </div>
                      <div className="text-xs  font-light   ">
                        Tailored solutions for web, mobile, and enterprise
                        systems.
                      </div>
                    </Link>
                  </li>
                  <li className="p-2 hover:bg-[#ff303018] rounded ">
                    <Link href="/Enterprise-Software">
                      <div className="flex  gap-2  items-center py-1">
                        <div className="text-sm font-bold">
                          IT Consulting & Audits
                        </div>
                      </div>
                      <div className="text-xs  font-light   ">
                        Expert advice and detailed assessments for IT
                        optimization and security.
                      </div>
                    </Link>
                  </li>

                  <li className="p-2 hover:bg-[#ff303018] rounded ">
                    <Link href="/about">
                      <div className="flex  gap-2  items-center py-1">
                        <div className="text-sm font-bold">Cloud Solutions</div>
                      </div>
                      <div className="text-xs  font-light  ">
                        Seamless cloud migration and ongoing management for
                        scalable, secure operations.
                      </div>
                    </Link>
                  </li>
                  <li className="p-2 hover:bg-[#ff303018] rounded ">
                    <Link href="/about">
                      <div className="flex  gap-2  items-center py-1">
                        <div className="text-sm font-bold">
                          Cybersecurity & Data Protection
                        </div>
                      </div>
                      <div className="text-xs  font-light  ">
                        Real-time threat management and robust data protection
                        measures.
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
