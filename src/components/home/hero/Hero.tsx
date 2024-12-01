
"use client"

import React from "react";
import HeroCart from "./HeroCart";
import HeroContent from "./HeroContent";
import OverView from "./OverView";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
const Hero = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });
  return (
    <div id="home" className="w-full py-20 xl:py-28">
      <div className="container mx-auto px-5">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
           animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          ref={ref}
          className="text-8xl text-brand1 text-center hidden xl:block"
        >
          Developer
        </motion.h1>
        <div className="w-full flex flex-col xl:flex-row gap-10 justify-center xl:justify-between  items-center xl:mt-12">
          <div className="xl:w-1/3">
            <HeroCart />
          </div>
          <div className="xl:w-2/3 flex flex-col md:flex-row justify-between items-center gap-10 px-5 xl:px-0 ">
            <HeroContent />
            <OverView />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;


