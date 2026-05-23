"use client";
import React, { useEffect } from "react";
import { usePathname } from "next/navigation";
import BackDrop from "./BackDrop";

const SideBar = ({ open, setOpen, children }) => {
  const pathname = usePathname();
  useEffect(() => {
    setOpen(false);
  }, [pathname]);
  return (
    <>
      <BackDrop isOpen={open} onClose={() => setOpen(false)} />
      <div
        className={`
          fixed lg:static top-0 right-0 h-full w-72 bg-secondary-200 p-4 pt-8 z-50
          transform transition-transform duration-300
          ${open ? "translate-x-0" : "translate-x-full"}
          lg:translate-x-0
        `}
      >
        {children}
      </div>
    </>
  );
};

export default SideBar;
