import UniversalPage from "@/components/common/UniversalPage";
import React from "react";
import image from "@/utils/pageSvg/undraw_different_love_a-3-rg.svg";
import image2 from "@/utils/pageSvg/undraw_active_support_re_b7sj.svg";

const Page = () => {
    const content = {
        title: "Technical Support & System Maintenance",
        description:
          "Zaimah Technologies provides reliable Technical Support and System Maintenance services to keep your business operations running smoothly. Our proactive approach ensures your IT systems are always optimized, secure, and up-to-date.",
        imageTop: image.src,
        imageCenter: image2.src,
        altTextTop: "Technical Support",
        altTextCenter: "System Maintenance",
        title2: "Why Choose Our Technical Support & System Maintenance?",
        features: [
          {
            title: "24/7 Support Services",
            description:
              "Our dedicated support team is available around the clock to assist with any technical issues, ensuring minimal downtime and swift resolution.",
          },
          {
            title: "Proactive System Monitoring",
            description:
              "We continuously monitor your IT systems to detect and resolve potential issues before they escalate, keeping your operations running efficiently.",
          },
          {
            title: "Regular System Updates & Patching",
            description:
              "We ensure that your systems are always up-to-date with the latest security patches and software updates, reducing vulnerabilities and enhancing performance.",
          },
          {
            title: "Customized Maintenance Plans",
            description:
              "Our maintenance plans are tailored to meet your specific needs, providing the right level of support to keep your systems in peak condition.",
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
