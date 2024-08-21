import BlogCart from "@/components/blogs/BlogCart";
import ButtonFill from "@/components/ui/ButtonFill";
import SectionTitleHeaderTag from "@/components/ui/SectionTitleHeaderTag";
import { blogData, IBlog } from "@/constant/blogData";
import React from "react";

const Blog = () => {
  const data:IBlog | undefined = blogData[0];
  return (
    <div id="blogs" className="container mx-auto px-5  2xl:px-0 py-10">
      <SectionTitleHeaderTag
        title="Blogs"
        content="My thoughts on technology and business, welcome to read"
      />
      <div className="w-full border-t border-t-white mt-10">
        <BlogCart data={data} />
      </div>
      <div className="flex justify-center items-center mt-10">
        <ButtonFill content="Read More" href="/blogs" />
      </div>
    </div>
  );
};

export default Blog;
