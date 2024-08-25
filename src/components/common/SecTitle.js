import React from "react";

const SecTitle = (props) => {
  const { title, subtitle } = props;
  return (
    <div>
      <h2 className="text-4xl font-bold    py-4   ">{title}</h2>
      <h3 className="text-xl ">{subtitle}</h3>{" "}
    </div>
  );
};

export default SecTitle;
