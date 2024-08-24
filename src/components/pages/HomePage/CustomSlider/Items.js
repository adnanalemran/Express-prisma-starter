import ButtonPrimary from "@/components/common/ButtonPrimary";
import React from "react";
import image1 from "@/utils/images/sliderImage/img1.jpg";
const Items = () => {
  return (
    <div>
      <div className="item">
        <img src={image1.src} alt="" />
        <div className="content">
          <div className="title">MAGIC SLIDER</div>
          <div className="type">FLOWER</div>
          <div className="description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
            temporibus quis eum consequuntur voluptate quae doloribus
            distinctio. Possimus, sed recusandae. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Sequi, aut.
          </div>
          <div className="button">
            <ButtonPrimary text="SEE MORE" sideLink="/" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Items;
