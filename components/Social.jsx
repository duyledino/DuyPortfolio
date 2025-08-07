import React from "react";

import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa6";
import { Button } from "./ui/button";
import { FaDownload } from "react-icons/fa6";
import Link from "next/link";

const socialItems = [
  { icon: <FaGithub />, url: "https://github.com/duyledino" },
  { icon: <FaFacebookF />, url: "https://www.facebook.com/profile.php?id=100015368103032" },
  { icon: <FaLinkedin />, url: "https://www.linkedin.com/in/duy-le-aa8712343" },
];

const Social = () => {
  return (
    <div className="flex w-full justify-center lg:justify-start gap-5 items-center">
      <a href="/myCV/CV_Lê Khánh Duy.pdf" download="LeKhanhDuy_CV.pdf">
        <Button variant={"default"} download="DUY_CV.pdf">
          <FaDownload /> My Resume
        </Button>
      </a>
      <ul className="flex w-44 justify-between items-center">
        {socialItems.map((item, index) => (
          <Button
            key={index}
            variant={"outline"}
            className={`w-10 h-10 rounded-[50%]`}
          >
            <Link href={`${item.url}`} className="text-4xl">
              {item.icon}
            </Link>
          </Button>
        ))}
      </ul>
    </div>
  );
};

export default Social;
