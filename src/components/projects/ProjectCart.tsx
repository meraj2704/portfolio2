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
import DialogAllContent from "./DialogAllContent";

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
        <DialogContent className="max-h-screen">
          <DialogHeader>
            <DialogTitle></DialogTitle>
            <DialogAllContent item={item} />
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ProjectCart;
