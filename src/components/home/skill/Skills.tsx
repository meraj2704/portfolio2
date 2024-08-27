import React from "react";
import SectionTitleHeaderTag from "../../ui/SectionTitleHeaderTag";
import { SkillsTab } from "./SkillsTab";
import SectionScroll from "../../ui/SectionScroll";
import StarsCanvas from "@/components/test/StarCanvas";

const Skills = () => {
  return (
    <div
      id="skills"
      className="py-10 xl:py-20"
    >
      <div className="container mx-auto px-5  2xl:px-0 flex flex-col justify-center items-center xl:space-y-20">
        <SectionTitleHeaderTag
          title="Skills"
          content="I am striving to never stop learning and improving"
        />
        <SkillsTab />
      </div>
    </div>
  );
};

export default Skills;
