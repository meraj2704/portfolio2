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

const BlogCart = ({ data }: BlogCartI) => {
  console.log(data);
  return <div className="flex justify-center items-center w-full"></div>;
};

export default BlogCart;
