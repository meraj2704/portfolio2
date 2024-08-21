import { ibm } from "@/constant/fontFamily";
import { titleBorderSvg } from "@/constant/titleBorderSvg";
import React from "react";

interface SectionTitleHeaderTagProps {
  title: string;
  content: string;
}
const SectionTitleHeaderTag = ({
  title,
  content,
}: SectionTitleHeaderTagProps) => {
  return (
    <div className="flex flex-col justify-center items-center pb-10 px-5 ">
      <div className="flex flex-col justify-center items-center gap-2">
        <h1 className="text-3xl md:text-6xl text-brand1">{title}</h1>
        <div dangerouslySetInnerHTML={{ __html: titleBorderSvg }}></div>
      </div>
      <p className={`text-center text-base text-white mt-4 ${ibm.className} `}>{content}</p>
    </div>
  );
};    

export default SectionTitleHeaderTag;
