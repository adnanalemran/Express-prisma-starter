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
              A technology leader driving innovation and delivering cutting-edge software development solutions.
              </p>
            </div>
          </div>

          <div className="my-6 lg:mt-0 lg:flex-1">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              <div>
                <h3 className="text-gray-700 uppercase dark:text-white">
                Company
                </h3>
                <Link 
                  href="/about"
                  className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline"
                >
              About Us
                </Link>
                <a
                  href="/contact"
                  className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline"
                >
                  Contact Us
                </a>
              
              </div>

              <div>
                <h3 className="text-gray-700 uppercase dark:text-white">
                Our Sister Concern
                </h3>
                <a
                  href="#"
                  className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline"
                >
                DiziLab
                </a>
                <a
                  href="#"
                  className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline"
                >
                LearnByZ
                </a>
              
              </div>

              <div>
                <h3 className="text-gray-700 uppercase dark:text-white">
                  Products
                </h3>
               
                <a
                  href="https://apartpro.xyz"
                  className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline"
                >
                 Apart Pro 
                </a>
                <a
                  href="https://hrbee.xyz"
                  className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline"
                >
                HR Bee
                </a>
              </div>

              <div className=" flex items-end">
                <div className="  flex  items-end ">
                  <Image src={logoImage2} width={120} alt="logo" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t-[1px] pt-3 border-neutral-300 ">
          <p className="text-center text-gray-500 dark:text-gray-400 text-sm">
            Copyright ©2017-2024 ZAIMAH TECHNOLOGIES (THAILAND) CO., LTD. All Rights
            Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
