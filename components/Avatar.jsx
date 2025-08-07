import Image from "next/image";
import React from "react";
import avatar from "@/public/assesst/profile-removebg.png";

const Avatar = () => {
  return (
    <div className="w-full lg:w-[50%] flex justify-center items-center order-1 lg:order-none">
      <div className="w-72 h-72 lg:w-96 lg:h-96 relative flex justify-center items-center rounded-[50%] border border-[var(--highlight)]">
        <div className="absolute rounded-[50%] z-0 w-[100%] h-[100%] bg-black/25"></div>
        <Image src={avatar} className="z-[-1] mix-blend-lighten w-44 lg:w-56" />
        <div className="absolute rounded-[50%] z-[-2] w-[100%] h-[100%] bg-black"></div>
        <div className="absolute rounded-[50%] z-[-3] w-[105%] h-[105%] bg-aurora animate-aurora "></div>
        <div className="absolute rounded-[50%] z-[-4] w-[105%] h-[105%] [box-shadow:0_0_15px_#3b82f6,0_0_20px_#798cee,0_0_80px_#93c5fd]"></div>
      </div>
    </div>
  );
};

export default Avatar;
