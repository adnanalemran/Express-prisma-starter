import UniversalPage from "@/components/common/UniversalPage";
import React from "react";
import image from "@/utils/pageSvg/undraw_cloud_hosting_7xb1.svg";
import image2 from "@/utils/pageSvg/undraw_i_can_fly_-7-egl.svg";

const Page = () => {
    const content = {
        title: "Cloud Solutions",
        description:
          "Zaimah Technologies offers comprehensive cloud solutions that empower your business with secure, scalable, and efficient cloud infrastructure. From seamless cloud migration to ongoing management, we ensure your business operations run smoothly in the cloud.",
        imageTop: image.src,
        imageCenter: image2.src,
        altTextTop: "Cloud Infrastructure",
        altTextCenter: "Cloud Management",
        title2: "Why Choose Our Cloud Solutions?",
        features: [
          {
            title: "Seamless Cloud Migration",
            description:
              "We handle the entire cloud migration process, ensuring minimal disruption and a smooth transition to the cloud.",
          },
          {
            title: "Scalable Infrastructure",
            description:
              "Our cloud solutions are designed to scale with your business, providing the flexibility to adjust resources as your needs evolve.",
          },
          {
            title: "Enhanced Security",
            description:
              "We implement robust security measures to protect your data and applications in the cloud, ensuring compliance and peace of mind.",
          },
          {
            title: "Ongoing Management & Support",
            description:
              "Our team provides continuous monitoring, management, and support to keep your cloud infrastructure running at peak performance.",
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
