"use client";
import React, { useEffect, useRef, useState } from "react";
import GridItem from "./GridItem";
import Image from "next/image";
import greeting from "../public/assesst/greeting.png";
import { motion } from "framer-motion";
import { Description } from "@radix-ui/react-dialog";
import useRotateImage from "@/hooks/useRotateImage";
import useRotateBg, { frameworkThemes } from "@/hooks/useRotateLogo";
import useRotateText from "@/hooks/useRotateText";
import Earth from "@/public/assesst/Earth.png";

const experience = [
  {
    time: "2010 – 2015",
    description: "Studied at Nguyen Khac Hieu Primary School",
  },
  {
    time: "2015 – 2019",
    description: "Studied at Nguyen Binh Khiem Secondary School",
  },
  {
    time: "2022 – 2026",
    description: "Studied at Ngo Quyen High School",
  },
  {
    time: "2022 - 2026",
    description:
      "Graduate Software Development at SaiGon Techonology University",
  },
];

const framework = [
  "react",
  "tailwind",
  "nodejs",
  "nextjs",
  "expressjs",
  "prisma",
  "postgreSQL",
];

const languages = ["English", "Vietnamese"];

const Grid1 = () => {
  const [currentId, setCurrentId] = useState(0);
  const [translateY, setTranslateY] = useState("");
  const handleChange = () => {
    setCurrentId((id) => {
      if (id === experience.length - 1) return 0;
      return id + 1;
    });
  };
  useEffect(() => {
    const time = setInterval(() => {
      handleChange();
    }, 2000);
    return () => clearInterval(time);
  }, []);
  useEffect(() => {
    setTranslateY(() => {
      return `translate-y-[${currentId * -100}%]`;
    });
  }, [currentId]);
  return (
    <>
      <div className="w-full h-[200px] lg:h-[500px] flex flex-col lg:flex-row lg:flex-wrap  justify-between items-center overflow-y-hidden">
        <h1>Time Development: </h1>
        <div className="flex flex-col lg:flex-row lg:flex-wrap  justify-between items-center overflow-y-hidden lg:gap-3 gap-0">
          {experience.map((item, index) => (
            <div
              key={index}
              className={`group flex flex-col gap-8 lg:w-[48%] lg:h-48 lg:p-2 lg:gap-5 lg:min-h-48 min-h-full w-full  border lg:border-white border-[varchar(--highlight)] lg:translate-0 ${translateY} transition-all  ${
                index === currentId
                  ? `lg:translate-0 lg:shadow-[0_0_25px_5px_rgba(140,0,255,0.5)] lg:border-[varchar(--highlight)]`
                  : ""
              } p-2`}
              style={
                // Only apply inline translateY on small screens
                typeof window !== "undefined" && window.innerWidth < 1024
                  ? { transform: `translateY(-${currentId * 100}%)` }
                  : {}
              }
            >
              <div className="w-full h-[10%]">
                <h1>
                  {" "}
                  <span className="text-2xl font-extrabold text-outline text-transparent group-hover:text-outline-hover">
                    {index + 1}.{" "}
                  </span>{" "}
                  {item.time}
                </h1>
              </div>
              <h2 className="text-xl">{item.description}</h2>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

const Grid2 = () => {
  const img = useRotateImage();
  const glowColor = useRotateBg();
  const textIndex = useRotateText(framework.length);
  return (
    <>
      <div className="w-full h-[160px] lg:h-[300px] py-1 flex flex-row justify-between lg:flex-col lg:justify-center lg:gap-5">
        <h1 className="lg:text-[16px] text-12px">Comprehension of Technology: </h1>
        <div className=" relative w-full h-full lg:h-[120px] bg-neutral-950 flex justify-center items-center">
          <Image
            src={img}
            className={`absolute h-[80%] w-full object-contain z-10`}
            alt={img}
          />
          <div
            className={`absolute h-full w-full z-[9]  ${glowColor.shadowClass} ${glowColor.bg} `}
          ></div>
        </div>
        <div className="w-full flex flex-wrap justify-evenly  gap-x-2 gap-y-3 items-center">
          {framework.map((item, index) => (
            <p
              key={index}
              className={`text-[12px] capitalize transition-all ${
                textIndex === index
                  ? "text-[var(--highlight)] translate-y-[-8px]"
                  : ""
              }`}
            >
              {item}
            </p>
          ))}
        </div>
      </div>
    </>
  );
};

const Grid3 = () => {
  const img = useRotateImage();
  const textIndex = useRotateText(languages.length);
  const glowColor = useRotateBg();
  return (
    <>
      <div className="w-full h-[160px] lg:h-[300px] py-1 flex flex-row justify-between lg:flex-col lg:justify-center lg:gap-5 perspective-distant transform-3d group">
        <h1>Language: </h1>
        <div className=" relative w-full h-full lg:h-[150px] bg-dots-universe flex justify-center items-center">
          <Image
            src={Earth}
            className={`absolute h-[80%] w-full object-contain z-10 transition-all group-hover:translate-z-11 group-hover:-translate-x-5`}
            alt={Earth}
          />
          <div
            className={`absolute h-full w-full z-[9]  ${frameworkThemes[0].shadowClass} `}
          ></div>
        </div>
        <div className="w-full flex flex-wrap justify-evenly  gap-x-2 gap-y-3 items-center group-hover:translate-z-11 group-hover:translate-x-5 transition-all">
          {languages.map((item, index) => (
            <p
              key={index}
              className={`text-[12px] capitalize transition-all ${
                textIndex === index
                  ? "text-[var(--highlight)] translate-y-[-8px]"
                  : ""
              }`}
            >
              {item}
            </p>
          ))}
        </div>
      </div>
    </>
  );
};

const GridInfo = () => {
  const gridRef = useRef(null);
  useEffect(() => {
    const grid3 = gridRef.current;
    let bounds = grid3.getBoundingClientRect();
    const handleMouseMove = (ev) => {
      const mouseX = ev.clientX;
      const mouseY = ev.clientY;
      const leftX = mouseX - bounds.x;
      const topY = mouseY - bounds.y;
      const center = {
        x: leftX - bounds.width / 2,
        y: topY - bounds.height / 2,
      };
      const distance = Math.sqrt(center.x ** 2 + center.y ** 2);
      grid3.style.transform = `
    scale3d(1.07, 1.07, 1.07)
    rotate3d(
      ${center.y / 100},
      ${-center.x / 100},
      0,
      ${Math.log(distance) * 2}deg
    )
  `;
      grid3.style.transition = "all .15s ease";
    };

    const handleMouseLeave = () => {
      grid3.style.transform = "rotateX(0) rotateY(0)";
      grid3.style.transition = "all .6s ease";
    };

    grid3.addEventListener("mousemove", handleMouseMove);
    grid3.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      grid3.removeEventListener("mousemove", handleMouseMove);
      grid3.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);
  return (
    <div className="p-2 grid lg:grid-rows-2 lg:grid-cols-3 grid-rows-7 grid-cols-1  w-full max-w-[70%] h-full gap-3 perspective-[1000px] transform-3d">
      <GridItem
        className={`lg:col-span-2 lg:row-span-2 row-span-3 col-span-1`}
        children={<Grid1 />}
      />
      <GridItem
        className={`lg:col-span-1 lg:row-span-1  row-span-2 col-span-1`}
        children={<Grid2 />}
      />
      <GridItem
        ref={gridRef}
        className={`lg:col-span-1 lg:row-span-1  row-span-2 col-span-1`}
        children={<Grid3 />}
      />
    </div>
  );
};

export default GridInfo;
