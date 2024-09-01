import React from "react";

const StatusFlowPoint = (props) => {
  const { year, text, subText } = props;
  return (
    <div>
      <div className="flex flex-col   text-white">
        <div className=" lg:text-6xl text-3xl ">{year}</div>

        <p className="text-left my-2 lg:text-base text-xl font-bold">{text}</p>
        <p className="text-left  lg:text-base text-sm ">{subText}</p>
      </div>
    </div>
  );
};

export default StatusFlowPoint;
