import { ibm, ubuntu } from "@/constant/fontFamily";
import Image from "next/image";
import React from "react";

interface BlogI {
  title: string;
  content: string;
  topic: string;
  author: string;
  date: string;
  image: string;
}

interface BlogCartI {
  data: BlogI;
}

const BlogCart: React.FC<BlogCartI> = ({ data }) => {
  console.log(data);
  return (
    <div className="grid grid-cols-1 lg:grid-cols-5 items-center gap-10 w-full border-b border-b-white py-10">
      <div className="col-span-1 lg:col-span-2 xl:col-span-1  flex justify-center items-center">
        <Image src={data.image} width={240} height={240} className="w-full h-full" alt="blog image" />
      </div>
      <div className="col-span-1 lg:col-span-3 xl:col-span-4 flex gap-5 flex-col justify-center items-start">
        <h1
          className={`text-4xl text-brand1 text-center lg:text-start ${ubuntu.className}`}
        >
          {data.title}
        </h1>
        <p
          className={`text-lg text-center lg:text-start text-white opacity-65`}
        >
          {data.content}...
        </p>
        <div className="w-full flex justify-center lg:justify-start">
          <p
            className={`text-sm text-center lg:text-start text-brand1 font-light`}
          >
            <span className="underline pr-1">Read More</span>
            {">>"}
          </p>
        </div>
        <div className="w-full flex justify-center lg:justify-start items-center gap-4">
          <span className="px-2 py-1 bg-[#43454D] text-white text-sm rounded-full font-light opacity-65">
            {data.topic}
          </span>
          <div>
            <p className="text-sm text-white font-medium">
              Author : <span className="opacity-65 pl-2">{data.author}</span>
            </p>
          </div>
          <p className="text-sm text-white font-medium">
            Date: <span className="opacity-65 pl-2">{data.date}</span>
          </p>
        </div>
      </div>
      {/* Add the remaining parts of your blog card here */}
    </div>
  );
};

export default BlogCart;
