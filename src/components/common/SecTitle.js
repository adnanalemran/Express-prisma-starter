import React from "react";

const SecTitle = (props) => {
  const { title, subtitle } = props;
  return (
    <div className=" ">
      <h2 className="lg:text-4xl text-3xl  font-bold  text-center lg:text-left  py-4  text ">
        {title}
      </h2>
      <h3 className="lg:text-xl text-sm text-center lg:text-left">
        {subtitle}
      </h3>
    </div>
  );
};

export default SecTitle;
