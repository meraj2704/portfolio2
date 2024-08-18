"use client";
import { ibm } from "@/constant/fontFamily";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { MdClose, MdMenu } from "react-icons/md";

const ToggleSidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathName = usePathname();

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <button onClick={toggleSidebar}>
        <MdMenu className="text-2xl md:text-3xl text-white" />
      </button>
      <div
        className={`fixed top-0 right-0 h-full w-full bg-bg2 text-white transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out p-5 md:p-10`}
      >
        <div className="h-full w-full flex flex-col justify-start items-center">
          <div className="w-full flex justify-between items-center">
            <div className="flex items-center gap-3">
              <p className="text-base md:text-2xl xl:text-3xl font-medium text-brand1">
                {"<M/>"}
              </p>
              <p
                className={`text-base md:text-2xl xl:text-3xl font-medium text-white ${ibm.className}`}
              >
                Meraj Hossain
              </p>
            </div>
            <button onClick={toggleSidebar}>
              <MdClose className="text-base md:text-3xl" />
            </button>
          </div>

          <div className="flex-1 flex flex-col justify-start items-center gap-5 mt-16">
            <Link href={`/`}>
              {" "}
              <p
                onClick={toggleSidebar}
                className={`text-base md:text-2xl font-light cursor-pointer ${
                  pathName === "/"
                    ? "text-brand1"
                    : "text-white hover:text-brand1"
                } ${ibm.className}`}
              >
                Home
              </p>
            </Link>
            <Link href={`/blogs`}>
              {" "}
              <p
                onClick={toggleSidebar}
                className={`text-base md:text-2xl font-light cursor-pointer ${
                  pathName.includes("/blogs")
                    ? "text-brand1"
                    : "text-white hover:text-brand1"
                } ${ibm.className}`}
              >
                Blogs
              </p>
            </Link>
            <Link href={`/projects`}>
              {" "}
              <p
                onClick={toggleSidebar}
                className={`text-base md:text-2xl font-light cursor-pointer ${
                  pathName.includes("/projects")
                    ? "text-brand1"
                    : "text-white hover:text-brand1"
                } ${ibm.className}`}
              >
                Projects
              </p>
            </Link>
          </div>

          <div className="flex gap-5 pb-10">
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
      </div>
    </div>
  );
};

export default ToggleSidebar;
