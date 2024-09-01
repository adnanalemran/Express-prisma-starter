import { useState } from "react";

import { FaChevronRight } from "react-icons/fa6";
import SecTitle from "@/components/common/SecTitle";

import { homePageLanguage } from "@/app/language/Lan-homepage";
import useLanguage from "@/hook/useLanguage";

 
import CommonTab from "./Tabs/CommonTab";

import bgImageBD from "@/utils/images/svg/bd.svg";
import bgImageThai from "@/utils/images/svg/th.svg";
import bgImageMal from "@/utils/images/svg/mal.svg";
import bgImageUsa from "@/utils/images/svg/usa.svg";
import bgImageUk from "@/utils/images/svg/uk.svg";
const Tabs = () => {
  const len = useLanguage(homePageLanguage);
  const [activeTab, setActiveTab] = useState("thai");

  const openCity = (cityName) => {
    setActiveTab(cityName);
  };

  return (
    <div className="pb-8 pt-10   mx-auto  lg:mx-8   ">
      <SecTitle title={len?.tabsSec?.title} subtitle={len?.tabsSec?.subtitle} />

      <div className="mt-10 flex flex-col-reverse lg:flex-row rounded-lg p-3 container mx-auto bg-[#ffb39a27]">
        <div className="tab w-full lg:w-1/4 pl-0">
          {[
            { name: "Thailand Office", city: "thai" },
            { name: "Bangladesh Office", city: "bd" },
            { name: "Malaysia Office", city: "Malaysia" },
            { name: "USA Office", city: "usa" },
            { name: "UK Office", city: "uk" },
          ].map((office) => (
            <button
              key={office.city}
              className={`rounded-lg w-full flex items-center justify-between p-2 mt-2 text-left cursor-pointer transition duration-300 font-medium text-sm ${
                activeTab === office.city
                  ? "bg-primary text-white"
                  : "bg-gray-50 text-gray-700 hover:bg-gray-100"
              }`}
              onClick={() => openCity(office.city)}
            >
              {office.name} <FaChevronRight />
            </button>
          ))}
        </div>

        <div className="w-full lg:w-3/4 bg-white flex lg:relative ">
          {activeTab === "thai" && (
            <div className="transition duration-300">
              <CommonTab
                header="ZTL Office - in Thailand"
                clients="50+ Clients"
                industries="20+ Industries Served"
                teamMembers="10+ Team Members"
                operations="100+ Operations"
                bgImage={bgImageThai}
                dis="At ZTL, we pride ourselves on delivering cutting-edge technology solutions tailored to meet our clients' needs. Our commitment to innovation and excellence has earned us a reputation as a trusted partner in the IT industry. We specialize in a wide range of services, including software development, IT consulting, and system integration."
              />
            </div>
          )}
          {activeTab === "bd" && (
            <div className="transition duration-300">
              <CommonTab
                header="ZTL Office - in Bangladesh"
                clients="100+ Clients"
                industries="30+ Industries Served"
                teamMembers="15+ Team Members"
                operations="600+ Operations"
                bgImage={bgImageBD}
                dis="At ZTL, we pride ourselves on delivering cutting-edge technology solutions tailored to meet our clients' needs. Our commitment to innovation and excellence has earned us a reputation as a trusted partner in the IT industry. We specialize in a wide range of services, including software development, IT consulting, and system integration."
              />
            </div>
          )}

          {activeTab === "Malaysia" && (
            <div className="transition duration-300">
              <CommonTab
                header="ZTL Office - in Malaysia"
                clients="70+ Clients"
                industries="20+ Industries Served"
                teamMembers="15+ Team Members"
                operations="300+ Operations"
                bgImage={bgImageMal}
                dis="Our partner office in Malaysia plays a crucial role in extending our reach and capabilities across Southeast Asia. By collaborating with local experts, we ensure that our clients receive tailored solutions that address their specific needs while leveraging our global expertise."
              />
            </div>
          )}
          {activeTab === "usa" && (
            <div className="transition duration-300">
              <CommonTab
                header="ZTL Office - in USA"
                clients="20+ Clients"
                industries="180+ Industries Served"
                teamMembers="10+ Team Members"
                operations="70+ Operations"
                bgImage={bgImageUsa}
                dis="Our partner office in the USA plays a crucial role in extending our reach and capabilities across the country. By collaborating with local experts, we ensure that our clients receive tailored solutions that address their specific needs while leveraging our global expertise."
              />
            </div>
          )}
          {activeTab === "uk" && (
            <div className="transition duration-300">
              <CommonTab
                header="ZTL Office - in UK"
                clients="20+ Clients"
                industries="100+ Industries Served"
                teamMembers="10+ Team Members"
                operations="70+ Operations"
                bgImage={bgImageUk}
                dis="Our partner office in the UK is essential in expanding our reach and capabilities across the region. By working closely with local experts, we provide our clients with customized solutions that meet their specific needs while leveraging our global expertise."
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Tabs;
