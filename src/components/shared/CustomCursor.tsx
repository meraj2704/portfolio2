"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const CustomCursor: React.FC = () => {
  const [cursorX, setCursorX] = useState(0);
  const [cursorY, setCursorY] = useState(0);
  const [isHover, setIsHover] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCursorX(e.clientX);
      setCursorY(e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      {/* Custom cursor */}
      <motion.div
        style={{
          position: "absolute",
          top: cursorY,
          left: cursorX,
          pointerEvents: "none", // Prevent interference with default cursor
          zIndex: 9999,
          width: 20,
          height: 20,
          borderRadius: "50%",
          backgroundColor: "rgba(255, 0, 0, 0.7)", // Red circular cursor
          transform: "translate(-50%, -50%)", // Center the cursor
        }}
        animate={{ scale: isHover ? 1.5 : 1 }}
        transition={{ duration: 0.2 }}
      />

      {/* Test elements for hover */}
      <div
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
        className="p-10 bg-blue-200 text-center mt-10 cursor-pointer"
      >
        Hover over me!
      </div>
      <div
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
        className="p-10 bg-green-200 text-center mt-5 cursor-pointer"
      >
        Hover over me too!
      </div>
    </>
  );
};

export default CustomCursor;
