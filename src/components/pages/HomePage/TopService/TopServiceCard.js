import ButtonPrimary from "@/components/common/ButtonPrimary";
import React from "react";
import { SiChianetwork } from "react-icons/si";
import { TbWorld } from "react-icons/tb";
import { FaStar } from "react-icons/fa6";

const TopServiceCard = (props) => {
  const { LargeText, Subtext, bgImage, urlLink } = props;
  return (
    <div>
      <div className="card bg-base-100 w-96   transform transition-transform duration-100 ease-in-out hover:scale-105 shadow-md  hover:shadow-lg cursor-pointer  ">
        <figure>
          <img
            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title flex justify-between">
            {" "}
            {LargeText}{" "}
            <div className="flex justify-start items-center gap-2 text-sm">
              <FaStar /> <p>6.2</p>
            </div>{" "}
          </h2>
          <p>{Subtext}</p>
          <div className="card-actions   flex gap-4 justify-between">
            <div className="flex justify-start items-center gap-2 text-primary ">
              <SiChianetwork /> <p>100+ Subscriber</p>
            </div>
            <div className="flex justify-start items-center gap-2 text-primary ">
              <TbWorld /> <p>6+ countries</p>
            </div>
            {/* <div className="flex justify-start items-center gap-2   text-primary">
              <FaStar /> <p>6.2</p>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopServiceCard;

{
  /* <div className="w-full">
<h2 className="text-left text-black font-bold text-2xl">
  {LargeText}
</h2>
<p className="text-left text-white text-sm py-4">{Subtext}</p>
<div className="flex justify-start items-center gap-2">
  <SiChianetwork /> <p>100+ Subscriber</p>
</div>
<div className="flex justify-start items-center gap-2">
  <TbWorld /> <p>6+ countries</p>
</div>
<div className="flex justify-start items-center gap-2">
  <FaStar /> <p>6.2</p>
</div>
<div className="w-full flex justify-end">
  <ButtonPrimary text="Explore now" sideLink={urlLink} />
</div>
</div> */
}
