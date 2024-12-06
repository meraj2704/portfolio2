"use client";
import React from "react";
import Image from "next/image";
import { ibm } from "@/constant/fontFamily";
import MotionSection from "@/components/shared/MotionSection";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });
  return (
    <div id="about" className={`w-full`} ref={ref}>
      <div className="container mx-auto py-20 px-5  2xl:px-0 space-y-20">
        <div className="w-full h-full flex flex-col xl:flex-row justify-between items-start gap-16">
          <div className="w-full xl:w-2/3 h-full flex flex-col justify-between gap-10 2xl:gap-36">
            <div className="flex">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{
                  duration: 1.2,
                  delay: 0,
                  type: "spring",
                  stiffness: 120,
                }}
                className="px-10 py-2 border-2 border-brand1  hover:bg-brand1 hover:text-bg2 text-white rounded-tl-[30px] rounded-br-[30px]"
              >
                <p className="text-3xl xl:text-6xl">About Me</p>
              </motion.div>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{
                duration: 1.2,
                delay: 0,
                type: "spring",
                stiffness: 120,
              }}
              className="w-full rounded-[40px] px-5 xl:px-10 py-4 space-y-5"
            >
              <p className={`text-xs text-brand2 ${ibm.className}`}>{"<p>"}</p>
              <p className={`text-base text-white ${ibm.className}`}>
                <span className="text-3xl font-medium text-brand1">
                  {" "}
                  Hello!
                </span>{" "}
                <br /> My name is Meraj and I specialize in web development{" "}
                <br />
                that utilizes
                <span className="text-base text-brand1"> JavaScript</span>,{" "}
                <span className="text-base text-brand1"> TypeScript</span>,{" "}
                <span className="text-base text-brand1"> React</span>,{" "}
                <span className="text-base text-brand1"> Next.js</span> and{" "}
                <span className="text-base text-brand1"> Tailwind</span> etc.{" "}
                <br /> I am a highly motivated individual and eternal optimist
                dedicated to writing clear, concise, robust code that works.
                Striving to never stop learning and improving. When {"I'm"} not
                coding, I am{" "}
                <span className="text-base text-brand1"> writing blogs</span>,{" "}
                reading, or picking up some new hands-on art projects.
                <br />I like to have my perspective and belief systems{" "}
                challenged so that I see the world through new eyes.
              </p>
              <p className={`text-xs text-brand2 ${ibm.className}`}>{"<p>"}</p>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{
              duration: 1.2,
              delay: 0,
              type: "spring",
              stiffness: 120,
            }}
            className="w-full xl:w-1/3"
          >
            <Image
              src={`https://i.ibb.co/Y7TnHcV/Image.png`}
              className="w-full"
              width={462}
              height={556}
              alt="aboutimage"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
