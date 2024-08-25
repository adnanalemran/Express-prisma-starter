import React from "react";
import { FaArrowRight, FaCheck } from "react-icons/fa6";

const ServiceItem = () => {
  return (
    <div>
      <section className="text-gray-600 body-font overflow-hidden pb-10">
        <div className="container px-5  mx-auto">
          <div className="flex flex-wrap -m-4">
            <div className="p-4 xl:w-1/4 md:w-1/2 w-full">
              <div className="h-full p-6 rounded-lg border-2 border-gray-300 flex flex-col relative overflow-hidden">
                <h2 className="text-sm tracking-widest title-font mb-1 font-medium">
                  START
                </h2>
                <h1 className="lg:text-4xl text-2xl text-gray-900 pb-4 mb-4 border-b border-gray-200 leading-none">
                  Cloud Computing Solutions
                </h1>
                <p className="flex items-center gap-2 text-gray-600 mb-2">
                  <FaCheck />
                  Scalable cloud architecture
                </p>
                <p className="flex items-center gap-2 text-gray-600 mb-2">
                  <FaCheck />
                  Data security and backup
                </p>
                <p className="flex items-center gap-2 text-gray-600 mb-2">
                  <FaCheck />
                  Cost-effective cloud services
                </p>
                <button className="flex items-center justify-between gap mt-auto  text-white bg-gray-400 border-0 py-2 px-4 w-full focus:outline-none hover:bg-gray-500 rounded">
                  Button <FaArrowRight />
                </button>
                <p className="text-xs text-gray-500 mt-3">
                  Literally you probably heard of them jean shorts.
                </p>
              </div>
            </div>
            <div className="p-4 xl:w-1/4 md:w-1/2 w-full">
              <div className="h-full p-6 rounded-lg border-2 border-indigo-500 flex flex-col relative overflow-hidden">
                <span className="bg-indigo-500 text-white px-3 py-1 tracking-widest text-xs absolute right-0 top-0 rounded-bl">
                  POPULAR
                </span>
                <h2 className="text-sm tracking-widest title-font mb-1 font-medium">
                  PRO
                </h2>
                <h1 className="lg:text-4xl text-2xl text-gray-900 pb-4 mb-4 border-b border-gray-200 leading-none">
                  SaaS Product Development
                </h1>
                <p className="flex items-center gap-2 text-gray-600 mb-2">
                  <FaCheck />
                  Cost-effective cloud services
                </p>
                <p className="flex items-center gap-2 text-gray-600 mb-2">
                  <FaCheck />
                  User Management and Authentication
                </p>
                <p className="flex items-center gap-2 text-gray-600 mb-2">
                  <FaCheck />
                  Billing and Subscription Management
                </p>
                <p className="flex items-center gap-2 text-gray-600 mb-2">
                  <FaCheck />
                  API Integration and Management
                </p>{" "}
                <p className="flex items-center gap-2 text-gray-600 mb-2">
                  <FaCheck />
                  Data Analytics and Reporting
                </p>{" "}
                <p className="flex items-center gap-2 text-gray-600 mb-2">
                  <FaCheck />
                  Customer Support and Helpdesk Integration
                </p>{" "}
                <p className="flex items-center gap-2 text-gray-600 mb-2">
                  <FaCheck />
                  Security and Compliance Management
                </p>
                <button className="flex items-center mt-auto text-white bg-indigo-500 border-0 py-2 px-4 w-full focus:outline-none hover:bg-indigo-600 rounded">
                  Button
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    className="w-4 h-4 ml-auto"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </button>
                <p className="text-xs text-gray-500 mt-3">
                  Literally you probably heard of them jean shorts.
                </p>
              </div>
            </div>
            <div className="p-4 xl:w-1/4 md:w-1/2 w-full">
              <div className="h-full p-6 rounded-lg border-2 border-gray-300 flex flex-col relative overflow-hidden">
                <h2 className="text-sm tracking-widest title-font mb-1 font-medium">
                  BUSINESS
                </h2>
                <h1 className="lg:text-4xl text-2xl text-gray-900 pb-4 mb-4 border-b border-gray-200 leading-none">
                  IT Auditing & Consulting
                </h1>
                <p className="flex items-center gap-2 text-gray-600 mb-2">
                  <FaCheck />
                  IT Infrastructure Audits
                </p>

                <p className="flex items-center gap-2 text-gray-600 mb-2">
                  <FaCheck />
                  Cybersecurity Audits Compliance Audits
                </p>

                <p className="flex items-center gap-2 text-gray-600 mb-2">
                  <FaCheck />
                  IT Risk Management Consulting
                </p>

                <p className="flex items-center gap-2 text-gray-600 mb-2">
                  <FaCheck />
                  Technology Strategy Consulting
                </p>

                <p className="flex items-center gap-2 text-gray-600 mb-2">
                  <FaCheck />
                  Cloud Readiness and Migration Consulting
                </p>

                <p className="flex items-center gap-2 text-gray-600 mb-2">
                  <FaCheck />
                  IT Governance Consulting
                </p>

                <p className="flex items-center gap-2 text-gray-600 mb-2">
                  <FaCheck />
                  Business Continuity Planning
                </p>

                <button className="flex items-center mt-auto text-white bg-gray-400 border-0 py-2 px-4 w-full focus:outline-none hover:bg-gray-500 rounded">
                  Button
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    className="w-4 h-4 ml-auto"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </button>
                <p className="text-xs text-gray-500 mt-3">
                  Literally you probably heard of them jean shorts.
                </p>
              </div>
            </div>
            <div className="p-4 xl:w-1/4 md:w-1/2 w-full">
              <div className="h-full p-6 rounded-lg border-2 border-gray-300 flex flex-col relative overflow-hidden">
                <h2 className="text-sm tracking-widest title-font mb-1 font-medium">
                  SPECIAL
                </h2>
                <h1 className="lg:text-4xl text-2xl text-gray-900 pb-4 mb-4 border-b border-gray-200 leading-none">
                  E-Commerce Website Development
                </h1>
                <p className="flex items-center gap-2 text-gray-600 mb-2">
                  <FaCheck />
                  Mobile-friendly design
                </p>
                <p className="flex items-center gap-2 text-gray-600 mb-2">
                  <FaCheck />
                  SEO optimization
                </p>
                <p className="flex items-center gap-2 text-gray-600 mb-2">
                  <FaCheck />
                  Secure payment systems
                </p>

                <button className="flex items-center mt-auto text-white bg-gray-400 border-0 py-2 px-4 w-full focus:outline-none hover:bg-gray-500 rounded">
                  Button
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    className="w-4 h-4 ml-auto"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </button>
                <p className="text-xs text-gray-500 mt-3">
                  Literally you probably heard of them jean shorts.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceItem;
