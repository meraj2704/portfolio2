"use client";

import { ibm } from "@/constant/fontFamily";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ToggleSidebar from "./ToggleSidebar";
import Social from "./Social";
import MSign from "./MSign";

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
    <div
      className={`w-full top-0 z-[10] transition-all duration-300 border-b-[1px] border-b-grey ${
        isScrolled
          ? "fixed bg-bg1 shadow-lg opacity-95"
          : "absolute bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-5 2xl:px-0 flex justify-between items-center py-3">
        <div className="flex items-center gap-3">
          <MSign />
          <p
            className={`text-base md:text-2xl xl:text-3xl font-medium text-white ${ibm.className}`}
          >
            Meraj Hossain
          </p>
        </div>
        <div className="hidden lg:flex gap-5">
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
          {/* <Link href={`/blogs`}>
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
          </Link> */}
        </div>
        <div className="block lg:hidden">
          <ToggleSidebar />
        </div>
        <div className="hidden xl:block">
          <Social />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
