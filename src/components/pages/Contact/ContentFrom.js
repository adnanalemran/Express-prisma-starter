import React from "react";

const ContentFrom = () => {
  return (
    <div className="p-4 bg-tertiary mx-auto rounded-xl lg:ml-16">
      <h3 className="text-center text-2xl font-bold mt-8">
        Get started with a free quotation
      </h3>
      <form>
        <div className="   m-6  ">
          <div className="  mb-4">
            <label
              htmlFor="full-name"
              className="text-sm text-gray-600 font-semibold "
            >
              Full Name :
            </label>
            <input
              type="text"
              id="full-name"
              name="full-name"
              className="w-full bg-white rounded border-none border-gray-300 focus:border-primary focus:ring-2 focus:ring-orange-100 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out mt-2"
            />
          </div>{" "}
          <div className="  mb-4">
            <label
              htmlFor="email"
              className="text-sm text-gray-600 font-semibold "
            >
              Email :
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full bg-white rounded border-none border-gray-300 focus:border-primary focus:ring-2 focus:ring-orange-100 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out mt-2"
            />
          </div>{" "}
          <div className="  mb-4">
            <label
              htmlFor="message"
              className="text-sm text-gray-600 font-semibold "
            >
              Message :
            </label>
            <textarea
              rows="5"
             
              id="message"
              name="message"
              className="w-full bg-white rounded border-none border-gray-300 focus:border-primary focus:ring-2 focus:ring-orange-100 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out mt-2"
            />
          </div>{" "}
          <div className="flex justify-center">
            <button className="bg-primary hover:bg-orange-700 text-white px-8 py-2 rounded-lg w-full">
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ContentFrom;
