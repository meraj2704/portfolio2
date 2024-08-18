import React from "react";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

const Social = () => {
  return (
    <div className="flex gap-5 pb-10">
      <a href="https://github.com/meraj2704" target="blank">
        <FaGithub className="text-xl text-brand1" />
      </a>
      <a href="https://www.linkedin.com/in/meraj-hossain-6566b8231/" target="blank">
        <FaLinkedin className="text-xl text-brand1" />
      </a>
      <a href="https://www.instagram.com/miraj_h89/?hl=en" target="blank">
        <FaInstagram className="text-xl text-brand1" />
      </a>
    </div>
  );
};

export default Social;
