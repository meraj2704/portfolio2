"use client";
import { ibm } from "@/constant/fontFamily";
import { titleBorderSvg } from "@/constant/titleBorderSvg";
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface SectionTitleHeaderTagProps {
  title: string;
  content: string;
}
const SectionTitleHeaderTag = ({
  title,
  content,
}: SectionTitleHeaderTagProps) => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });
  return (
    <div
      ref={ref}
      className="flex flex-col justify-center items-center mb-10 px-5 "
    >
      <motion.div
        initial={{ opacity: 0, x: 0 }}
        animate={inView ? { opacity: 1, x: 0 } : { opacity: 0.6, x: "100vw" }}
        transition={{
          duration: 1.2,
          delay: 0,
          type: "spring",
          stiffness: 120,
        }}
        className="flex flex-col justify-center items-center gap-2"
      >
        <h1 className="text-3xl md:text-6xl text-brand1">{title}</h1>
      </motion.div>
      <motion.p
        initial={{ opacity: 0, y: 0 }}
        animate={inView ? { opacity: 1, x: 0 } : { opacity: 0.6, x: "-100vw" }}
        transition={{
          duration: 1.2,
          delay: 0,
          type: "spring",
          stiffness: 120,
        }}
        className={`text-center text-base text-white mt-4 ${ibm.className} `}
      >
        {content}
      </motion.p>
    </div>
  );
};

export default SectionTitleHeaderTag;
