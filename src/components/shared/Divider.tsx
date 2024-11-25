'use client'
import React from "react";
import { motion } from "framer-motion";

const Divider = () => {
  return (
    <div className="flex justify-center items-center my-5 lg:my-10">
      {/* Circle on the left */}
      <motion.div
        className="w-3 h-3 rounded-full bg-brand1"
        animate={{
          x: ["-50%", "150%", "-50%"], // Move from left to right, then back to left
        }}
        transition={{
          duration: 1,  // Duration for one full cycle (from left to right and back)
          repeat: Infinity,  // Repeat the animation infinitely
          repeatType: "loop",  // Loop the animation
          ease: "easeInOut",  // Smooth transition
        }}
      />
      {/* Horizontal line */}
      {/* <hr className="w-[10%] bg-brand1 opacity-50" /> */}
      {/* Circle on the right */}
      <motion.div
        className="w-3 h-3 rounded-full bg-brand1"
        animate={{
          x: ["150%", "-50%", "150%"], // Move from right to left, then back to right
        }}
        transition={{
          duration: 1,  // Same duration as the first circle
          repeat: Infinity,  // Repeat the animation infinitely
          repeatType: "loop",  // Loop the animation
          ease: "easeInOut",  // Smooth transition
        }}
      />
    </div>
  );
};

export default Divider;
