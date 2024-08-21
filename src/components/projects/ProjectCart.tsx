import Image from "next/image";
import React, { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Link from "next/link";
import ProfileContact from "./ProfileContact";

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
  const [isScrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="w-full border rounded-md border-grey bg-bg2 cur">
      <Dialog>
        <DialogTrigger asChild>
          <div className="w-full h-52 md:h-72 group cursor-pointer relative text-white">
            <Image
              src={item.image}
              height={600}
              width={700}
              alt="Project cart image"
              className="absolute rounded-md w-full h-full object-cover top-0 left-0 transition-opacity duration-300 ease-out"
            />
            <div className="absolute bottom-0 w-full">
              <div className="hidden group-hover:flex justify-center items-center h-12 w-full bg-bg2 rounded-b-md transition-opacity duration-200 ease-out group-hover:opacity-80">
                <h1 className="text-xl font-semibold text-brand1">
                  {item.name}
                </h1>
              </div>
            </div>
          </div>
        </DialogTrigger>
        <DialogContent className="max-h-screen">
          <DialogHeader>
            <DialogTitle></DialogTitle>
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
                      <ProfileContact/>
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
                  <div className="w-full items-center mt-10 px-5 xl:px-0">
                    <div className="flex flex-col items-start">
                      <h2 className="text-xl font-bold text-bg2">
                        Tools Used :
                      </h2>
                      <div className=" flex flex-col justify-start items-start pl-5">
                        {item.tools.map((tool, index) => (
                          <li
                            key={index}
                            className="text-base font-thin text-bg2"
                          >
                            {tool}
                          </li>
                        ))}
                      </div>
                    </div>
                    <div className="flex flex-col items-start mt-4">
                      <h2 className="text-xl font-bold text-bg2">
                        Project details :
                      </h2>
                      <p className="text-start text-base text-bg2">
                        {item.details}
                      </p>
                    </div>
                  </div>
                  <hr className="my-10" />
                </div>
              </div>
            </div>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ProjectCart;
