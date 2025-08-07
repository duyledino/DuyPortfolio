"use client";
import { AnimatePresence } from "framer-motion";
import React from "react";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

const AppearLayer = ({ children }) => {
    const path = usePathname();
  return (
    <AnimatePresence>
      <div key={path}>
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 0, transition: { delay: 1,duration: 0.5,ease:"easeInOut" } }}
          className="w-screen h-screen fixed top-0 bg-dots left-0 z-20 pointer-events-none"
        ></motion.div>
        {children}
      </div>
    </AnimatePresence>
  );
};

export default AppearLayer;
