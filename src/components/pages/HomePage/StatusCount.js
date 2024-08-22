import React from "react";
import StatusFlowPoint from "./StatusFlowPoint";

const StatusCount = () => {
  return (
    <div>
      <div className="flex flex-col md:flex-row     py-10     bg-primary">
        <div className="grid grid-cols-4  container mx-auto py-4">
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
