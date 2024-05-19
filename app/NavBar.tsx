"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { FaBug } from "react-icons/fa";
import { cn } from "./lib/utils";

const links = [
  {
    label: "Dashboard",
    href: "/",
  },
  {
    label: "Issues",
    href: "/issues",
  },
];

const NavBar = () => {
  const pathName = usePathname();
  return (
    <nav className="flex items-center px-6 space-x-6 h-14 border-b">
      <Link href={"/"}>
        <FaBug />
      </Link>
      <ul className="flex items-center space-x-6">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className={cn(
                "text-zinc-500 hover:text-zinc-800 transition duration-200 ease-linear",
                link.href === pathName && " text-zinc-900"
              )}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
