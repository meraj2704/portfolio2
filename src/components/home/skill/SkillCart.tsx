import React from "react";
interface Skill {
  name: string;
  color: string;
  icon: any;
}
interface SkillCartProps {
  skill: Skill; // this prop will receive the skill object from the parent component (Skills.tsx)
}
const SkillCart = ({ skill }: SkillCartProps) => {
  return (
    <div className="col-span-1 flex gap-1 xl:gap-2 flex-col justify-start items-center transition-all hover:scale-105 hover:rotate-2">
      <div
        style={{ backgroundColor: skill.color }}
        className={`w-16 h-16 md:w-24 md:h-24 2xl:w-36 2xl:h-36 flex justify-center items-center rounded-full`}
      >
        <skill.icon className="text-2xl md:text-3xl 2xl:text-6xl text-white" />
      </div>
      <p
        style={{}}
        className={`text-lg text-brand2 md:text-3x 2xl:text-4xl text-center`}
      >
        {skill.name}
      </p>
    </div>
  );
};

export default SkillCart;
