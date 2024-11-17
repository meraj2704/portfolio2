import React from "react";
import ProfileContact from "./ProfileContact";
import Image from "next/image";
import MSign from "../shared/MSign";
import Social from "../shared/Social";
import Link from "next/link";
import SubImageCarousel from "./SubImageCarousel";

interface ItemI {
  name: string;
  image: string;
  details: string;
  link: string;
  tools: string[];
  subImages?: [];
}
interface ProjectCartI {
  item: ItemI;
}

const DialogAllContent = ({ item }: ProjectCartI) => {
  return (
    <div
      style={{ height: "calc(100vh - 5rem)" }}
      className="bg-white w-full overflow-y-scroll rounded-t-lg pb-20"
    >
      <div className="max-w-5xl mx-auto ">
        <div
          className={`w-full max-w-5xl z-50 fixed px-5 xl:px-0 bg-white py-5 lg:py-10`}
        >
          <div className="max-w-5xl flex justify-between items-center">
            <div className="flex flex-col justify-start items-start space-y-4">
              <h1 className="text-2xl lg:text-3xl font-semibold text-bg2">
                {item.name}
              </h1>
              <ProfileContact />
            </div>
            <a href={item.link} target="blank">
              <button className="px-4 py-2 w-28 text-white bg-bg2 rounded-full hover:scale-105">
                Live
              </button>
            </a>
          </div>
        </div>
        <div className="pt-36 lg:pt-48">
          <div className="w-full h-[220px] md:h-[350px] lg:h-[500px]">
            <Image
              src={item.image}
              alt={item.name}
              width={1024}
              height={600}
              className="w-full h-full"
            />
          </div>
          <div className="w-full mt-5">
            <SubImageCarousel subImages={item.subImages} />
          </div>
          <div className="w-full items-center mt-10 px-5 xl:px-0">
            <div className="flex flex-col items-start">
              <h2 className="text-xl font-bold text-bg2">Tools Used :</h2>
              <div className=" flex flex-col justify-start items-start pl-5">
                {item.tools.map((tool, index) => (
                  <li key={index} className="text-base font-thin text-bg2">
                    {tool}
                  </li>
                ))}
              </div>
            </div>
            <div className="flex flex-col items-start mt-4">
              <h2 className="text-xl font-bold text-bg2">Project details :</h2>
              <p className="text-start text-base text-bg2">{item.details}</p>
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
              <h1 className="text-base hover:text-brand1">Home</h1>
            </Link>
            <Link href={"/"}>
              <h1 className="text-base hover:text-brand1">Projects</h1>
            </Link>
            <Link href={"/"}>
              <h1 className="text-base hover:text-brand1">Blogs</h1>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DialogAllContent;
