"use client";
import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import { usePathname } from "next/navigation";
import StairChild from "./StairChild";

const Stair = () => {
  const path = usePathname();

  return (
    <AnimatePresence mode="wait">
      <div
        key={path}
        className="w-screen h-screen fixed top-0 left-0 z-[21] pointer-events-none"
      >
        <div className="relative flex justify-center items-center w-full h-full">
          {Array.from({ length: 6 }).map((_, i) => (
            <StairChild index={i+1} key={i} />
          ))}
        </div>
      </div>
    </AnimatePresence>
  );
};

export default Stair;
