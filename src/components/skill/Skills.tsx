import React from "react";
import SectionTitleHeaderTag from "../ui/SectionTitleHeaderTag";
import SectionHeader from "../ui/SectionScroll";
import { SkillsTab } from "./SkillsTab";

const Skills = () => {
  return (
    <div className="bg-[url('https://i.ibb.co/7bgkY1G/Skills.png')] py-10 xl:py-20">
      <div className="container mx-auto flex flex-col justify-center items-center xl:space-y-20">
        <div className="hidden xl:block">
          <SectionHeader />
        </div>
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
