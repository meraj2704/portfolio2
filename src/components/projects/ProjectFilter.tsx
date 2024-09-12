"use client";
import { projectData } from "@/constant/projectData";
import {
  handleProjectFilter,
  handleProjectKey,
  RootState,
} from "@/redux/Reducer/MainSlice";
import React, { useEffect } from "react";
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
    dispatch(handleProjectKey(tech));
  };

  useEffect(() => {
    dispatch(handleProjectFilter(projectData));
  }, []);

  useEffect(() => {
    if (keys.length > 0) {
      const filterProjects = projectData.filter((project) =>
        project.tools.some((tool) => keys.includes(tool))
      );
      dispatch(handleProjectFilter(filterProjects));
    } else {
      dispatch(handleProjectFilter(projectData));
    }
  }, [keys]);

  return (
    <div className="flex justify-center items-center py-10 gap-5 flex-wrap">
      {technologies.map((tech) => (
        <button
          key={tech}
          onClick={() => handleSetKeys(tech)}
          className={`w-28 px-4 py-2 rounded shadow z-[50] ${
            keys.includes(tech) ? "bg-brand1 text-bg2" : "bg-grey text-white"
          }`}
        >
          {tech}
        </button>
      ))}
    </div>
  );
};

export default ProjectFilter;
