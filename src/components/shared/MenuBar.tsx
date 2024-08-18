"use client";
import React, { useState } from "react";
import { MdDashboard } from "react-icons/md";
import { FaProjectDiagram } from "react-icons/fa";
import { FcAbout } from "react-icons/fc";
import { ImBlog } from "react-icons/im";
import { MdOutlineConnectWithoutContact } from "react-icons/md";
import { GiSkills } from "react-icons/gi";
import { AiOutlineExclamationCircle } from "react-icons/ai";


const MenuBar = () => {
  const [path, setPath] = useState("home");

  const handleScroll = (sectionId: string, pathName: string) => {
    setPath(pathName);
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="fixed px-2 bottom-6 lg:left-5 right-1/2 lg:top-1/2 transform translate-x-1/2 lg:-translate-y-1/2 w-80 lg:w-16 h-12 lg:h-96 flex flex-row lg:flex-col justify-between items-center rounded-full border border-white bg-bg2">
      <div
        onClick={() => handleScroll("home", "home")}
        className={`my-4 p-2 rounded-full ${
          path === "home" ? "bg-brand1 text-bg2" : "transparent text-white"
        }`}
      >
        <MdDashboard />
      </div>
      <div
        onClick={() => handleScroll("about", "about")}
        className={`my-4 p-2 rounded-full ${
          path === "about" ? "bg-brand1 text-bg2" : "transparent text-white"
        }`}
      >
        <AiOutlineExclamationCircle />
      </div>
      <div
        onClick={() => handleScroll("skills", "skills")}
        className={`my-4 p-2 rounded-full ${
          path === "skills" ? "bg-brand1 text-bg2" : "transparent text-white"
        }`}
      >
        <GiSkills />
      </div>
      <div
        onClick={() => handleScroll("works", "works")}
        className={`my-4 p-2 rounded-full ${
          path === "works" ? "bg-brand1 text-bg2" : "transparent text-white"
        }`}
      >
        <FaProjectDiagram />
      </div>
      <div
        onClick={() => handleScroll("blogs", "blogs")}
        className={`my-4 p-2 rounded-full ${
          path === "blogs" ? "bg-brand1 text-bg2" : "transparent text-white"
        }`}
      >
        <ImBlog />
      </div>
      <div
        onClick={() => handleScroll("contact", "contact")}
        className={`my-4 p-2 rounded-full ${
          path === "contact" ? "bg-brand1 text-bg2" : "transparent text-white"
        }`}
      >
        <MdOutlineConnectWithoutContact />
      </div>
    </div>
  );
};

export default MenuBar;
