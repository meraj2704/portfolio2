import React from "react";
import SectionTitleHeaderTag from "../../ui/SectionTitleHeaderTag";
import { SkillsTab } from "./SkillsTab";

const Skills = () => {
  return (
    <div
      id="skills"
      className="py-10 xl:py-20"
    >
      <div className="container mx-auto px-5 flex flex-col justify-center items-center xl:space-y-20">
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
