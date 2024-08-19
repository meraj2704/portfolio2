import React from "react";
import ProjectFilter from "./ProjectFilter";
import SectionTitleHeaderTag from "../ui/SectionTitleHeaderTag";
import Showcase from "./Showcase";

const Projects = () => {
  return (
    <div className="w-full bg-bg1 py-20">
      <div className="container mx-auto px-5 md:px-10 xl:px-0">
        <SectionTitleHeaderTag
          title="Showcase"
          content="I am striving to never stop learning and improving"
        />
        <ProjectFilter />
        <Showcase/>
      </div>
    </div>
  );
};

export default Projects;
