import { useState } from "react";
import BangladeshTab from "./Tabs/BangladeshTab";
import Thaitab from "./Tabs/thaitab";
import { FaChevronRight } from "react-icons/fa6";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState("Bangladesh");

  const openCity = (cityName) => {
    setActiveTab(cityName);
  };

  return (
    <div className="pb-16 pt-24">
      <h2 className="text-4xl font-bold text-center lg:text-left py-8 flex  justify-center text-black">
        We Work internationally
      </h2>
      <div className="flex flex-col md:flex-row   rounded-lg  p-3  container mx-auto   bg-[#ffb39a27]">
        <div className="tab w-full md:w-1/4  pl-0   ">
          <button
            className={`rounded-lg w-full flex items-center justify-between p-2 mt-2 text-left cursor-pointer transition duration-300 text-lg font-medium ${
              activeTab === "Bangladesh"
                ? "bg-primary text-white "
                : "bg-gray-50 text-gray-700 hover:bg-gray-100"
            }`}
            onClick={() => openCity("Bangladesh")}
          >
            Bangladesh <FaChevronRight />
          </button>
          <button
            className={` rounded-lg w-full flex items-center justify-between p-2  mt-2 text-left cursor-pointer transition duration-300 text-lg font-medium ${
              activeTab === "thai"
                ? "bg-primary text-white "
                : "bg-gray-50 text-gray-700 hover:bg-gray-100"
            }`}
            onClick={() => openCity("thai")}
          >
            Thai <FaChevronRight />
          </button>
        </div>

        <div className="tabcontent w-full md:w-3/4  bg-white ">
          {activeTab === "Bangladesh" && (
            <div className=" transition duration-300 ">
              <BangladeshTab />
            </div>
          )}
          {activeTab === "thai" && (
            <div className=" transition duration-300 ">
              <Thaitab />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Tabs;
