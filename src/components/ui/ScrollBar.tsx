// components/ScrollBar.tsx
"use client"
import React from 'react';

const ScrollBar: React.FC = () => {
  const sections = ['about', 'skill', 'works', 'blogs'];

  const handleClick = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="fixed top-1/2 transform -translate-y-1/2 right-4">
      {sections.map((section, index) => (
        <div
          key={index}
          onClick={() => handleClick(section)}
          className="block mb-4 cursor-pointer"
        >
          <div className="p-2 bg-gray-300 rounded-full hover:bg-gray-500">
            {index + 1}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ScrollBar;
