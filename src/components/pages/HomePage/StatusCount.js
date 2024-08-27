import React from "react";
import StatusFlowPoint from "./StatusFlowPoint";

const StatusCount = () => {
  return (
    <div>
      <div className="flex flex-col md:flex-row     py-10     bg-primary">
        <div className="grid lg:grid-cols-4 grid-cols-2 container mx-auto py-4 px-4 gap-8 lg:mx-16">
          <StatusFlowPoint
            year="20+"
            text="Over a decade in Product Design & Development"
          />
          <StatusFlowPoint
            year="20+"
            text="Over a decade in Product Design & Development"
          />
          <StatusFlowPoint
            year="20+"
            text="Over a decade in Product Design & Development"
          />
          <StatusFlowPoint
            year="20+"
            text="Over a decade in Product Design & Development"
          />
        </div>
      </div>
    </div>
  );
};

export default StatusCount;
