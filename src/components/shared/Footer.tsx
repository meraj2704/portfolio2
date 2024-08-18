import { ibm } from "@/constant/fontFamily";
import React from "react";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaRegCopyright } from "react-icons/fa6";
import Social from "./Social";

const Footer = () => {
  return (
    <div className="bg-bg2 py-10 pb-24 lg:pb-10">
      <hr />
      <div className="container mx-auto px-5 md:px-10 xl:px-0 flex flex-col xl:flex-row justify-between items-center gap-5 mt-5 ">
        <div className="flex gap-2 items-center">
          <FaRegCopyright className="text-base text-white opacity-60" />{" "}
          <p
            className={`text-base text-white opacity-60 text-thin ${ibm.className}`}
          >
            MerajHossain. All Rights reserved.
          </p>
        </div>

        <Social />

        <p
          className={`text-base text-white opacity-60 
            text-thin ${ibm.className}`}
        >
          Developed by{" "}
          <span className="text-brand1 underline">MerajHossain</span>
        </p>
      </div>
    </div>
  );
};

export default Footer;
