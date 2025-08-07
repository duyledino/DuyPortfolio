import { useEffect, useState } from "react";
import reactLogo from "@/public/assesst/react.png";
import tailwindLogo from "@/public/assesst/tailwind.png";
import nodejsLogo from "@/public/assesst/nodejs.png";
import nextjsLogo from "@/public/assesst/nextjs.png";
import expressjsLogo from "@/public/assesst/expressjs.png";
import prismaLogo from "@/public/assesst/prisma.png";
import postgresLogo from "@/public/assesst/postgres.png";

const imagesFramework = [
  reactLogo,
  tailwindLogo,
  nodejsLogo,
  nextjsLogo,
  expressjsLogo,
  prismaLogo,
  postgresLogo,
];


const useRotateImage = () => {
  let i = 1;
  const [img, setImg] = useState(imagesFramework[0]);
  useEffect(() => {
    const time = setInterval(() => {
      setImg(imagesFramework[i]);
      i = (i + 1) % imagesFramework.length;
    }, 2000);
    return () => clearInterval(time);
  }, []);
  return img;
};

export default useRotateImage;
