import { ibm } from "@/constant/fontFamily";
import React from "react";
import { motion } from "framer-motion";

const OverView = () => {
  return (
    <motion.div
      initial={{opacity:0, x: "10vw" }}
      animate={{opacity:1, x: 0 }}
      transition={{ delay: 0, type: "spring", stiffness: 120 }}
      className="flex justify-center items-center"
    >
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
          <h1 className="text-5xl text-brand1">16+</h1>
          <p className="text-base text-white">
            Project <br />
            Complete{" "}
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
    </motion.div>
  );
};

export default OverView;
