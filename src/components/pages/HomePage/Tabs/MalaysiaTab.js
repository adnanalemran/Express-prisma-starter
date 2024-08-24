import React from "react";
import bgImage from "@/utils/images/svg/th.svg"; /// Correct import for an image
import ButtonPrimary from "@/components/common/ButtonPrimary";

const MalaysiaPartnerOffice = () => {
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
            ZTL - Partner Office in <span className="font-bold">Malaysia</span>
          </h2>
          <p className="py-6">
            Our partner office in Malaysia plays a crucial role in extending our
            reach and capabilities across Southeast Asia. By collaborating with
            local experts, we ensure that our clients receive tailored solutions
            that address their specific needs while leveraging our global
            expertise.
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
              <h3 className="text-xl font-semibold">Areas of Collaboration:</h3>
              <ul className="list-disc list-inside mt-4">
                <li>Market Expansion Strategies</li>
                <li>Joint Ventures and Alliances</li>
                <li>Local IT Solutions</li>
                <li>Shared Technology Resources</li>
                <li>Regional Business Development</li>
              </ul>
            </div>
          </div>
          <ButtonPrimary text="Contact Us" sideLink="/" />
        </div>
      </div>
    </div>
  );
};

export default MalaysiaPartnerOffice;
