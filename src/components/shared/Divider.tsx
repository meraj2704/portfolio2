import React from "react";

const Divider = () => {
  return (
    <div className="flex justify-center items-center my-10 lg:my-20">
      <div className="w-3 h-3 rounded-full bg-brand1"></div>
      <hr className="w-[25%] bg-brand1 opacity-50" />
      <div className="w-3 h-3 rounded-full bg-brand1"></div>
    </div>
  );
};

export default Divider;
