"use client";
import { useState } from "react";
import { PiHouseSimpleBold, PiList } from "react-icons/pi";
import NavLinkUser from "./_components/NavLinkUser";
import SideBar from "@/components/SideBar";
import Link from "next/link";

export default function ProfileLayout({ children }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="flex gap-0 h-dvh">
      {/* side bar */}
      <SideBar open={open} setOpen={setOpen}>
        <NavLinkUser />
      </SideBar>
      <div className="h-full w-full overflow-auto">
        <div className="px-3 py-2 shadow-md flex justify-between items-center lg:hidden">
          <Link href={"/"} className="flex items-center gap-2 text-sm text-secondary-600">
            <PiHouseSimpleBold className="text-lg" />
            <span>صفحه اصلی</span>
          </Link>
          <button
            className="border border-secondary-300 p-1 rounded-md"
            onClick={() => setOpen(true)}
          >
            <PiList />
          </button>
        </div>
        {children}
      </div>
    </div>
  );
}
