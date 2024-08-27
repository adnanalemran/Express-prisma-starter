import React from "react";

const Item1 = () => {
  return (
    <div>
      <div className=" z-999 h-50 absolute top-4 -left-30 transition group-hover:translate-y-5 translate-y-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-500 ease-in-out group-hover:transform   transform ">
        <div className="relative top-3 p-6 bg-tertiary rounded-xl shadow-xl w-full">
          <div className="w-10 h-10   bg-tertiary transform rotate-45 absolute top-0 z-0 translate-x-0 transition-transform group-hover:translate-x-[8rem] duration-500 ease-in-out rounded-sm  "></div>

          <div className="relative z-10 w-full ">
            <div className="grid grid-cols-3 gap-4">
              <div>
                <p className="uppercase tracking-wider text-gray-500 font-medium text-[13px] border-b-[1px] my-3 py-2">
                  SOLUTIONS
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item1;
