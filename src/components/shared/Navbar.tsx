"use client";

import { ibm } from "@/constant/fontFamily";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [isScrolled, setScrolled] = useState(false);
  const pathName = usePathname();
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <motion.div
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`w-full top-0 z-50 transition-all duration-300 border-b-[1px] border-b-grey ${
        isScrolled
          ? "fixed bg-bg1 shadow-lg opacity-95"
          : "absolute bg-transparent"
      }`}
    >
      <nav className="container mx-auto flex justify-between items-center py-3 xl:py-5 2xl:py-7 px-5 xl:px-10 2xl:px-0">
        <div className="flex gap-3">
          <p className="text-base md:text-2xl xl:text-3xl font-medium text-brand1">
            {"</>"}
          </p>
          <motion.p
            initial={{ y: -70 }}
            animate={{ y: 0 }}
            className={`text-base md:text-2xl xl:text-3xl font-medium text-white ${ibm.className}`}
          >
            Meraj Hossain
          </motion.p>
        </div>
        <div className="flex gap-5">
          <Link href={`/`}>
            {" "}
            <p
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
      </nav>
    </motion.div>
  );
};

export default Navbar;
