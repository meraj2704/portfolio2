"use client";
import { projectData } from "@/constant/projectData";
import { useParams } from "next/navigation";
import React from "react";
import ProfileContact from "./ProfileContact";
import Image from "next/image";
import SubImageCarousel from "./SubImageCarousel";
import MSign from "../shared/MSign";
import Social from "../shared/Social";
import Link from "next/link";

const ProjectDetails = () => {
  const params = useParams();
  const { id } = params;
  const item = projectData.find((data) => data.id === id);
  console.log(item);
  return (
    <div
      className="w-full pb-20"
    >
      <div className="max-w-5xl mx-auto ">
        <div
          className={`w-full max-w-5xl z-50 px-5 xl:px-0 py-5 lg:pt-8`}
        >
          <div className="max-w-5xl flex justify-between items-center">
            <div className="flex flex-col justify-start items-start space-y-4">
              <h1 className="text-2xl lg:text-3xl font-semibold text-white">
                {item?.name}
              </h1>
              <ProfileContact />
            </div>
            <a href={item?.link} target="blank">
              <button className="px-4 py-2 w-28 text-bg1 bg-brand2 rounded-full hover:scale-105">
                Live
              </button>
            </a>
          </div>
        </div>
        <div className="">
          <div className="w-full h-[220px] md:h-[350px] lg:h-[500px]">
            <Image
              src={item?.image || ""}
              alt={item?.name || ""}
              width={700}
              height={400}
              className="w-full h-full"
            />
          </div>
          <div className="w-full mt-5">
            <SubImageCarousel subImages={item?.subImages} />
          </div>
          <div className="w-full items-center mt-10 px-5 xl:px-0">
            <div className="flex flex-col items-start">
              <h2 className="text-xl font-bold text-white">Tools Used :</h2>
              <div className=" flex flex-col justify-start items-start pl-5">
                {item?.tools.map((tool, index) => (
                  <li key={index} className="text-base font-thin text-white">
                    {tool}
                  </li>
                ))}
              </div>
            </div>
            <div className="flex flex-col items-start mt-4">
              <h2 className="text-xl font-bold text-white">Project details :</h2>
              <p className="text-start text-base text-white">{item?.details}</p>
            </div>
          </div>
          <div className="flex justify-between items-center gap-5 my-10">
            <hr className="flex-1" />
            <div className="px-2 py-2 bg-bg2 rounded-full">
              <MSign />
            </div>{" "}
            <hr className="flex-1" />
          </div>
          <div className="flex justify-center items-center gap-4 md:gap-6 lg:gap-10">
            <div className="bg-bg2 py-2 px-4 rounded-full">
              <Social />
            </div>
            <Link href={"/"}>
              <h1 className="text-white text-base hover:text-brand1">Home</h1>
            </Link>
            <Link href={"/"}>
              <h1 className="text-white text-base hover:text-brand1">Projects</h1>
            </Link>
            <Link href={"/"}>
              <h1 className="text-white text-base hover:text-brand1">Blogs</h1>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
