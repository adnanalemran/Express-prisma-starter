 
import UniversalPage from "@/components/common/UniversalPage";
import React from "react";
import image from "@/utils/pageSvg/undraw_messaging_7ho8.svg";
import image2 from "@/utils/pageSvg/undraw_web_devices_re_m8sc.svg";

const Page = () => {
  const content = {
    title: "Custom Software Solutions & Enterprise Software",
    description:
      "At Zaimah Technologies, we specialize in delivering tailor-made software solutions designed to meet the unique needs of your business. Our expertise spans across web, mobile, and enterprise-level systems, ensuring seamless integration and exceptional performance.",
    imageTop: image.src,
    imageCenter: image2.src,
    altTextTop: "Custom Software Development",
    altTextCenter: "Enterprise Solutions",
    title2: "Why Choose Our Custom Software Solutions?",
    features: [
      {
        title: "Tailored Development",
        description:
          "We provide bespoke software development services to ensure that the solutions align perfectly with your business goals and requirements.",
      },
      {
        title: "Scalable Architecture",
        description:
          "Our software solutions are built with scalability in mind, enabling your systems to grow and adapt with your business.",
      },
      {
        title: "Integration Capabilities",
        description:
          "We design and develop software that integrates seamlessly with your existing systems, ensuring smooth operations and enhanced efficiency.",
      },
      {
        title: "Ongoing Support & Maintenance",
        description:
          "Our commitment to your success includes providing continuous support and maintenance to keep your systems running optimally.",
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
