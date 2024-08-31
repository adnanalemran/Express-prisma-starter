import UniversalPage from "@/components/common/UniversalPage";
import React from "react";
import image from "@/utils/pageSvg/undraw_security_on_re_e491.svg";
import image2 from "@/utils/pageSvg/undraw_mobile_encryption_re_yw3o.svg";

const Page = () => {
    const content = {
        title: "Cybersecurity & Data Protection",
        description:
          "At Zaimah Technologies, we prioritize the security of your business. Our Cybersecurity and Data Protection services are designed to safeguard your digital assets with advanced threat detection, real-time response, and comprehensive data protection measures.",
        imageTop: image.src,
        imageCenter: image2.src,
        altTextTop: "Cybersecurity Services",
        altTextCenter: "Data Protection",
        title2: "Why Choose Our Cybersecurity & Data Protection Services?",
        features: [
          {
            title: "Advanced Threat Detection",
            description:
              "We deploy state-of-the-art technologies to identify and neutralize potential threats before they can impact your business.",
          },
          {
            title: "Real-Time Response",
            description:
              "Our security team is always on alert, ready to respond to incidents in real-time, minimizing damage and ensuring business continuity.",
          },
          {
            title: "Comprehensive Data Protection",
            description:
              "We implement robust data protection strategies, including encryption, backup, and recovery solutions to safeguard your critical information.",
          },
          {
            title: "Compliance & Risk Management",
            description:
              "Our services ensure that your business meets industry-specific compliance requirements, reducing risks and protecting your reputation.",
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
