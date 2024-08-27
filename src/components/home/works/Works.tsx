import React from "react";

import { ProjectsCarousel } from "./ProjectsCarousel";
import SectionTitleHeaderTag from "@/components/ui/SectionTitleHeaderTag";
import ButtonFill from "@/components/ui/ButtonFill";
import Link from "next/link";

const Works = () => {
  const aboutBgImage = "/assets/about-bg.jpg";
  return (
    <div
      id="works"
      className="w-full py-10"
      // style={{ backgroundImage: `url(${aboutBgImage})` }}
    >
      <div className="container mx-auto px-5  2xl:px-0 flex flex-col justify-center items-center xl:space-y-20">
        <SectionTitleHeaderTag
          title="Projects"
          content="I am striving to never stop learning and improving"
        />
      </div>
      <div className="flex justify-center items-center">
        <ProjectsCarousel />
      </div>
      <div className="flex justify-center items-center mt-10">
        <Link href="/projects">
          <ButtonFill content="See All" />
        </Link>
      </div>
    </div>
  );
};

export default Works;
