"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
const MotionSection = ({ children }: { children: React.ReactNode }) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const opacity = useTransform(
    scrollYProgress,
    // [0, 0.25, 0.5, 0.75, 1],
    // [0, 1, 1, 1, 0] 
    [0, 0.1, 0.3, 0.8, 1], // Quicker fade-in and slower fade-out
    [0, 1, 1, 1, 0]
  );

  const translateY = useTransform(scrollYProgress, [0, 0.5, 1], [50, 0, -50]);
  return (
    <motion.div
      ref={ref}
      style={{
        opacity,
        transform: translateY,
      }}
      transition={{ ease: "easeInOut" }}
    >
      {children}
    </motion.div>
  );
};

export default MotionSection;
