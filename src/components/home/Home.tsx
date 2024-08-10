import React from "react";
import Hero from "./hero/Hero";
import About from "./about/About";
import Skills from "./skill/Skills";
import Works from "./works/Works";

const Home = () => {
  return (
    <div>
      <Hero />
      <About />
      <Skills />
      <Works />
    </div>
  );
};

export default Home;
