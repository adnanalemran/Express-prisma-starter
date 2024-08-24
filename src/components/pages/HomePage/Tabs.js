import { useState } from "react";
import BangladeshTab from "./Tabs/BangladeshTab";
import Thaitab from "./Tabs/thaitab";
import { FaChevronRight } from "react-icons/fa6";
import SecTitle from "@/components/common/SecTitle";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState("bd");

  const openCity = (cityName) => {
    setActiveTab(cityName);
  };

  return (
    <div className="pb-8 pt-10 container mx-auto">
      <SecTitle
        title="Helping organizations grow in the new
digital reality"
      />
      <h3 className=" text-xl py-4">
        We don’t just build what you want, we build what you need!
      </h3>{" "}
      <h3 className=" ">
        Zaimah Technologies Limited is an international digital transformation
        driver that powers leading businesses to transform, survive and grow,
        with feasible, viable, and desirable digital products and solutions.
      </h3>
      <div className="mt-10 flex flex-col md:flex-row   rounded-lg  p-3  container mx-auto   bg-[#ffb39a27]">
        <div className="tab w-full md:w-1/4  pl-0   ">
          <button
            className={`rounded-lg w-full flex items-center justify-between p-2 mt-2 text-left cursor-pointer transition duration-300   font-medium text-sm  ${
              activeTab === "bd"
                ? "bg-primary text-white "
                : "bg-gray-50 text-gray-700 hover:bg-gray-100"
            }`}
            onClick={() => openCity("bd")}
          >
            Bangladesh Office <FaChevronRight />
          </button>
          <button
            className={` rounded-lg w-full flex items-center justify-between p-2 mt-2 text-left cursor-pointer transition duration-300   font-medium text-sm ${
              activeTab === "thai"
                ? "bg-primary text-white "
                : "bg-gray-50 text-gray-700 hover:bg-gray-100"
            }`}
            onClick={() => openCity("thai")}
          >
            Thailand Office
            <FaChevronRight />
          </button>{" "}
          <button
            className={` rounded-lg w-full flex items-center justify-between p-2 mt-2 text-left cursor-pointer transition duration-300   font-medium text-sm ${
              activeTab === "Malaysia"
                ? "bg-primary text-white "
                : "bg-gray-50 text-gray-700 hover:bg-gray-100"
            }`}
            onClick={() => openCity("Malaysia")}
          >
            Malaysia Office
            <FaChevronRight />
          </button>{" "}
          <button
            className={` rounded-lg w-full flex items-center justify-between p-2 mt-2 text-left cursor-pointer transition duration-300   font-medium text-sm ${
              activeTab === "usa"
                ? "bg-primary text-white "
                : "bg-gray-50 text-gray-700 hover:bg-gray-100"
            }`}
            onClick={() => openCity("usa")}
          >
            USA Office
            <FaChevronRight />
          </button>{" "}
          <button
            className={` rounded-lg w-full flex items-center justify-between p-2 mt-2 text-left cursor-pointer transition duration-300   font-medium text-sm ${
              activeTab === "uk"
                ? "bg-primary text-white "
                : "bg-gray-50 text-gray-700 hover:bg-gray-100"
            }`}
            onClick={() => openCity("uk")}
          >
            UK Office
            <FaChevronRight />
          </button>
        </div>

        <div className="  w-full md:w-3/4  bg-white ">
          {activeTab === "bd" && (
            <div className=" transition duration-300 ">
              <BangladeshTab />
            </div>
          )}
          {activeTab === "thai" && (
            <div className=" transition duration-300 ">
              <Thaitab />
            </div>
          )}{" "}
          {activeTab === "Malaysia" && (
            <div className=" transition duration-300 ">
              <Thaitab />
            </div>
          )}{" "}
          {activeTab === "usa" && (
            <div className=" transition duration-300 ">
              <Thaitab />
            </div>
          )}{" "}
          {activeTab === "uk" && (
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
