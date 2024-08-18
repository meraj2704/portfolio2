"use client";
import { handleProjectKey, RootState } from "@/redux/Reducer/MainSlice";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

const ProjectFilter = () => {
  const keys = useSelector((state: RootState) => state.Initial.projectKeys);
  const dispatch = useDispatch();
  const technologies = [
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Express",
    "MongoDB",
  ];

  const handleSetKeys = (tech: string) => {
    dispatch(handleProjectKey(tech))
  };

  return (
    <div className="flex justify-center items-center py-10 gap-5 flex-wrap">
      {technologies.map((tech) => (
        <button
          key={tech}
          onClick={() => handleSetKeys(tech)}
          className={`w-28 px-4 py-2 rounded shadow ${
            keys.includes(tech)
              ? "bg-brand1 text-bg2"
              : "bg-grey text-white hover:bg-brand1 hover:text-bg2"
          }`}
        >
          {tech}
        </button>
      ))}
    </div>
  );
};

export default ProjectFilter;
