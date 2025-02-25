import { skills } from "@/constant/fontFamily";
import { IBM_Plex_Mono } from "next/font/google";
import Image from "next/image";
import React from "react";
import { CiLocationOn } from "react-icons/ci";
import { FaBusinessTime, FaMailBulk } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import SkillButton from "../../ui/SkillButton";
import ResumeDownloadButton from "./ResumeDownloadButton";
import { motion } from 'framer-motion'
import { useInView } from "react-intersection-observer";
const ibm = IBM_Plex_Mono({ subsets: ["latin"], weight: ["400", "700"] });
const HeroCart = () => {

  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  return (
    <motion.div
      initial={{ opacity: 0, x: '-5vw' }}
      // animate={{ opacity: 1, x: 0 }}
      animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: "-5vw" }}
      transition={{ duration: 1.5, delay: 0, type: 'spring', stiffness: 120 }}
      ref={ref}
      className="w-[292px] h-[572px] relative">
      <div className="w-full h-full bg-bg1 absolute border-4 border-brand1 rounded-tl-[160px] rounded-br-[160px]"></div>
      <div className="w-full h-full bg-bg1 absolute border-4 border-white rounded-tl-[160px] rounded-br-[160px] right-[-3px] bottom-[-3px]">
        <div className="flex flex-col justify-center items-center py-10">
          <div className="w-24 h-24 rounded-full border-[1px] border-brand1">
            <Image
              src='/assets/merajImg.JPG'
              alt="merajImg"
              objectFit="cover"
              width={100}
              height={100}
              className="w-full h-full rounded-full scale-x-[-1]"
            />
          </div>
        </div>
        <div className="flex flex-col justify-center items-center">
          <h1 className={`text-3xl font-normal text-white ${ibm.className}`}>
            Meraj Hossain
          </h1>
          <h1 className={`text-xs font-normal text-white ${ibm.className}`}>
            Front-End Developer
          </h1>
        </div>
        <div className="w-full px-5 mt-8 space-y-3">
          <div className="flex items-center gap-4">
            <MdOutlineEmail className="text-xs text-brand1" />
            <h1 className={`text-xs text-white ${ibm.className}`}>
              merajhossain15901@gmail.com
            </h1>
          </div>
          <div className="flex items-center gap-4">
            <CiLocationOn className="text-xs text-brand1" />
            <h1 className={`text-xs text-white ${ibm.className}`}>
              Dhaka,Bangladesh
            </h1>
          </div>
          <div className="flex items-center gap-4">
            <FaBusinessTime className="text-xs text-brand1" />
            <h1 className={`text-xs text-white ${ibm.className}`}>
              Part-Time / Freelancer
            </h1>
          </div>
        </div>
        <div className="w-full flex gap-2 flex-wrap items-center mt-5 px-5">
          {skills.map((skill, index) => (
            <SkillButton skillName={skill.skillName} key={index} />
          ))}
        </div>
        <div className="flex justify-start items-center px-5 mt-5">
          <ResumeDownloadButton />
        </div>
      </div>
    </motion.div>
  );
};

export default HeroCart;
