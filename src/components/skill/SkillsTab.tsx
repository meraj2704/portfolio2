import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ibm } from "@/constant/fontFamily";
import { FiMonitor } from "react-icons/fi";
import { TbApi } from "react-icons/tb";
import SkillCart from "./SkillCart";
import { backendSkills, frontSkills } from "@/constant/data";

export function SkillsTab() {
  return (
    <Tabs defaultValue="front" className="w-full">
      <TabsList className="flex justify-center items-center gap-10 xl:gap-20">
        <TabsTrigger
          value="front"
          className="bg-brand2 px-10 py-4 rounded-xl border-l-8 border-l-react"
        >
          <div className="flex flex-col justify-center items-center gap-2">
            <FiMonitor className="text-base md:text-xl xl:text-3xl" />
            <p
              className={`text-xs md:text-base xl:text-2xl text-bg1 ${ibm.className}`}
            >
              Front-End <span className="hidden md:inline">Developer</span>
            </p>
          </div>
        </TabsTrigger>
        <TabsTrigger
          value="backend"
          className="bg-brand2 px-10 py-4 rounded-xl border-l-8 border-l-react"
        >
          <div className="flex flex-col justify-center items-center gap-2">
            <TbApi className="text-base md:text-xl xl:text-3xl" />
            <p
              className={`text-xs md:text-base xl:text-2xl text-bg1 ${ibm.className}`}
            >
              Backend <span className="hidden md:inline">Developer</span>
            </p>
          </div>
        </TabsTrigger>
      </TabsList>
      <TabsContent value="front" className="mt-10 xl:mt-20 px-5 ">
        <h1
          className={`text-xl md:text-3xl xl:text-5xl text-white mb-10 text-center ${ibm.className}`}
        >
          Front-End Skills
        </h1>
        <div className=" grid grid-cols-4 gap-5 md:gap-10">
          {frontSkills.map((skill, index) => (
            <SkillCart key={index} skill={skill} />
          ))}
        </div>
      </TabsContent>
      <TabsContent value="backend" className="mt-10 xl:mt-20 px-5 ">
        <h1
          className={`text-xl md:text-3xl xl:text-5xl text-white mb-10 text-center ${ibm.className}`}
        >
          Backend-End Skills
        </h1>
        <div className=" grid grid-cols-4 gap-5 md:gap-10">
          {backendSkills.map((skill, index) => (
            <SkillCart key={index} skill={skill} />
          ))}
        </div>
      </TabsContent>
    </Tabs>
  );
}
