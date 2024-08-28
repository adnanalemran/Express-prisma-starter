import SecTitle from "@/components/common/SecTitle";
import React from "react";
import { PiUserSwitchFill } from "react-icons/pi";
import image from "@/utils/images/large/about.webp";
import { MdWorkspacesOutline } from "react-icons/md";
import Member from "@/components/pages/About/Member";
import jabedLargeImage from "@/utils/images/person/jabedfull.jpeg";
const page = () => {
  return (
    <div className="min-h-100 container mx-auto lg:pt-16 pt-6 p-4 ">
      <SecTitle title="ABOUT US   " subtitle="" />

      <div className="flex flex-col lg:flex-row lg:gap-16">
        <div className="w-full lg:w-1/2">
          <p className="text-justify">
            We are a software development company that specializes in creating
            custom software solutions for businesses and organizations of all
            sizes. Our team of skilled developers and designers are dedicated to
            delivering high-quality software products and services that help our
            clients achieve their goals. We are passionate about technology and
            innovation, and we are committed to helping our clients succeed in
            the digital age.
          </p>
          <div className="flex lg:flex-row flex-col justify-between lg:mt-54 py-10 lg:py-0">
            <div className="flex flex-col lg:flex-row items-center lg:gap-4 gap-1 ">
              <div className="lg:text-3xl bg-primary p-3 rounded-full text-white">
                <MdWorkspacesOutline />
              </div>
              <div className="whitespace-nowrap">
                Total Operations: <span className="font-bold">10k+</span>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row items-center lg:gap-4 gap-1 ">
              <div className="lg:text-3xl bg-primary p-3 rounded-full text-white">
                <PiUserSwitchFill />
              </div>
              <div className="whitespace-nowrap">
                Total Clients: <span className="font-bold"> 300+ </span>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row items-center lg:gap-4 gap-1 ">
              <div className="lg:text-3xl bg-primary p-3 rounded-full text-white">
                <PiUserSwitchFill />
              </div>
              <div className="whitespace-nowrap">
                Total Clients: <span className="font-bold"> 300+ </span>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-1/2">
          <img src={image.src} alt="about" className="w-full rounded-xl" />
        </div>
      </div>

      <div className="py-24">
        <div className="flex justify-between lg:gap-8 flex-col lg:flex-row ">
          <div className="w-full lg:w-2/6 ">
            <img
              src={jabedLargeImage.src}
              alt="Jabed"
              className=" rounded-xl lg:w-100 w-32"
            />
          </div>
          <div className="w-full lg:w-4/6 rounded-xl ">
            <h2 className="text-end lg:text-3xl text-2xl font-bold">
              Voice of the CEO
            </h2>{" "}
            <p className="  text-justify py-8 ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget
              semLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              eget semLorem ipsum dolor sit amet, consectetur adipiscing elit.
              Sed eget semLorem ipsum dolor sit amet, consectetur adipiscing
              elit. Sed eget semLorem ipsum dolor sit amet, consectetur
              adipiscing elit. Sed eget semLorem ipsum dolor sit amet,
              consectetur adipiscing elit. Sed eget semLorem ipsum dolor sit
              amet, consectetur adipiscing elit. Sed eget semLorem ipsum dolor
              sit amet, consectetur adipiscing elit. Sed eget semLorem ipsum
              dolor sit amet, consectetur adipiscing elit. Sed eget semLorem
              ipsum dolor sit amet, consectetur adipiscing elit. Sed eget
              semLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              eget semLorem ipsum dolor sit amet, consectetur adipiscing elit.
              Sed eget sem
            </p>
            <p className="text-end"> Jabed Akhter</p>
            <p className="text-end"> CEO of ZTL</p>
          </div>
        </div>
      </div>

      <h2 className="text-3xl text-center font-bold">Our Team</h2>
      <p className="text-center">
        Meet the talented individuals who make up our team
      </p>

      <div className="pt-4 pb-16 grid lg:grid-cols-4  grid-cols-1 lg:gap-4 gap-2">
        <Member name="John Doe" designation="CEO" />
        <Member name="John Doe" designation="CEO" />
        <Member name="John Doe" designation="CEO" />
        <Member name="John Doe" designation="CEO" />
      </div>

      <div>
        <div className="  container mx-auto ">
          <h2 className="text-3xl font-semibold text-center text-gray-800 mb-8">
            How We Work
          </h2>
          <div className="space-y-4">
            <section>
              <h3 className="text-sm font-bold text-gray-700">
                Discovery & Analysis
              </h3>
              <p className="mt-1 lg:text-lg text-sm text-slate-600 ">
                We start by understanding your business goals, defining the
                project scope, budget, and timeline, and identifying potential
                challenges.
              </p>
            </section>

            <section>
              <h3 className="text-sm font-bold text-gray-700">
                Design & Development
              </h3>
              <p className="mt-1 lg:text-lg text-sm text-slate-600 ">
                Using agile methodology, we design and develop the solution in
                stages, delivering prototypes to ensure alignment with your
                needs.
              </p>
            </section>

            <section>
              <h3 className="text-sm font-bold text-gray-700">
                Testing & Quality Assurance
              </h3>
              <p className="mt-1 lg:text-lg text-sm text-slate-600 ">
                We rigorously test throughout the process, focusing on
                functionality, user experience, and accessibility, making
                adjustments based on feedback.
              </p>
            </section>

            <section>
              <h3 className="text-sm font-bold text-gray-700">
                Deployment & Support
              </h3>
              <p className="mt-1 lg:text-lg text-sm text-slate-600 ">
                After deployment, we provide ongoing support, maintenance,
                training, and documentation to ensure smooth operation.
              </p>
            </section>

            <section>
              <h3 className="text-sm font-bold text-gray-700">
                Communication & Transparency
              </h3>
              <p className="mt-1 lg:text-lg text-sm text-slate-600 ">
                We maintain clear communication and transparency, keeping you
                informed and involved at every stage.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
