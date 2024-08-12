import React from "react";
import Hero from "./hero/Hero";
import About from "./about/About";
import Skills from "./skill/Skills";
import Works from "./works/Works";
import Blog from "./blogs/Blog";
import Contact from "./contact/Contact";

const Home = () => {
  return (
    <div>
      <Hero />
      <About />
      <Skills />
      <Works />
      <Blog/>
      <Contact/>
    </div>
  );
};

export default Home;
