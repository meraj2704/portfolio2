import React from "react";
import SectionTitleHeaderTag from "../ui/SectionTitleHeaderTag";
import { SkillsTab } from "./SkillsTab";
import SectionScroll from "../ui/SectionScroll";

const Skills = () => {
  return (
    <div id="skills" className="bg-[url('https://i.ibb.co/7bgkY1G/Skills.png')] py-10 xl:py-20">
      <div className="container mx-auto flex flex-col justify-center items-center xl:space-y-20">
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
