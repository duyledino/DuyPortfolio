import React from "react";
import Social from "./Social";

const Information = () => {
  return (
    <div className="px-3 flex flex-col items-center justify-normal lg:justify-center lg:items-start gap-4 lg:w-[50%] order-2 lg:order-none">
      <h1 className="text-3xl">
        <span className="text-[12px]">Software Developer</span>
        <br />
        hello I'm <br />
        <span className="text-[var(--highlight)]">Le Khanh Duy</span>
      </h1>
      <h3 className="text-center lg:text-start">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
        impedit aperiam voluptatum ratione quas voluptates.
      </h3>
      <Social />
    </div>
  );
};

export default Information;
