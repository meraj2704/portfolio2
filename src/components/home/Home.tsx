import React from "react";
import Hero from "./hero/Hero";
import About from "./about/About";
import Skills from "./skill/Skills";
import Works from "./works/Works";
import Blog from "./blogs/Blog";
import Contact from "./contact/Contact";
import Divider from "../shared/Divider";

const Home = () => {
  return (
    <div>
      <Hero />
     <Divider/>
      <About />
      <Divider/>
      <Skills />
      <Divider/>
      <Works />
      <Divider/>
      <Blog />
      <Divider/>
      <Contact />
    </div>
  );
};

export default Home;
