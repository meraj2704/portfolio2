import React from "react";
import SectionHeader from "../ui/SectionHeader";
import Image from "next/image";
import { ibm } from "@/constant/fontFamily";

const About = () => {
  return (
    <div className="w-full bg-[url('https://i.ibb.co/zJFVqfR/about-bg.jpg')] bg-cover bg-center">
      <div className="container mx-auto py-10 px-5 md:px-10 2xl:px-0">
        <div className="hidden w-full md:flex justify-center items-center py-16">
          <SectionHeader />
        </div>
        <div className="w-full flex flex-col xl:flex-row justify-between items-center">
          <div className="w-2/3 flex flex-col justify-between items-start">
            <div className="flex">
              <div className="px-10 border-2 border-brand1 bg-bg1 text-white rounded-tl-[40px] rounded-br-[40px]">
                <p className="text-6xl">About Me</p>
              </div>
            </div>
            <div className="w-full bg-bg1 rounded-[40px] px-10 py-4 space-y-5">
              <p className={`text-xs text-brand2 ${ibm.className}`}>{"<p>"}</p>
              <p className={`text-base text-white ${ibm.className}`}>
                <span className="text-3xl font-medium text-brand1"> Hello!</span> <br /> My name is Meraj and I specialize in web
                developement <br />
                that utilizes<span className="text-base text-brand1"> JavaScript</span>, <span className="text-base text-brand1"> TypeScript</span>, <span className="text-base text-brand1"> React</span>, <span className="text-base text-brand1"> Next.js</span> and <span className="text-base text-brand1"> Tailwind</span> etc. <br /> I am a highly
                motivated individual and eternal optimist dedicated to writing{" "}
               
                clear, concise, robust code that works. Striving to never stop{" "}
               
                learning and improving. When I'm not coding, I am <span className="text-base text-brand1"> writing blogs</span>,{" "}
                
                reading, or picking up some new hands-on art projects.<br />
                I like to have my perspective and belief systems{" "}
                
                challenged so that I see the world through new eyes.
              </p>
              <p className={`text-xs text-brand2 ${ibm.className}`}>{"<p>"}</p>
            </div>
          </div>
          <div className="w-full xl:w-1/2">
            <Image
              src={`https://i.ibb.co/Y7TnHcV/Image.png`}
              className="w-full h-full"
              content="cover"
              width={462}
              height={556}
              alt="aboutimage"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
