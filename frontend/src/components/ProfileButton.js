import useLogOut from "@/hooks/useLogOut";
import Link from "next/link";
import React, { useState } from "react";
import { PiCaretDown, PiUser } from "react-icons/pi";

const ProfileButton = ({ name, url }) => {
  const [openMenue, setOpenMenue] = useState(false);
  const { logoutHandler } = useLogOut();
  return (
    <button
      type="button"
      onClick={() => setOpenMenue(!openMenue)}
      className="relative flex items-center justify-center p-1.5 gap-1 w-fit cursor-pointer text-secondary-700 border border-secondary-200 rounded-lg"
    >
      <PiUser />
      <PiCaretDown />
      {openMenue && (
        <div className="bg-secondary-50 flex flex-col gap-2 rounded-md shadow-md border border-secondary-300 p-2 w-[150px] absolute -bottom-20 left-0">
          <Link href={url} className="text-right text-sm">
            پروفایل من
          </Link>
          <span
            onClick={logoutHandler}
            className="text-right text-sm text-red-500"
          >
            خروج از حساب کاربری
          </span>
        </div>
      )}
    </button>
  );
};

export default ProfileButton;
