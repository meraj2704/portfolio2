import React from "react";
import Hero from "./hero/Hero";
import About from "./about/About";
import Skills from "./skill/Skills";
import Works from "./works/Works";
import Blog from "./blogs/Blog";

const Home = () => {
  return (
    <div>
      <Hero />
      <About />
      <Skills />
      <Works />
      <Blog/>
    </div>
  );
};

export default Home;
