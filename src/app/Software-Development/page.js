import UniversalPage from "@/components/common/UniversalPage";
import React from "react";
import image from "@/utils/pageSvg/undraw_messaging_7ho8.svg";
import image2 from "@/utils/pageSvg/undraw_static_website_re_x70h.svg";

const Page = () => {
     
    const content = {
        title: "Custom Software Solutions",
        description:
          "At Zaimah Technologies, we specialize in developing bespoke software solutions that align with your business objectives. Our custom software is designed to enhance efficiency, drive innovation, and provide a competitive edge.",
        imageTop: image?.src,
        imageCenter: image2?.src,
        altTextTop: "Custom Software Development Illustration",
        altTextCenter: "Bespoke Software Solutions",
        title2: "Why Choose Our Custom Software Solutions?",
        features: [
          {
            title: "Tailored to Your Needs",
            description:
              "We work closely with you to understand your business requirements, creating software that is perfectly aligned with your goals.",
          },
          {
            title: "Scalable & Flexible",
            description:
              "Our solutions are designed to grow with your business, ensuring they remain effective as your needs evolve.",
          },
          {
            title: "Seamless Integration",
            description:
              "We ensure that our software integrates smoothly with your existing systems, minimizing disruption and maximizing efficiency.",
          },
          {
            title: "Ongoing Support & Maintenance",
            description:
              "Our commitment doesn't end with deployment. We provide ongoing support and maintenance to ensure your software remains up-to-date and fully functional.",
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
