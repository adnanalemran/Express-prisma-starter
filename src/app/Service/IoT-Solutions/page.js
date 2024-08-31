import UniversalPage from "@/components/common/UniversalPage";
import React from "react";
import image from "@/utils/pageSvg/undraw_circuit_board_re_1b79.svg";
import image2 from "@/utils/pageSvg/undraw_build_your__home_csh6.svg";

const Page = () => {
    const content = {
        title: "IoT Solutions",
        description:
          "Zaimah Technologies offers innovative IoT Solutions that connect devices, collect real-time data, and optimize operations. Our IoT expertise helps businesses harness the power of connected devices to enhance efficiency, improve decision-making, and create smart infrastructure.",
        imageTop: image.src,
        imageCenter: image2.src,
        altTextTop: "IoT Development",
        altTextCenter: "Smart Infrastructure",
        title2: "Why Choose Our IoT Solutions?",
        features: [
          {
            title: "Connected Devices & Smart Systems",
            description:
              "We develop IoT solutions that enable seamless communication between devices, creating smart systems that enhance operational efficiency.",
          },
          {
            title: "Real-Time Data Collection & Analysis",
            description:
              "Our IoT solutions provide real-time data collection and analysis, giving you actionable insights to make informed decisions quickly.",
          },
          {
            title: "Custom IoT Development",
            description:
              "We tailor our IoT solutions to meet your specific business needs, whether it's for smart cities, industrial automation, or consumer products.",
          },
          {
            title: "Scalable and Secure Solutions",
            description:
              "Our IoT platforms are built with scalability and security in mind, ensuring that your systems can grow with your business while staying protected.",
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
