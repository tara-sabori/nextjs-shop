"use client";
import { useAuth } from "@/context/AuthContext";
import Link from "next/link";
import React, { useState } from "react";
import ProfileButton from "./ProfileButton";
import NavBar from "./NavBar";
import { PiList } from "react-icons/pi";

const Header = () => {
  const { user, isLoggedIn, isLoading } = useAuth();
  const [open, setOpen] = useState(false);
  console.log(user);
  const url = user?.role === "ADMIN" ? "/admin" : "/profile";
  return (
    <header className="bg-secondary-50 flex justify-between items-center py-2 px-5 md:px-10 shadow-sm border-b border-b-secondary-200 absolute top-0 left-0 right-0">
      <button
        className="border border-secondary-300 p-1 rounded-md block lg:hidden cursor-pointer"
        onClick={() => setOpen(true)}
      >
        <PiList />
      </button>
      <NavBar open={open} setOpen={setOpen} />
      {isLoading ? (
        <div className="w-23.75 py-4 text-sm rounded-xl bg-secondary-400 animate-pulse"></div>
      ) : isLoggedIn ? (
        <ProfileButton name={user?.name} url={url} />
      ) : (
        <Link
          className="bgGradient w-23.75 py-1.5 text-center font-semibold text-sm text-white rounded-xl"
          href={"/auth"}
        >
          ورود/ثبت‌نام
        </Link>
      )}
    </header>
  );
};

export default Header;
