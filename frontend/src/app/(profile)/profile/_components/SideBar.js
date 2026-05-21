"use client";
import NavLink from "@/components/NavLink";
import { usePathname } from "next/navigation";
import React, { useEffect } from "react";
import { PiBasket, PiChartLine, PiHouseSimpleBold, PiUser } from "react-icons/pi";
import BackDrop from "./BackDrop";

const SideBar = ({ open, setOpen }) => {
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
        <ul className=" space-y-5">
          <li className="hidden lg:flex">
            <NavLink
              href={"/"}
              title={"صفحه اصلی"}
              icon={<PiHouseSimpleBold />}
            />
          </li>
          <li>
            <NavLink
              href={"/profile"}
              title={"داشبورد"}
              icon={<PiChartLine />}
            />
          </li>
          <li>
            <NavLink
              href={"/profile/payments"}
              title={"سفارشات"}
              icon={<PiBasket />}
            />
          </li>
          <li>
            <NavLink
              href={"/profile/me"}
              title={"اطلاعات کاربری"}
              icon={<PiUser />}
            />
          </li>
        </ul>
      </div>
    </>
  );
};

export default SideBar;
