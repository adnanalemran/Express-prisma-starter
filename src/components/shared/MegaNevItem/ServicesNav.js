import Link from "next/link";
import React from "react";

const ServicesNav = () => {
  return (
    <div>
      <div className=" z-999 h-50 absolute top-4 -left-30 transition group-hover:translate-y-5 translate-y-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-500 ease-in-out group-hover:transform   transform ">
        <div className="relative top-3 p-6 bg-tertiary rounded-xl shadow w-full">
          <div className="w-10 h-10   bg-tertiary transform rotate-45 absolute top-0 z-0 translate-x-0 transition-transform group-hover:translate-x-[8rem] duration-500 ease-in-out rounded-sm  "></div>

          <div
            className="relative z-10 w-203
            "
          >
            {" "}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <ul className="mt-1 text-[15px]">
                  {" "}
                  <p className="uppercase tracking-wider text-gray-500 font-medium text-[13px] border-b-[1px] my-3 py-2">
                    Software Development
                  </p>
                  <li className="p-2 hover:bg-[#ff303018] rounded ">
                    <Link href="/about">
                      <div className="flex gap-2    items-center py-1">
                        <div className="text-sm font-bold">
                          Custom Solutions
                        </div>
                      </div>
                      <div className="text-xs  font-light   ">
                      Zaimah Technologies specializes in developing tailor-made software solutions for businesses, including web and mobile applications.

                      </div>
                    </Link>
                  </li>
                  <li className="p-2 hover:bg-[#ff303018] rounded ">
                    <Link href="/about">
                      <div className="flex  gap-2  items-center py-1">
                        <div className="text-sm font-bold">
                          Enterprise Software
                        </div>
                      </div>
                      <div className="text-xs  font-light   ">
                      Developing robust enterprise-level software systems that enhance operational efficiency and business processes.
                      </div>
                    </Link>
                  </li>
                  <p className="uppercase tracking-wider text-gray-500 font-medium text-[13px] border-b-[1px] my-3 py-2">
                    IT Consultancy
                  </p>
                  <li className="p-2 hover:bg-[#ff303018] rounded ">
                    <Link href="/about">
                      <div className="flex  gap-2  items-center py-1">
                        <div className="text-sm font-bold">
                        Strategic IT Consulting:
                        </div>
                      </div>
                      <div className="text-xs  font-light  ">
                      Offering expert advice on how businesses can optimize their IT infrastructure and processes to achieve better results.

                      </div>
                    </Link>
                  </li>{" "}
                  <li className="p-2 hover:bg-[#ff303018] rounded ">
                    <Link href="/about">
                      <div className="flex  gap-2  items-center py-1">
                        <div className="text-sm font-bold">IT Audit</div>
                      </div>
                      <div className="text-xs  font-light  ">
                      Conducting detailed IT audits to assess the performance and security of existing systems, identifying areas for improvement.

                      </div>
                    </Link>
                  </li>
                </ul>
              </div>



              <div>
                <ul className="mt-1 text-[15px]">
                  {" "}
                  <p className="uppercase tracking-wider text-gray-500 font-medium text-[13px] border-b-[1px] my-3 py-2">
                  Cloud Solutions
                  </p>
                  <li className="p-2 hover:bg-[#ff303018] rounded ">
                    <Link href="/about">
                      <div className="flex gap-2    items-center py-1">
                        <div className="text-sm font-bold">
                        Cloud Deployment: 
                        </div>
                      </div>
                      <div className="text-xs  font-light   ">
                      Assisting businesses in migrating their operations to the cloud, ensuring smooth transitions and minimal downtime.

                      </div>
                    </Link>
                  </li>
                  <li className="p-2 hover:bg-[#ff303018] rounded ">
                    <Link href="/about">
                      <div className="flex  gap-2  items-center py-1">
                        <div className="text-sm font-bold">
                        Cloud Management: 
                        </div>
                      </div>
                      <div className="text-xs  font-light   ">
                      Providing ongoing support and management of cloud environments to ensure they remain secure, efficient, and scalable.
                      </div>
                    </Link>
                  </li>
                  <p className="uppercase tracking-wider text-gray-500 font-medium text-[13px] border-b-[1px] my-3 py-2">
                  Cybersecurity
                  </p>
                  <li className="p-2 hover:bg-[#ff303018] rounded ">
                    <Link href="/about">
                      <div className="flex  gap-2  items-center py-1">
                        <div className="text-sm font-bold">
                        Threat Analysis & Management:
                        </div>
                      </div>
                      <div className="text-xs  font-light  ">
                      Offering services to protect businesses from cyber threats, including real-time threat detection and response.

                      </div>
                    </Link>
                  </li>{" "}
                  <li className="p-2 hover:bg-[#ff303018] rounded ">
                    <Link href="/about">
                      <div className="flex  gap-2  items-center py-1">
                        <div className="text-sm font-bold">Data Protection</div>
                      </div>
                      <div className="text-xs  font-light  ">
                      Implementing robust data protection measures to safeguard sensitive information from breaches and unauthorized access.

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
