import Hero from '@/components/hero/Hero';
import Navbar from '@/components/shared/Navbar';
import React from 'react';

const page = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
    </div>
  );
};

export default page;