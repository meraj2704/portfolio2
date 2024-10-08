import { scrollSvg } from "@/constant/scroll";
import React from "react";

const SectionScroll = () => {
  return (
    <div
      className=" xl:h-24"
      dangerouslySetInnerHTML={{ __html: scrollSvg }}
    ></div>
  );
};

export default SectionScroll;
