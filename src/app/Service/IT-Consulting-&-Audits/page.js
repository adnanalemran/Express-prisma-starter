import UniversalPage from "@/components/common/UniversalPage";
import React from "react";
import image from "@/utils/pageSvg/undraw_web_devices_re_m8sc.svg";
import image2 from "@/utils/pageSvg/undraw_organizing_projects_re_9p1k.svg";
const Page = () => {
  const content = {
    title: "IT Consulting & Audits",
    description:
      "Zaimah Technologies offers expert IT consulting and auditing services to help businesses optimize their technology infrastructure and improve operational efficiency. Our tailored solutions provide actionable insights and strategic guidance to enhance your IT systems and drive growth.",
    imageTop: image?.src,
    imageCenter: image2?.src,
    altTextTop: "IT Consulting Illustration",
    altTextCenter: "IT Audits Overview",
    title2: "Our IT Consulting & Audits Services",
    features: [
      {
        title: "Strategic IT Consulting",
        description:
          "Receive expert advice on optimizing your IT infrastructure and processes for better performance and ROI.",
      },
      {
        title: "Comprehensive IT Audits",
        description:
          "Conduct detailed audits to evaluate the efficiency, security, and compliance of your current IT systems.",
      },
      {
        title: "Risk Management & Mitigation",
        description:
          "Identify potential risks and implement strategies to mitigate them, ensuring a secure and resilient IT environment.",
      },
      {
        title: "Technology Roadmap Development",
        description:
          "Develop a strategic roadmap for future technology investments and upgrades to align with your business goals.",
      },
      {
        title: "Process Improvement",
        description:
          "Analyze and refine your IT processes to enhance productivity, reduce costs, and support your business objectives.",
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
