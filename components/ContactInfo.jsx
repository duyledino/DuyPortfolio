"use client"
import React from "react";
import { FaPhone } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { FaMapMarkerAlt } from "react-icons/fa";

const items = [
  {
    icon: <FaPhone className="group-hover:text-white transition-all text-[var(--highlight)]" />,
    title: "Phone",
    detail: "(+84) 0938854826",
  },
  {
    icon: <IoIosMail className="group-hover:text-white transition-all text-[var(--highlight)]" />,
    title: "Mail",
    detail: "lekhanhduy.bh@gmail.com",
  },
  {
    icon: <FaMapMarkerAlt className="group-hover:text-white transition-all text-[var(--highlight)]" />,
    title: "Address",
    detail: "VN, HCMC, Dist 8",
  },
];

const ContactInfo = () => {
    const handleClick = (e)=>{
        console.log(e.value);
    }
  return (
    <div className="lg:w-[30%] lg:h-full w-full h-[300px] flex flex-col lg:justify-center justify-between">
      {items.map((item, index) => (
        <div
          className=" cursor-pointer w-[65%] lg:w-[80%] h-[20%] flex items-center gap-8 group"
          key={index}
          value={item.detail}
          onClick={(e)=>handleClick(e)}
        >
          <div className="h-12 w-12 bg-neutral-800 flex justify-center items-center text-2xl transition-all group-hover:bg-[var(--highlight)]">
            {item.icon}
          </div>
          <div className="w-[80%] flex flex-col justify-between">
            <h2 className="text-[14px] text-gray-400 ">{item.title}</h2>
            <p>{item.detail}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ContactInfo;
