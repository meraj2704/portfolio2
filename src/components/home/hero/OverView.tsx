import { ibm } from "@/constant/fontFamily";
import React from "react";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const OverView = () => {
  const [ref, inView] = useInView({
    triggerOnce: false, // Animation will happen every time the component comes into view
    threshold: 0.2, // Trigger when 20% of the component is visible
  });

  return (
    <motion.div
      initial={{ opacity: 0, x: "10vw" }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1.2, delay: 0, type: "spring", stiffness: 120 }}
      className="flex justify-center items-center"
      ref={ref} // Attach the observer to this div
    >
      <div
        className={`flex flex-col justify-center items-center px-8 py-12 rounded-[80px] bg-bg2 space-y-12 ${ibm.className}`}
      >
        {/* Programming Languages */}
        <div className="flex justify-between items-center gap-4">
          <h1 className="text-5xl text-brand1">
            {inView && <CountUp start={0} end={6} duration={2} />}
          </h1>
          <p className="text-base text-white">
            Programming <br />
            Language
          </p>
        </div>
        {/* Projects Completed */}
        <div className="flex justify-between items-center gap-4">
          <h1 className="text-5xl text-brand1">
            {inView && <CountUp start={0} end={16} duration={2} suffix="+" />}
          </h1>
          <p className="text-base text-white">
            Project <br />
            Complete{" "}
          </p>
        </div>
        {/* Years of Experience */}
        <div className="flex justify-between items-center gap-4">
          <h1 className="text-5xl text-brand1">
            {inView && <CountUp start={0} end={1} duration={2} />}
          </h1>
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
