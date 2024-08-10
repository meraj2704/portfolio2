// components/DownloadButton.tsx
import { ubuntu } from "@/constant/fontFamily";
import React from "react";
import { FiDownload } from "react-icons/fi";

const ResumeDownloadButton = () => {
  return (
    <a href="/resume.pdf" download="Meraj_Hossain_Resume.pdf">
      <button
        className={`px-8 py-4 bg-white text-bg1 rounded-3xl flex items-center gap-5 text-base ${ubuntu.className}
      `}
      >
        <p>Download CV </p>
        <FiDownload />
      </button>
    </a>
  );
};

export default ResumeDownloadButton;
