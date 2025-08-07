import React from "react";

const GridItem = ({ className, children,...props }) => {
  // const { title, description, header } = children;
  return (
    <div
    {...props}
      className={`w-full h-full bg-neutral-900 ${className} rounded-xl flex flex-col justify-center items-center p-1`}
    >
      <div className="w-full max-w-[85%] rounded-xl ">
        {/* {header} */}
      </div>
      <div className="w-full max-w-[85%]">{children}</div>
    </div>
  );
};

export default GridItem;
