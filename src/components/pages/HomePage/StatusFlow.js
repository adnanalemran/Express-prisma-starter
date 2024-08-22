import React from "react";
import StatusFlowPoint from "./StatusFlowPoint";

const StatusFlow = () => {
  return (
    <div>
      <div className="flex flex-col md:flex-row     py-10     bg-primary">
        <div className="grid grid-cols-5  container mx-auto py-4">
          <StatusFlowPoint year="2000" text="Start journey  of ZTL" />
          <StatusFlowPoint year="2000" text="Start journey  of ZTL" />
          <StatusFlowPoint year="2000" text="Start journey  of ZTL" />
          <StatusFlowPoint year="2000" text="Start journey  of ZTL" />
          <StatusFlowPoint year="2000" text="Start journey  of ZTL" />
        </div>
      </div>
    </div>
  );
};

export default StatusFlow;
