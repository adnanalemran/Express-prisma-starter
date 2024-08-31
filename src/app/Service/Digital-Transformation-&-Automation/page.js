import UniversalPage from "@/components/common/UniversalPage";
import React from "react";
import image from "@/utils/pageSvg/undraw_digital_nomad_re_w8uy.svg";
import image2 from "@/utils/pageSvg/undraw_online_ad_re_ol62.svg";

const Page = () => {
    const content = {
        title: "Digital Transformation & Automation",
        description:
          "Zaimah Technologies drives business innovation through Digital Transformation and Automation services. We help you reimagine your operations, streamline processes, and embrace cutting-edge technologies to achieve higher efficiency and a competitive edge in the market.",
        imageTop: image.src,
        imageCenter: image2.src,
        altTextTop: "Digital Transformation",
        altTextCenter: "Process Automation",
        title2: "Why Choose Our Digital Transformation & Automation Services?",
        features: [
          {
            title: "End-to-End Digital Strategy",
            description:
              "We craft comprehensive digital strategies that align with your business goals, enabling a seamless transformation journey from start to finish.",
          },
          {
            title: "Process Optimization",
            description:
              "Our automation solutions are designed to streamline your business processes, reducing redundancies and improving overall efficiency.",
          },
          {
            title: "Technology Integration",
            description:
              "We integrate the latest technologies into your existing infrastructure, ensuring a smooth transition and maximizing the benefits of digital transformation.",
          },
          {
            title: "Continuous Innovation",
            description:
              "Our approach ensures your business stays ahead of the curve by continuously adopting new technologies and innovative practices.",
          },
        ],
      };

    return (
        <div className="">
            <UniversalPage {...content} />
        </div>
    );
};

export default Page;
