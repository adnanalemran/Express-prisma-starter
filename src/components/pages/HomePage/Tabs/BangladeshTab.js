import React from "react";
import bgImage from "@/utils/images/svg/bd.svg"; // Correct import for an image
import ButtonPrimary from "@/components/common/ButtonPrimary";

const BangladeshTab = () => {
  return (
    <div
      className="hero   rounded-lg bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${bgImage.src})`,
      }}
    >
      <div className="hero-content text-neutral-content">
        <div className="text-black   p-6  ">
          <h2 className="text-3xl font-bold">
            ZTL - Headquarters in <span className="font-bold">Bangladesh</span>
          </h2>
          <p className="py-6">
            At ZTL, we pride ourselves on delivering cutting-edge technology
            solutions tailored to meet our clients&apos; needs. Our commitment
            to innovation and excellence has earned us a reputation as a trusted
            partner in the IT industry. We specialize in a wide range of
            services, including software development, IT consulting, and system
            integration.
          </p>
          <div className="flex flex-col md:flex-row md:justify-between">
            <div className="py-6 md:w-1/2">
              <p>
                <strong>Total Operations:</strong> 10k+
              </p>
              <p>
                <strong>Total Clients:</strong> 300+
              </p>
              <p>
                <strong>Team Members:</strong> 15+
              </p>
              <p>
                <strong>Projects Completed:</strong> 500+
              </p>
              <p>
                <strong>Industries Served:</strong> 20+
              </p>
              <p>
                <strong>Years in Business:</strong> 8+
              </p>
            </div>
            <div className="py-6 md:w-1/2">
              <h3 className="text-xl font-semibold">Our Expertise:</h3>
              <ul className="list-disc list-inside mt-4">
                <li>Custom Software Development</li>
                <li>Web and Mobile Applications</li>
                <li>IT Consulting and Strategy</li>
                <li>System Integration</li>
                <li>Cloud Solutions</li>
              </ul>
            </div>
          </div>
          <div className="flex justify-end">
            <ButtonPrimary text="Contact Us" sideLink="/" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BangladeshTab;
