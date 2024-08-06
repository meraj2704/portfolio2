import About from '@/components/about/About';
import Hero from '@/components/hero/Hero';
import Navbar from '@/components/shared/Navbar';
import Skills from '@/components/skill/Skills';
import Works from '@/components/works/Works';
import React from 'react';

const page = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <Skills/>
      <Works/>
    </div>
  );
};

export default page;