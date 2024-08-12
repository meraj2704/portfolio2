import { ibm } from "@/constant/fontFamily";
import React from "react";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaRegCopyright } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="bg-bg2 py-10">
      <hr />
      <div className="container mx-auto px-5 md:px-10 xl:px-0 flex flex-col xl:flex-row justify-between items-center gap-5 mt-5 ">
        <div className="block xl:hidden">
          <div className="flex gap-5">
            <a href="">
              <FaGithub className="text-xl text-brand1" />
            </a>
            <a href="">
              <FaLinkedin className="text-xl text-brand1" />
            </a>
            <a href="">
              <FaInstagram className="text-xl text-brand1" />
            </a>
          </div>
        </div>
        <div className="flex lg:hidden gap-5 lg:gap-10 items-center">
          <p
            className={`text-base text-white opacity-60 text-thin ${ibm.className}`}
          >
            privacy policy
          </p>
          <p
            className={`text-base text-white opacity-60 text-thin ${ibm.className}`}
          >
            Terms & Conditions
          </p>
        </div>
        <div className="flex gap-2 items-center">
          <FaRegCopyright className="text-base text-white opacity-60" />{" "}
          <p
            className={`text-base text-white opacity-60 text-thin ${ibm.className}`}
          >
            MerajHossain. All Rights reserved.
          </p>
        </div>
        <div className="hidden lg:flex gap-5 lg:gap-10 items-center">
          <p
            className={`text-base text-white opacity-60 text-thin ${ibm.className}`}
          >
            privacy policy
          </p>
          <p
            className={`text-base text-white opacity-60 text-thin ${ibm.className}`}
          >
            Terms & Conditions
          </p>
        </div>

        <div className="hidden xl:block">
          <div className="flex gap-5">
            <a href="">
              <FaGithub className="text-xl text-brand1" />
            </a>
            <a href="">
              <FaLinkedin className="text-xl text-brand1" />
            </a>
            <a href="">
              <FaInstagram className="text-xl text-brand1" />
            </a>
          </div>
        </div>
        <p
          className={`text-base text-white opacity-60 text-thin ${ibm.className}`}
        >
          Developed by{" "}
          <span className="text-brand1 underline">MerajHossain</span>
        </p>
      </div>
    </div>
  );
};

export default Footer;
