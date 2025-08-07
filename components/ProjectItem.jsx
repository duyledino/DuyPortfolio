"use client"
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";

const ProjectItem = ({currentId, img, link, icons,projectId }) => {
  console.log("my current id",currentId,projectId);
  return (
    <div key={projectId} className={`w-full min-w-full h-full flex flex-col gap-2 bg-neutral-900 p-2.5 justify-between items-center transition-all`} style={{transform: `translateX(-${currentId * 100}%)`}}>
      <div className="h-[75%] relative w-full flex justify-between items-center bg-neutral-950">
        <Image src={img} className="w-full h-full object-cover md:object-contain" alt={img}/>
      </div>
      <div className="h-[25%] flex flex-col gap-5">
        <h1 className="">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio, aut.
        </h1>
        <div className="flex justify-between items-center">
          <ul className="flex items-center gap-2">
            {icons.map((item, i) => (
              <li
                key={i}
                className={`bg-white rounded-[50%] w-[30px] h-[30px] text-black flex justify-center items-center text-2xl ${item.glowColor} transition-all`}
              >
                {item.type !== undefined ? <Image src={item.icon} alt="image here"/> : item.icon}
              </li>
            ))}
          </ul>
          <Link href={link} target="_blank" className="hover:text-[var(--highlight)]  transition-all">
            Click Here To Repo <FaExternalLinkAlt className="inline" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
