"use client";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";

const StairChild = ({ index }) => {
  let color;
  switch (index) {
    case 0:
      color = "red";
      break;
    case 1:
      color = "yellow";

      break;
    case 2:
      color = "green";
      break;
    default:
      break;
  }
  return (
    <>
      <div
        className={`absolute z-[${
          30 + index
        }] w-full h-full flex bg-transparent`}
      >
        <motion.div
          initial={{ x: 0 }}
          animate={{
            x: `-100%`,
            transition: {
              delay:  0.5/index,
              duration: 0.3,
              ease: "easeInOut",
            },
          }}
          className={`w-[50%] h-full bg-[var(--highlight)] border-r border-r-white`}
        />
        <motion.div
          initial={{ x: 0 }}
          animate={{
            x: `100%`,
            transition: {
              delay:  0.5/index,
              duration: 0.3,
              ease: "easeInOut",
            },
          }}
          className={`w-[50%] h-full bg-[var(--highlight)] border-l border-l-white`}
        />
      </div>
    </>
  );
};

export default StairChild;
