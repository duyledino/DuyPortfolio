import { useEffect, useState } from "react";

export const frameworkThemes = [
  {
    // React: light blue logo → dark background for contrast
    bg: "bg-white", // deep blue
    shadowClass: "shadow-[0_0_25px_5px_rgba(97,218,251,0.6)]",
  },
  {
    // Tailwind: light blue logo → dark background
    bg: "bg-white", // slate-900
    shadowClass: "shadow-[0_0_25px_5px_rgba(56,189,248,0.6)]",
  },
  {
    // Node.js: green logo → black or very dark gray background
    bg: "bg-black", // dark greenish black
    shadowClass: "shadow-[0_0_25px_5px_rgba(51,153,51,0.6)]",
  },
  {
    // Next.js: black logo → light background
    bg: "bg-white", // white background for black logo
    shadowClass: "shadow-[0_0_25px_5px_rgba(255,255,0,0.5)]",
  },
  {
    // Express.js: gray/black logo → lighter gray background
    bg: "bg-[#e5e5e5]", // neutral light
    shadowClass: "shadow-[0_0_25px_5px_rgba(255,255,0,0.5)]",
  },
  {
    // Prisma: dark logo → slightly lighter background
    bg: "bg-[#102d3c]", // slightly lighter than logo
    shadowClass: "shadow-[0_0_25px_5px_rgba(12,52,75,0.6)]",
  },
  {
    // PostgreSQL: blue elephant logo → near black-blue background
    bg: "bg-white", // very dark blue
    shadowClass: "shadow-[0_0_25px_5px_rgba(51,103,145,0.6)]",
  },
];




const useRotateBg = () => {
  let i = 1;
  const [hex, setHex] = useState(frameworkThemes[0]);
  useEffect(() => {
    const time = setInterval(() => {
      setHex(frameworkThemes[i]);
      i = (i + 1) % frameworkThemes.length;
    }, 2000);
    return () => clearInterval(time);
  }, []);
  return hex;
};

export default useRotateBg;