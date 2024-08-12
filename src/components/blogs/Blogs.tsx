import React from "react";
import SectionTitleHeaderTag from "../ui/SectionTitleHeaderTag";
import { blogData } from "@/constant/blogData";
import BlogCart from "./BlogCart";

const Blogs = () => {
  return (
    <div className="container mx-auto">
      <SectionTitleHeaderTag
        title="Blogs"
        content="My thoughts on technology and business, welcome to subscribe"
      />
      <div className="w-full">
        {
          blogData.map((data,index) => <BlogCart key={index} data={data}/>)
        }
      </div>
    </div>
  );
};

export default Blogs;
