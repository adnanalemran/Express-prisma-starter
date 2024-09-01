import React from "react";
import StatusFlowPoint from "./StatusFlowPoint";

const StatusCount = () => {
  return (
    <div>
      <div className="flex flex-col md:flex-row     py-10     bg-primary">
        <div className="grid lg:grid-cols-4 grid-cols-2 container mx-auto py-4 px-4 gap-8 lg:mx-16">
          <StatusFlowPoint
            year="100+"
            text="Customers"
            subText=" across the globe trust us"
          />
          <StatusFlowPoint
            year="10+"
            text="Experts"
            subText="  in the team of professionals"
          />
          <StatusFlowPoint
            year="2+"
            text="Years"
            subText="  of experience in the industry"
          />
          <StatusFlowPoint
           year="7+"
           text="Nationalities"
            subText="  in the team of professionals "
          />
        </div>
      </div>
    </div>
  );
};

export default StatusCount;
