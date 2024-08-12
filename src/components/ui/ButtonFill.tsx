import Link from "next/link";
import React from "react";

interface ButtonFillI {
  content: string;
  href?: string;
}

const ButtonFill: React.FC<ButtonFillI> = ({ content, href }) => {
  return href ? (
    <Link href={href}>
      <button className="py-4 px-10 rounded-full text-bg1 bg-brand1 hover:scale-105">
        {content}
      </button>
    </Link>
  ) : (
    <button className="py-4 px-10 rounded-full text-bg1 bg-brand1 hover:scale-105">
      {content}
    </button>
  );
};

export default ButtonFill;
