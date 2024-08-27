import { useState } from "react";
import BangladeshTab from "./Tabs/BangladeshTab";
import { FaChevronRight } from "react-icons/fa6";
import SecTitle from "@/components/common/SecTitle";
import MalaysiaPartnerOffice from "./Tabs/MalaysiaTab";
import { homePageLanguage } from "@/app/language/Lan-homepage";
import useLanguage from "@/hook/useLanguage";
import Thaitab from "./Tabs/Thaitab";

const Tabs = () => {
  const len = useLanguage(homePageLanguage);
  const [activeTab, setActiveTab] = useState("bd");

  const openCity = (cityName) => {
    setActiveTab(cityName);
  };

  return (
    <div className="pb-8 pt-10   mx-auto  lg:mx-8   ">
      <SecTitle title={len?.tabsSec?.title} subtitle={len?.tabsSec?.subtitle} />

      <div className="mt-10 flex flex-col-reverse lg:flex-row rounded-lg p-3 container mx-auto bg-[#ffb39a27]">
        <div className="tab w-full lg:w-1/4 pl-0">
          {[
            { name: "Bangladesh Office", city: "bd" },
            { name: "Thailand Office", city: "thai" },
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
          {activeTab === "bd" && (
            <div className="transition duration-300">
              <BangladeshTab />
            </div>
          )}
          {activeTab === "thai" && (
            <div className="transition duration-300">
              <Thaitab />
            </div>
          )}
          {activeTab === "Malaysia" && (
            <div className="transition duration-300">
              <MalaysiaPartnerOffice />
            </div>
          )}
          {activeTab === "usa" && (
            <div className="transition duration-300">
              <Thaitab />
            </div>
          )}
          {activeTab === "uk" && (
            <div className="transition duration-300">
              <Thaitab />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Tabs;
