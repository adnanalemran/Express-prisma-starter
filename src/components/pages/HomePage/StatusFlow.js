import React from "react";
import StatusFlowPoint from "./StatusFlowPoint";

const StatusFlow = () => {
  return (
    <div>
      <div className="flex flex-col md:flex-row     py-10     bg-primary">
        <div className="grid grid-cols-5  container mx-auto py-4  gap-16">
          <StatusFlowPoint
            year="2000"
            text="Released app for the iPhone on the first App Store."
          />
          <StatusFlowPoint
            year="2014"
            text="Seven Peaks officially incorporated in Bangkok"
          />
          <StatusFlowPoint
            year="2022"
            text="Acquisition of  leading Design Agency Morphosis"
          />
          <StatusFlowPoint
            year="2022"
            text="Acquisition of  leading Design Agency Morphosis"
          />
          <StatusFlowPoint
            year="2024"
            text="Zaimah Technologies officially incorporated in Singapore"
          />
        </div>
      </div>
    </div>
  );
};

export default StatusFlow;
