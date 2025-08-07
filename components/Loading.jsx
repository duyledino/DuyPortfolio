import React from "react";

const Loading = () => {
  return (
    <div className="fixed z-50 h-screen w-full inset-0 bg-black/40 flex justify-center items-center">
      <span className="relative flex size-32">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-400 opacity-75"></span>
        <span className="relative inline-flex size-32 animate-ping delay-150 rounded-[50%] bg-sky-500"></span>
      </span>
    </div>
  );
};

export default Loading;
