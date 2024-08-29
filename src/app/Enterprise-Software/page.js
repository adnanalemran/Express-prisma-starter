import UniversalPage from "@/components/common/UniversalPage";
import React from "react";
import image from "@/utils/pageSvg/undraw_web_devices_re_m8sc.svg";
import image2 from "@/utils/pageSvg/undraw_organizing_projects_re_9p1k.svg";

const Page = () => {
    const content = {
        title: "Enterprise Software Solutions",
        description:
          "Zaimah Technologies delivers robust, scalable enterprise software designed to streamline operations and drive business growth. Our solutions are tailored to meet the complex needs of large organizations, ensuring reliability, security, and seamless integration with existing systems.",
        imageTop: image?.src,
        imageCenter: image2.src,
        altTextTop: "Enterprise Software Development Illustration",
        altTextCenter: "Enterprise-Level Software Solutions",
        title2: "Why Choose Our Enterprise Software?",
        features: [
          {
            title: "Scalability & Growth",
            description:
              "Our software scales with your business, handling increased demands with ease.",
          },
          {
            title: "Advanced Security",
            description:
              "We prioritize data security with cutting-edge protection measures.",
          },
          {
            title: "Seamless Integration",
            description:
              "Integrates smoothly with your existing systems, minimizing disruption.",
          },
          {
            title: "Customizable Solutions",
            description:
              "Our modular design allows you to tailor the software to your specific needs.",
          },
          {
            title: "Reliable Performance",
            description:
              "Built for high performance, ensuring your operations run smoothly.",
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