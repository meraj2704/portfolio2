import { ibm } from "@/constant/fontFamily";
import React from "react";
import { MdOutlineEmail } from "react-icons/md";

const HeroContent = () => {
  return (
    <div className="flex flex-col justify-start items-start">
      <div className="space-y-2">
        <p className={`text-xs text-brand2 ${ibm.className}`}>{"<h1>"}</p>
        <h1 className={`text-3xl md:text-6xl text-white pl-4`}>
          Hey <br />
          {"I'm"} <span className="text-brand1">Meraj</span>, <br />
          Front-End Developer
        </h1>
        <p className={`text-xs text-brand2 ${ibm.className}`}>{"<h1>"}</p>
      </div>
      <div className="mt-8 space-y-2">
        <p className={`text-xs text-brand2 ${ibm.className}`}>{"<p>"}</p>
        <p className={`text-base pl-4 text-white`}>
          I help business grow by crafting amazing web experiences. If you’re <br />
          looking for a developer that likes to get stuff done,
        </p>
        <p className={`text-xs text-brand2 ${ibm.className}`}>{"<p>"}</p>
      </div>
      <div className="flex items-center gap-6 mt-4">
        <h1 className={`text-3xl text-brand1 pl-4 ${ibm.className}`}>{"Let's"} Talk</h1>
        <MdOutlineEmail className="text-2xl text-brand1 " />
      </div>
    </div>
  );
};

export default HeroContent;
