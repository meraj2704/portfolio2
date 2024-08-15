import { blogData, IBlog } from "@/constant/blogData";
import { ibm, ubuntu } from "@/constant/fontFamily";
import Image from "next/image";

const page = ({
  params,
}: {
  params: {
    id: number;
  };
}) => {
  const id = Number(params.id);
  const data: IBlog | undefined = blogData.find((da) => da.id === id);
  console.log(data);
  return (
    <div className="py-10 lg:py-20 w-[500px] md:w-[600px] lg:w-[700px] mx-auto px-5 md:px-10 xl:px-0">
      <div className="py-4">
        <h1
          className={`text-2xl lg:text-4xl font-bold text-brand1 ${ubuntu.className}`}
        >
          {data?.title}
        </h1>
      </div>
      <div className="border-y border-grey flex flex-wrap justify-start items-center px-5 mc:px-10 gap-4 py-4">
        <p className={`text-white text-base`}>
          Author: <span className="opacity-65"> {data?.author}</span>
        </p>
        <p className={`text-white text-base`}>
          Date: <span className="opacity-65"> {data?.date}</span>
        </p>
        <p className={`text-white text-base`}>
          Topic: <span className="opacity-65"> {data?.topic}</span>
        </p>
      </div>
      <div className="flex justify-center items-center py-10">
        <div className="w-full h-auto">
          <Image
            src={data.bannerImage}
            alt={data.title}
            width={300}
            height={300}
            className="w-full h-full rounded-md"
          />
        </div>
      </div>
      <div className="w-full">
        <h1 className={`text-base text-brand1 ${ibm.className} mb-10`}>
          Content :{" "}
        </h1>
        <p className={`text-white opacity-65 ${ibm.className}`}>
          {data?.content}
        </p>
        <p className={`text-white opacity-65 ${ibm.className}`}></p>
      </div>
      <div className="border-y border-grey  flex justify-between items-center px-5 mc:px-10 gap-4 py-4 mt-10">
    
        <button className="px-4 py-2 rounded-full bg-brand1 text-bg1 hover:scale-105">Previous</button>
        <button className="px-4 py-2 rounded-full bg-brand1 text-bg1 hover:scale-105">Next</button>
      </div>
    </div>
  );
};

export default page;
