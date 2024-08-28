import React from "react";

import logoImage from "@/utils/images/logo/Asset 1@4x.png";
import logoImage2 from "@/utils/images/logo/dbd.png";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-tertiary dark:bg-gray-900 pt-8 mt-8">
      <div className="container p-6 mx-auto">
        <div className="lg:flex">
          <div className="w-full -mx-6 lg:w-2/5">
            <div className="px-6">
              <Link href="/" className="r">
                <Image src={logoImage} width={150} alt="logo" />
              </Link>
              <p className="max-w-sm mt-2 text-gray-500  text-sm">
                Leading tech industry force, driving innovation and delivering
                cutting-edge solutions
              </p>
              <div className="  flex  items-center ">
                <div className=" font-semibold ">Approved By : </div>{" "}
                <Image src={logoImage2} width={120} alt="logo" />
              </div>
            </div>
          </div>

          <div className="mt-6 lg:mt-0 lg:flex-1">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              <div>
                <h3 className="text-gray-700 uppercase dark:text-white">
                  About
                </h3>
                <a
                  href="#"
                  className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline"
                >
                  Company
                </a>
                <a
                  href="#"
                  className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline"
                >
                  community
                </a>
                <a
                  href="#"
                  className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline"
                >
                  Careers
                </a>
              </div>

              <div>
                <h3 className="text-gray-700 uppercase dark:text-white">
                  Blog
                </h3>
                <a
                  href="#"
                  className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline"
                >
                  Tec
                </a>
                <a
                  href="#"
                  className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline"
                >
                  Music
                </a>
                <a
                  href="#"
                  className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline"
                >
                  Videos
                </a>
              </div>

              <div>
                <h3 className="text-gray-700 uppercase dark:text-white">
                  Products
                </h3>
                <a
                  href="#"
                  className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline"
                >
                  Mega cloud
                </a>
                <a
                  href="#"
                  className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline"
                >
                  Aperion UI
                </a>
                <a
                  href="#"
                  className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline"
                >
                  Meraki UI
                </a>
              </div>

              <div>
                <h3 className="text-gray-700 uppercase dark:text-white">
                  Contact
                </h3>
                <span className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">
                  +1 526 654 8965
                </span>
                <span className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">
                  example@email.com
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t-[1px] pt-3 border-neutral-300 ">
          <p className="text-center text-gray-500 dark:text-gray-400 text-sm">
            Copyright ©2017-2024 Zaimah Technologies Limited. All Rights
            Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
