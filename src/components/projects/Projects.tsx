import React from "react";
import ProjectFilter from "./ProjectFilter";
import SectionTitleHeaderTag from "../ui/SectionTitleHeaderTag";
import Showcase from "./Showcase";

const Projects = () => {
  return (
    <div className="w-full py-20">
      <div className="container mx-auto px-5  2xl:px-0">
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
