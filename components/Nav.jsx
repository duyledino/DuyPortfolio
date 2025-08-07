"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const navItems = [
  { name: "Home", url: "/" },
  { name: "About", url: "/About" },
  { name: "Project", url: "/Project" },
  { name: "Contact", url: "/Contact" },
];
const Nav = () => {
  const path = usePathname();
  return (
    <nav className="lg:block hidden">
      <ul className="flex items-center justify-between gap-6">
        {navItems.map((item, index) => (
          <li
            className={`${
              path === item.url ? "text-[var(--highlight)]" : ""
            } transition-all hover:text-[var(--highlight)]`}
            key={index}
          >
            <Link href={item.url}>
                {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
