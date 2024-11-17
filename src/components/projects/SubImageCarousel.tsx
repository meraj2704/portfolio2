import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";

interface PropsI {
  subImages: string[];
}

const SubImageCarousel = ({ subImages }: { subImages?: string[] }) => {
  console.log("images", subImages);
  return (
    <Carousel opts={{ loop: true }} plugins={[Autoplay({ delay: 1500 })]}>
      <CarouselContent>
        {subImages?.map((image: string, index: number) => (
          <CarouselItem key={index} className="basis-1/3">
            <Image
              src={image}
              width={200}
              height={200}
              alt="image"
              className="w-full object-cover"
            />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};

export default SubImageCarousel;
