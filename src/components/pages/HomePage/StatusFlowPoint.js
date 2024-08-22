import React from "react";

const StatusFlowPoint = (props) => {
  const { year, text } = props;
  return (
    <div>
      <div className="flex flex-col items-center text-white">
        <div className="flex items-center justify-center w-22 h-22   text-6xl">
          {year}
        </div>
        <p className="text-center">{text}</p>
      </div>
    </div>
  );
};

export default StatusFlowPoint;
