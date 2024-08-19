"use client";
import { projectData } from "@/constant/projectData";
import { handleProjectFilter, RootState } from "@/redux/Reducer/MainSlice";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProjectCart from "./ProjectCart";

const Showcase = () => {
  const projects = useSelector((state: RootState) => state.Initial.projects);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
      {projects.map((project, index) => (
        <div key={index} className="col-span-1 w-full">
          <ProjectCart item={project} />
        </div>
      ))}
    </div>
  );
};

export default Showcase;
