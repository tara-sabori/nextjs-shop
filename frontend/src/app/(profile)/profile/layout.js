"use client";
import { useState } from "react";
import SideBar from "./_components/SideBar";
import { PiHouseSimpleBold, PiList } from "react-icons/pi";

export default function ProfileLayout({ children }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="flex gap-0 h-dvh">
      {/* side bar */}
      <SideBar open={open} setOpen={setOpen} />
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
        {children}
      </div>
    </div>
  );
}
