import useLogOut from "@/hooks/useLogOut";
import Link from "next/link";
import React, { useState } from "react";
import { PiUser } from "react-icons/pi";

const ProfileButton = ({ name, url }) => {
  const [openMenue, setOpenMenue] = useState(false);
  const { logoutHandler } = useLogOut();
  return (
    <button
      type="button"
      onClick={() => setOpenMenue(!openMenue)}
      className="relative flex items-center justify-center py-1.5 gap-1 min-w-42.5 cursor-pointer text-secondary-700"
    >
      <PiUser />
      <span className="text-sm">{name}</span>
      {openMenue && (
        <div className="bg-secondary-100/80 flex flex-col gap-2 rounded-md shadow-md border border-secondary-300 p-2 w-full absolute -bottom-20">
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
