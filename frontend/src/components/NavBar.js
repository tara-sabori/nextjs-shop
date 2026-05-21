"use client";
import { useEffect } from "react";
import NavLink from "./NavLink";
import BackDrop from "@/app/(profile)/profile/_components/BackDrop";
import {
  PiBooks,
  PiHouseSimpleBold,
  PiPhoneCall,
  PiX,
} from "react-icons/pi";
import { usePathname } from "next/navigation";

const NavBar = ({ open, setOpen }) => {
  const pathname = usePathname();
  useEffect(() => {
    setOpen(false);
  }, [pathname]);
  return (
    <>
      <BackDrop isOpen={open} onClose={() => setOpen(false)} />
      <nav
        className={`flex flex-col fixed lg:static bg-secondary-50 w-75 px-5 py-10 lg:p-0 top-0 right-0 h-full gap-8 lg:flex-row lg:w-fit z-50
          transform transition-transform duration-300
          ${open ? "translate-x-0" : "translate-x-full"}
          lg:translate-x-0`}
      >
        <div className="text-left absolute left-5 top-4 block lg:hidden">
            <button
                onClick={() => setOpen(false)}
              >
                <PiX className="text-lg" />
              </button>
        </div>
        <NavLink href={"/"} title={"صفحه اصلی"} icon={<PiHouseSimpleBold />} />
        <NavLink href={"/product"} title={"محصولات"} icon={<PiBooks />} />
        <NavLink href={"/callus"} title={"تماس با ما"} icon={<PiPhoneCall />} />
      </nav>
    </>
  );
};

export default NavBar;
