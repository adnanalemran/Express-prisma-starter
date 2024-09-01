import { lanServicesNav } from "@/app/language/Nav/Lan-ServicesNav";
import useLanguage from "@/hook/useLanguage";
import Link from "next/link";
import React from "react";

const ServicesNav = () => {
  const lan = useLanguage(lanServicesNav);
  return (
    <div>
      <div className=" z-999 h-50 absolute top-4 -left-30 transition group-hover:translate-y-5 translate-y-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-500 ease-in-out group-hover:transform   transform ">
        <div className="relative top-3 p-6 bg-white rounded-xl shadow w-full">
          <div className="w-10 h-10   bg-white transform rotate-45 absolute top-0 z-0 translate-x-0 transition-transform group-hover:translate-x-[8rem] duration-500 ease-in-out rounded-sm  "></div>

          <div className="relative z-10 w-230  ">
            <p className="uppercase tracking-wider text-gray-500 font-medium text-[13px] border-b-[1px] my-3 py-2">
             {lan?.title}
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <ul className="mt-1 text-[15px]">
                  <li className="p-2 hover:bg-[#ff303018] rounded ">
                    <Link href="/Service/Software-Development">
                      <div className="flex gap-2    items-center py-1">
                        <div className="text-sm font-bold">
                         {lan?.Item1.title}
                        </div>
                      </div>
                      <div className="text-xs  font-light   ">
                        {lan?.Item1.description}
                      </div>
                    </Link>
                  </li>
                  <li className="p-2 hover:bg-[#ff303018] rounded ">
                    <Link href="/Service/IT-Consulting-&-Audits">
                      <div className="flex  gap-2  items-center py-1">
                        <div className="text-sm font-bold">
                          {lan?.Item2.title}
                        </div>
                      </div>
                      <div className="text-xs  font-light   ">
                        {lan?.Item2.description}
                      </div>
                    </Link>
                  </li>

                  <li className="p-2 hover:bg-[#ff303018] rounded ">
                    <Link href="/Service/Cloud-Solutions">
                      <div className="flex  gap-2  items-center py-1">
                        <div className="text-sm font-bold">  {lan?.Item3.title} </div>
                      </div>
                      <div className="text-xs  font-light  ">
                        {lan?.Item3.description}
                      </div>
                    </Link>
                  </li>
                  <li className="p-2 hover:bg-[#ff303018] rounded ">
                    <Link href="/Service/Cybersecurity-&-DataProtection">
                      <div className="flex  gap-2  items-center py-1">
                        <div className="text-sm font-bold">
                          {lan?.Item4.title}
                        </div>
                      </div>
                      <div className="text-xs  font-light  ">
                        {lan?.Item4.description}
                      </div>
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <ul className="mt-1 text-[15px]">
                  <li className="p-2 hover:bg-[#ff303018] rounded ">
                    <Link href="/Service/Technical-Support-&-System-Maintenance">
                      <div className="flex gap-2    items-center py-1">
                        <div className="text-sm font-bold">
                          {lan?.Item5.title}
                        </div>
                      </div>
                      <div className="text-xs  font-light   ">
                        {lan?.Item5.description}
                      </div>
                    </Link>
                  </li>
                  <li className="p-2 hover:bg-[#ff303018] rounded ">
                    <Link href="/Service/AI-&-Machine-Learning-Solutions">
                      <div className="flex  gap-2  items-center py-1">
                        <div className="text-sm font-bold">
                          {lan?.Item6.title}
                        </div>
                      </div>
                      <div className="text-xs  font-light   ">
                        {lan?.Item6.description}
                      </div>
                    </Link>
                  </li>

                  <li className="p-2 hover:bg-[#ff303018] rounded ">
                    <Link href="/Service/Digital-Transformation-&-Automation">
                      <div className="flex  gap-2  items-center py-1">
                        <div className="text-sm font-bold">    {lan?.Item7.title}  </div>
                      </div>
                      <div className="text-xs  font-light  ">
                        {lan?.Item7.description}
                      </div>
                    </Link>
                  </li>
                  <li className="p-2 hover:bg-[#ff303018] rounded ">
                    <Link href="/Service/IoT-Solutions">
                      <div className="flex  gap-2  items-center py-1">
                        <div className="text-sm font-bold">
                          {lan?.Item8.title}
                        </div>
                      </div>
                      <div className="text-xs  font-light  ">
                        {lan?.Item8.description}
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
