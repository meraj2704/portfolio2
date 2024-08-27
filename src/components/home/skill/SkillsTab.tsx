"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ibm } from "@/constant/fontFamily";
import { FiMonitor } from "react-icons/fi";
import { TbApi } from "react-icons/tb";
import SkillCart from "./SkillCart";
import { backendSkills, frontSkills } from "@/constant/data";
import { useState } from "react";

export function SkillsTab() {
  const [selectedTab, setSelectedTab] = useState("front-end");
  return (
    <Tabs defaultValue="front" className="w-full">
      <TabsList className="flex justify-center items-center gap-10 xl:gap-20">
        <TabsTrigger
          onClick={() => setSelectedTab("front-end")}
          value="front"
          className={`${
            selectedTab === "front-end"
              ? "bg-brand2 text-bg1"
              : "bg-transparent text-white "
          } hover:scale-105 border-y border-r border-y-brand2 border-r-brand2 px-10 py-4 rounded-xl border-l-8 border-l-react`}
        >
          <div className="flex flex-col justify-center items-center gap-2">
            <FiMonitor className="text-base md:text-xl xl:text-3xl" />
            <p
              className={`text-xs md:text-base xl:text-2xl ${ibm.className}`}
            >
              Front-End <span className="hidden md:inline">Developer</span>
            </p>
          </div>
        </TabsTrigger>
        <TabsTrigger
          onClick={() => setSelectedTab("backend")}
          value="backend"
          className={`${
            selectedTab === "backend"
              ? "bg-brand2 text-bg1"
              : "bg-transparent text-white "
          } hover:scale-105 border-y border-r border-y-brand2 border-r-brand2 px-10 py-4 rounded-xl border-l-8 border-l-react`}
        >
          <div className="flex flex-col justify-center items-center gap-2">
            <TbApi className="text-base md:text-xl xl:text-3xl" />
            <p className={`text-xs md:text-base xl:text-2xl ${ibm.className}`}>
              Backend <span className="hidden md:inline">Developer</span>
            </p>
          </div>
        </TabsTrigger>
      </TabsList>
      <TabsContent value="front" className="mt-16 xl:mt-28 px-5 ">
        <h1
          className={`text-xl md:text-3xl xl:text-5xl text-white mb-10 text-center ${ibm.className}`}
        >
          Front-End Skills
        </h1>
        <div className="pt-10 grid grid-cols-4 gap-10 md:gap-16">
          {frontSkills.map((skill, index) => (
            <SkillCart key={index} skill={skill} />
          ))}
        </div>
      </TabsContent>
      <TabsContent value="backend" className="mt-16 xl:mt-28 px-5 ">
        <h1
          className={`text-xl md:text-3xl xl:text-5xl text-white mb-10 text-center ${ibm.className}`}
        >
          Backend-End Skills
        </h1>
        <div className="pt-10 grid grid-cols-4 gap-10 md:gap-16">
          {backendSkills.map((skill, index) => (
            <SkillCart key={index} skill={skill} />
          ))}
        </div>
      </TabsContent>
    </Tabs>
  );
}
