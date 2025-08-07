"use client"
import React, { useState } from "react";
import Form from "./Form";
import Loading from "./Loading";

const WorkTogether = () => {
  const [loading, setLoading] = useState(false);
  return (
    <>
    {loading ? <Loading/> : ""}
      <div className="gap-6 lg:h-full lg:w-[60%] w-full flex flex-col p-6 items-center justify-between bg-neutral-800 rounded-[20px] lg:order-none order-2">
        <div className="h-[20%] w-full flex flex-col justify-between gap-3">
          <h1 className="text-2xl text-[var(--highlight)] font-bold">
            Let's work together
          </h1>
          <h3 className="text-[12px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatibus quasi labore voluptas laborum est tenetur pariatur
            nostrum facere quibusdam eveniet!
          </h3>
        </div>
        <Form setLoading={setLoading}/>
      </div>
    </>
  );
};

export default WorkTogether;
