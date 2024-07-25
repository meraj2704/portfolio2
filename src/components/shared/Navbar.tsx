// components/Navbar.tsx
"use client";

import { ibm } from "@/constant/fontFamily";
import React, { useEffect, useState } from "react";


import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";



const Navbar = () => {
  const [isScrolled, setScrolled] = useState(false);
  const [selectedBar, setSelectedBar] = useState("Home");

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
    <div
      className={`w-full top-0 z-50 transition-all duration-300 border-b-[1px] border-b-grey ${
        isScrolled ? "fixed bg-bg1 shadow-lg opacity-95" : "absolute bg-transparent"
      }`}
    >
      <nav className="container mx-auto flex justify-between items-center py-3 xl:py-5 2xl:py-7 px-5 xl:px-10 2xl:px-0">
        <div className="flex gap-3">
          <p className="text-base md:text-2xl xl:text-3xl font-medium text-brand1">
            {"</>"}
          </p>
          <p
            className={`text-base md:text-2xl xl:text-3xl font-medium text-white ${ibm.className}`}
          >
            Meraj Hossain
          </p>
        </div>
        <div className="flex gap-5">
          <p
            onClick={() => setSelectedBar("Home")}
            className={`text-base md:text-2xl font-light cursor-pointer ${
              selectedBar === "Home" ? "text-brand1" : "text-white hover:text-brand1"
            } ${ibm.className}`}
          >
            Home
          </p>
          <p
            onClick={() => setSelectedBar("Blogs")}
            className={`text-base md:text-2xl font-light cursor-pointer ${
              selectedBar === "Blogs" ? "text-brand1" : "text-white hover:text-brand1"
            } ${ibm.className}`}
          >
            Blogs
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
      </nav>
    </div>
  );
};

export default Navbar;
