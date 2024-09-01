import { useState } from "react";
import Modal from "react-modal";
import {
  AiOutlineClose,
  AiOutlineHome,
  AiOutlineDeploymentUnit,
} from "react-icons/ai";

import { MdConnectWithoutContact } from "react-icons/md";
import Link from "next/link";
import { BsGlobeEuropeAfrica } from "react-icons/bs";
import { LuMenu } from "react-icons/lu";
import { LanguageSwitcher } from "../LanguageSwitcher";

const NavMobile = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div>
      <div className="flex gap-2">
        <LanguageSwitcher />
        <button
          onClick={openModal}
          href="/demo"
          className="lg:hidden flex font-light  border-0 "
        >
          <span className="font-semibold text-black text-2xl ">
            <LuMenu />
          </span>
        </button>
      </div>

      <div className="w-full  px-3 z-[500] uppercase ">
        <Modal
          data-aos="fade-down"
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          contentLabel="Example Modal"
          className="w-full  max-w-lg mx-auto bg-white py-2 rounded-lg shadow-lg z-40 transition transform lg:hidden"
          overlayClassName="fixed shadow inset-0 bg-black bg-opacity-50 flex justify-center   z-40 "
          style={{
            content: {
              margin: "5px",
              padding: "20px",
              paddingTop: "10px",
              borderRadius: "8px",
              backgroundColor: "white",
              width: "100%",
              height: "60vh",
              position: "relative",
              top: "1px",
              overflow: "auto",
              WebkitOverflowScrolling: "touch",
              outline: "none",
              zIndex: "40",
            },
          }}
        >
          <div>
            <div className="flex  justify-between items-start">
              <button onClick={closeModal} className="text-xl pb-3"></button>
              <div className="text-2xl pt-2 text-[#090c0e] cursor-pointer">
                <AiOutlineClose onClick={closeModal} className="w-5" />
              </div>
            </div>
            <ul className="grid grid-cols-2 mt-4 gap-4 text-neutral-800 uppercase ">
              <li onClick={closeModal} className="p-4 bg-[#30b3ff0e] rounded">
                <Link href="/" className="  flex items-center text-sm ">
                  <AiOutlineHome className="mr-2 text-brandColor text-xl uppercase " />
                  Home
                </Link>
              </li>

              <li onClick={closeModal} className="p-4 bg-[#30b3ff0e] rounded">
                <Link href="/partners" className="  flex items-center text-sm ">
                  <BsGlobeEuropeAfrica className="mr-2 text-brandColor text-xl" />
                  Partners
                </Link>
              </li>

              <li onClick={closeModal} className="p-4 bg-[#30b3ff0e] rounded">
                <Link href="about" className="  flex items-center text-sm ">
                  <AiOutlineDeploymentUnit className="mr-2 text-brandColor text-xl" />
                  About us
                </Link>
              </li>
              <li onClick={closeModal} className="p-4 bg-[#30b3ff0e] rounded">
                <Link href="contact" className="  flex items-center text-sm ">
                  <MdConnectWithoutContact className="mr-2 text-brandColor text-xl" />
                  Contact us
                </Link>
              </li>
            </ul>
            <div className="py-8">
              <div className="  border-b-[.2px] col-span-2 mb-1  " />
              <div className="grid grid-cols-2 gap-4 text-sm py-6">
                <div className="">Terms & Condition </div>
                <div className=""> Privacy Policy</div>
              </div>
            </div>
          </div>
        </Modal>
      </div>
    </div>
  );
};

export default NavMobile;
