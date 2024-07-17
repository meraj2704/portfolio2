import React from 'react';

const SkillButton = ({skillName}:{skillName:string}) => {
    return (
        <button className={`px-2 rounded-lg bg-brand1 text-xs hover:scale-105`}>
            {skillName}
        </button>
    );
};

export default SkillButton;