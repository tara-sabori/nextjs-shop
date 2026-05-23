"use client";
import { useState } from "react";
import { PiHouseSimpleBold, PiList } from "react-icons/pi";
import SideBar from "@/components/SideBar";
import NavLinkAdmin from "./_components/NavLinkAdmin";

export default function AdminLayout({ children }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="flex gap-0 h-dvh">
      {/* side bar */}
      <SideBar open={open} setOpen={setOpen}>
        <NavLinkAdmin />
      </SideBar>
      <div className="h-full w-full overflow-auto">
        <div className="px-3 py-2 shadow-md flex justify-between items-center lg:hidden">
          <button className="flex items-center gap-2 text-sm text-secondary-600">
            <PiHouseSimpleBold className="text-lg" />
            <span>صفحه اصلی</span>
          </button>
          <button
            className="border border-secondary-300 p-1 rounded-md"
            onClick={() => setOpen(true)}
          >
            <PiList />
          </button>
        </div>
        <div className="p-5 lg:pt-8 lg:w-[80%] space-y-5 lg:space-y-8">
          {children}
        </div>
      </div>
    </div>
  );
}
