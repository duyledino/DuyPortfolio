"use client";
import React from "react";
import { FaAngleRight } from "react-icons/fa6";
import { FaAngleLeft } from "react-icons/fa6";

const Navigation = ({ currentId, setId, length }) => {
  const handlePrevious = () => {
    setId((index) => {
      if (index === 0) return length - 1;
      return index - 1;
    });
  };
  const handleNext = () => {
    setId((index) => {
      if (index === length - 1) return 0;
      return index + 1;
    });
  };
  return (
    <div className="h-[10%] w-full">
      <div className="w-full h-full flex justify-between">
        <div
          onClick={handlePrevious}
          className="w-10 h-10 rounded-[50%] group bg-white transition-all flex justify-center items-center hover:bg-[var(--highlight)]"
        >
          <FaAngleLeft className="text-black  group-hover:text-white" />
        </div>
        <ul className="flex justify-between items-center w-40">
          {Array.from({ length }, (_, i) => i).map((item, index) => (
            <li key={index} className={`w-6 h-6 rounded-[50%] ${index === currentId ? 'bg-[var(--highlight)]' : 'bg-white'} hover:bg-[var(--highlight)]`} onClick={()=>setId(index)}></li>
          ))}
        </ul>
        <div
          onClick={handleNext}
          className="w-10 h-10 rounded-[50%] group bg-white transition-all flex justify-center items-center hover:bg-[var(--highlight)]"
        >
          <FaAngleRight className="text-black  group-hover:text-white transition-all" />
        </div>
      </div>
    </div>
  );
};

export default Navigation;
