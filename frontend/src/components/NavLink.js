"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const NavLink = ({ href, title, icon = "" }) => {
  const pathname = usePathname();
  return (
    <Link
      href={href}
      className={`${pathname === href ? "mygradient font-semibold" : "text-secondary-700"} flex items-center gap-1.5 text-sm`}
    >
      <i
        className={`${pathname === href ? "text-primary-700 font-semibold" : "text-secondary-700"} text-xl`}
      >
        {icon}
      </i>
      <span>{title}</span>
    </Link>
  );
};

export default NavLink;
