import React from "react";
import Home from "@/components/home/Home";
import MenuBar from "@/components/shared/MenuBar";

const page = () => {
  return (
    <div className="relative">
      <Home />
      <div>
        <MenuBar />
      </div>
    </div>
  );
};

export default page;
