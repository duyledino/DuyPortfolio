"use client";
import Navigation from "@/components/Navigation";
import ProjectItem from "@/components/ProjectItem";
import React, { useState } from "react";
import thumb1 from "@/public/assesst/QuickAI.png";
import thumb2 from "@/public/assesst/DatVePhim.png";
import thumb3 from "@/public/assesst/portfolio.png";
import togeter from '@/public/assesst/together-ai-branding-darkOnLight.png'
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";
import { SiPrisma } from "react-icons/si";
import { SiGooglegemini } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { DiRedis } from "react-icons/di";
import { SiExpress } from "react-icons/si";

const items = [
  {
    img: thumb1,
    link: "https://quick-ai-c-lone.vercel.app/",
    icons: [
      { icon: <FaReact />, glowColor: "hover:text-blue-500" },
      { icon: <FaNodeJs />, glowColor: "hover:text-green-500" },
      { icon: <BiLogoPostgresql />, glowColor: "hover:text-blue-500" },
      { icon: <SiGooglegemini />, glowColor: "hover:text-blue-900" },
    ],
  },
  {
    img: thumb2,
    link: "https://book-movie-ticket-phi.vercel.app/",
    icons: [
      { icon: <FaReact />, glowColor: "hover:text-blue-500" },
      { icon: <FaNodeJs />, glowColor: "hover:text-green-500" },
      { icon: <SiExpress />, glowColor: "hover:text-white hover:bg-black" },
      { icon: <BiLogoPostgresql />, glowColor: "hover:text-blue-500" },
      { icon: <SiPrisma />, glowColor: "hover:text-neutral-900" },
      { icon: <DiRedis />, glowColor: "hover:text-red-900" },
      { icon: <SiGooglegemini />, glowColor: "hover:text-blue-900" }
    ],
  },
  {
    img: thumb3,
    link: "https://duy-portfolio-five.vercel.app",
    icons: [
      { icon: <TbBrandNextjs />, glowColor: "hover:text-white hover:bg-black" },
    ],
  }
];

const page = () => {
  console.log("my length in page ",items.length);
  const [id,setId] = useState(0);
  return (
    <div className="container mx-auto h-[85vh] flex justify-center items-center">
      <div className="w-full lg:w-[65%] h-[90%] flex flex-col items-center gap-3 p-3">
        <div className="w-full h-[90%] overflow-hidden flex">
          {items.map((item,index)=>(
            <ProjectItem 
            projectId={index}
            currentId = {id}
            key={index}
            icons={item.icons}
            img={item.img}
            link={item.link}
          />
          ))}
        </div>
        <Navigation length={items.length} currentId={id} setId={setId}/>
      </div>
    </div>
  );
};

export default page;
