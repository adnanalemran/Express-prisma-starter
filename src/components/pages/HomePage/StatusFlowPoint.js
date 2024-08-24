import React from "react";

const StatusFlowPoint = (props) => {
  const { year, text } = props;
  return (
    <div>
      <div className="flex flex-col   text-white">
        <div className=" text-6xl ">{year}</div>
        <p className="text-left mt-4">{text}</p>
      </div>
    </div>
  );
};

export default StatusFlowPoint;
