import React from "react";

const SecTitle = (props) => {
  const { title } = props;
  return (
    <div>
      <h2 className="text-4xl font-bold    py-4   ">{title}</h2>
    </div>
  );
};

export default SecTitle;
