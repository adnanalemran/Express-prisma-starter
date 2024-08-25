import React from "react";

const StatusFlowPoint = (props) => {
  const { year, text } = props;
  return (
    <div>
      <div className="flex flex-col   text-white">
        <div className=" lg:text-6xl text-3xl ">{year}</div>
        <p className="text-left mt-4 lg:text-base text-sm ">{text}</p>
      </div>
    </div>
  );
};

export default StatusFlowPoint;
