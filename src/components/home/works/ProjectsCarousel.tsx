import * as React from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import { ubuntu } from "@/constant/fontFamily";

export function ProjectsCarousel() {
  return (
    <Carousel opts={{ loop: true }} className="w-full max-w-xs md:max-w-xl">
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index}>
            <div className="w-full border rounded-md border-gray-500 bg-bg2">
              <div className="w-full h-52 md:h-72 group cursor-pointer relative text-white">
                <Image
                  src={"/assets/food-shop.png"}
                  height={600}
                  width={700}
                  alt="food shop image"
                  className="absolute rounded-md w-full h-full object-cover top-0 left-0 transition-opacity duration-300 ease-out"
                />
                <div className="absolute w-full h-full rounded-md bg-black opacity-0 z-10 transition-opacity duration-200 ease-out group-hover:opacity-60"></div>
                <div className="flex flex-col justify-center items-center absolute bottom-[-100px] left-[50%] translate-x-[calc(-50%)] transition-bottom duration-300 ease-out  z-30 group-hover:bottom-[40%] ">
                  <h2 className={`text-2xl lg:text-5xl font-bold z-6 whitespace-nowrap uppercase text-[#F5F5F5] group-hover:opacity-70 ${ubuntu.className}`}>
                    Food Shop
                  </h2>
                  <a href="https://food-shop-app-client.vercel.app/">
                    <h2 className="text-base lg:text-xl z-6 whitespace-nowrap text-[#F5F5F5] mt-5">
                      Visit
                    </h2>
                  </a>
                </div>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
