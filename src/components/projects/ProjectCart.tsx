import { ubuntu } from "@/constant/fontFamily";
import Image from "next/image";
import React from "react";

interface ItemI {
  name: string;
  image: string;
  details: string;
  link: string;
  tools: string[];
}
interface ProjectCartI {
  item: ItemI;
}

const ProjectCart = ({ item }: ProjectCartI) => {
  return (
    <div className="w-full border rounded-md border-gray-500 bg-bg2">
      <div className="w-full h-52 md:h-72 group cursor-pointer relative text-white">
        <Image
          src={item.image}
          height={600}
          width={700}
          alt="Project cart image"
          className="absolute rounded-md w-full h-full object-cover top-0 left-0 transition-opacity duration-300 ease-out"
        />
        <div className="absolute w-full h-full rounded-md bg-black opacity-0 z-10 transition-opacity duration-200 ease-out group-hover:opacity-60"></div>
        <div className="flex flex-col justify-center items-center absolute bottom-[-100px] left-[50%] translate-x-[calc(-50%)] transition-bottom duration-300 ease-out  z-30 group-hover:bottom-[40%] ">
          <h2
            className={`text-2xl lg:text-5xl font-bold z-6 whitespace-nowrap uppercase text-[#F5F5F5] group-hover:opacity-70 ${ubuntu.className}`}
          >
            {item.name}
          </h2>
          <a href={item.link} target="blank">
            <h2 className="text-base lg:text-xl z-6 whitespace-nowrap text-[#F5F5F5] mt-5 underline text-brand1">
              Visit
            </h2>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCart;
