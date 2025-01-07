import React from "react";
import Hero from "./hero/Hero";
import About from "./about/About";
import Skills from "./skill/Skills";
import Works from "./works/Works";

import Contact from "./contact/Contact";
import Divider from "../shared/Divider";
import MotionSection from "../shared/MotionSection";
// import CustomCursor from "../shared/CustomCursor";

const Home = () => {
  return (
    <div>
      {/* <MotionSection> */}
        <Hero />
        <Divider />
      {/* </MotionSection> */}
      {/* <MotionSection> */}
        {/* <About /> */}
        <Divider />
      {/* </MotionSection> */}
      {/* <MotionSection> */}
        {/* <Skills /> */}
        <Divider />
      {/* </MotionSection> */}
      {/* <MotionSection> */}
        {/* <Works /> */}
        <Divider />
      {/* </MotionSection> */}
      {/* <MotionSection> */}
        {/* <Contact /> */}
      {/* </MotionSection> */}
      {/* <CustomCursor /> */}
    </div>
  );
};

export default Home;
