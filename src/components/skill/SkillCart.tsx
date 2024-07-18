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
    <div className="col-span-1 flex justify-center items-center">
      <div
      style={{ backgroundColor: skill.color }}
        className={`w-36 h-36 flex justify-center items-center rounded-full`}
      >
        <skill.icon className='text-6xl text-white'/>
      </div>
    </div>
  );
};

export default SkillCart;
