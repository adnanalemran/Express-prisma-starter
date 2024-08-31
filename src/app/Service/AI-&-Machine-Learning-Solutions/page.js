import UniversalPage from "@/components/common/UniversalPage";
import React from "react";
import image from "@/utils/pageSvg/undraw_firmware_re_fgdy.svg";
import image2 from "@/utils/pageSvg/undraw_drone_race_-0-sim.svg";

const Page = () => {
    const content = {
        title: "AI & Machine Learning Solutions",
        description:
          "Zaimah Technologies empowers businesses with cutting-edge AI and Machine Learning solutions. Our expertise in AI and ML enables you to automate processes, gain valuable insights, and enhance decision-making capabilities, driving innovation and efficiency in your organization.",
        imageTop: image.src,
        imageCenter: image2.src,
        altTextTop: "AI Solutions",
        altTextCenter: "Machine Learning",
        title2: "Why Choose Our AI & Machine Learning Solutions?",
        features: [
          {
            title: "Intelligent Process Automation",
            description:
              "Leverage AI and ML to automate complex business processes, reducing manual effort and increasing operational efficiency.",
          },
          {
            title: "Predictive Analytics",
            description:
              "Our solutions provide advanced predictive analytics, allowing you to forecast trends, make data-driven decisions, and stay ahead of the competition.",
          },
          {
            title: "Custom AI Models",
            description:
              "We develop custom AI models tailored to your specific business needs, enabling you to solve unique challenges and achieve your goals.",
          },
          {
            title: "Seamless Integration",
            description:
              "Our AI and ML solutions integrate seamlessly with your existing systems, ensuring a smooth transition and maximizing the value of your technology investments.",
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
