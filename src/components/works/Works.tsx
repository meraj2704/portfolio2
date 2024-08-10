import React from "react";
import SectionTitleHeaderTag from "../ui/SectionTitleHeaderTag";
import SectionScroll from "../ui/SectionScroll";
import { ProjectsCarousel } from "./ProjectsCarousel";
import ButtonFill from "../ui/ButtonFill";

const Works = () => {
  const aboutBgImage = "/assets/about-bg.jpg";
  return (
    <div
      id="works"
      className="w-full  bg-cover bg-center py-10"
      style={{ backgroundImage: `url(${aboutBgImage})` }}
    >
      <div className="container mx-auto flex flex-col justify-center items-center xl:space-y-20">
        <SectionTitleHeaderTag
          title="Projects"
          content="I am striving to never stop learning and improving"
        />
      </div>
      <div className="flex justify-center items-center">
        <ProjectsCarousel />
      </div>
      <div className="flex justify-center items-center mt-10">
        <ButtonFill content="See All" />
      </div>
    </div>
  );
};

export default Works;
