import React from "react";
import bgImage from "@/utils/images/svg/th.svg"; // Correct import for an image
import ButtonPrimary from "@/components/common/ButtonPrimary";
const Thaitab = () => {
  return (
    <div
      className="hero  rounded-lg bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${bgImage.src})`,
      }}
    >
      <div className="hero-content text-neutral-content">
        <div className="text-black   p-6  ">
          <h2 className="text-3xl font-bold">
            ZTL - Branch Office in <span className="font-bold">Thailand</span>
          </h2>
          <p className="py-6">
            Our Thailand branch is dedicated to expanding our presence in
            Southeast Asia. We focus on delivering high-quality IT solutions and
            fostering strong partnerships in the region. Our local expertise and
            global vision enable us to address the unique challenges and
            opportunities within the Thai market.
          </p>
          <div className="flex flex-col md:flex-row md:justify-between">
            <div className="py-6 md:w-1/2">
              <p>
                <strong>Total Operations:</strong> 5k+
              </p>
              <p>
                <strong>Total Clients:</strong> 150+
              </p>
              <p>
                <strong>Team Members:</strong> 10+
              </p>
              <p>
                <strong>Projects Completed:</strong> 150+
              </p>
              <p>
                <strong>Industries Served:</strong> 10+
              </p>
              <p>
                <strong>Years in Business:</strong> 1+
              </p>
            </div>
            <div className="py-6 md:w-1/2">
              <h3 className="text-xl font-semibold">Our Expertise:</h3>
              <ul className="list-disc list-inside mt-4">
                <li>Local IT Solutions</li>
                <li>Business Process Optimization</li>
                <li>Custom Software Development</li>
                <li>IT Infrastructure Management</li>
                <li>Consulting Services</li>
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

export default Thaitab;
