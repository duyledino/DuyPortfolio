import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { Button } from "./ui/button";
import { FaAlignRight } from "react-icons/fa6";
import Link from "next/link";

const navItems = [
  { name: "Home", url: "/" },
  { name: "About", url: "/About" },
  { name: "Project", url: "/Project" },
  { name: "Contact", url: "/Contact" },
];

const MobileNav = () => {
  return (
    <nav className="block lg:hidden">
      <Sheet>
        <SheetTrigger>
          <Button variant={"outline"}>
            <FaAlignRight className="text-[var(--highlight)]" />
          </Button>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle className={`text-white`}>Duy</SheetTitle>
          </SheetHeader>
          <SheetDescription className={`w-full`}>
            <ul className="w-full flex flex-col items-center text-white gap-4">
              {navItems.map((item, index) => (
                <li className="border border-[var(--highlight)]/70 rounded-[5px] p-2 transition-all hover:bg-white hover:text-[var(--highlight)] text-center bg-transparent w-full h-full max-w-[80%] mx-auto">
                  <Link href={item.url} key={index} className="block w-full h-full">
                    {" "}
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </SheetDescription>
        </SheetContent>
      </Sheet>
    </nav>
  );
};

export default MobileNav;
