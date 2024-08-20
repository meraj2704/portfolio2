import { ubuntu } from "@/constant/fontFamily";
import Image from "next/image";
import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Link from "next/link";

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
        <DialogContent>
          <DialogHeader>
            <DialogTitle></DialogTitle>
            <div className="bg-white w-full h-full rounded-t-lg">
              <DialogDescription>
                <div className="max-w-5xl mx-auto mt-10 lg:mt-20">
                  <div className="w-full flex justify-between items-center px-5 lg:px-0">
                    <h1 className="text-3xl font-semibold text-bg2">
                      {item.name}
                    </h1>
                    <Link href={item.link}>
                      <button className="px-4 py-2 w-28 text-white bg-bg2 rounded-full hover:scale-105">
                        Live
                      </button>
                    </Link>
                  </div>
                  <div className="w-full h-[300px] md:h-[400px] lg:h-[600px] mt-10 lg:mt-16">
                    <Image src={item.image} alt={item.name} width={1024} height={600} /> 
                  </div>
                  <div className="w-full items-center px-5 lg:px-0">
                    <div className="flex gap-5">
                      <h2 className="text-xl font-bold text-bg2">
                        Tools Used :
                      </h2>
                      <ul className="flex justify-start items-center gap-1">
                        {item.tools.map((tool, index) => (
                          <li key={index} className="text-base font-thin text-bg2">
                            {tool},
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="max-h-48 overflow-y-auto mt-4">
                      <p className="text-base text-bg2">
                        <span className="text-xl font-bold">Details :</span> {item.details}
                      </p>
                    </div>
                  </div>
                </div>
              </DialogDescription>
            </div>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ProjectCart;
