import { ibm } from "@/constant/fontFamily";
import React from "react";

const OverView = () => {
  return (
    <div className="flex justify-center items-center">
      <div
        className={`flex flex-col justify-center items-center px-8 py-12 rounded-[80px] bg-bg2 space-y-12 ${ibm.className}`}
      >
        <div className="flex justify-between items-center gap-4">
          <h1 className="text-5xl text-brand1">6</h1>
          <p className="text-base text-white">
            Programming <br />
            Language
          </p>
        </div>
        <div className="flex justify-between items-center gap-4">
          <h1 className="text-5xl text-brand1">3</h1>
          <p className="text-base text-white">
            Development <br />
            Tools
          </p>
        </div>
        <div className="flex justify-between items-center gap-4">
          <h1 className="text-5xl text-brand1">1</h1>
          <p className="text-base text-white">
            Years of <br />
            Experience
          </p>
        </div>
      </div>
    </div>
  );
};

export default OverView;
