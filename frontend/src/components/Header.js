"use client";
import { useAuth } from "@/context/AuthContext";
import Link from "next/link";
import React, { useState } from "react";
import ProfileButton from "./ProfileButton";
import NavBar from "./NavBar";
import { PiList, PiShoppingCart } from "react-icons/pi";
import { toPersianNumbers } from "@/utils/toPersianNumbers";

const Header = () => {
  const { user, cart, isLoggedIn, isLoading } = useAuth();
  const cartLength = cart?.productDetail?.length || 0;
  const [open, setOpen] = useState(false);
  const url = user?.role === "ADMIN" ? "/admin" : "/profile";
  return (
    <header className="bg-secondary-50 flex justify-between items-center py-2 px-5 md:px-10 shadow-sm border-b border-b-secondary-200 fixed z-10 top-0 left-0 right-0">
      <button
        className="border border-secondary-300 p-1 rounded-md block lg:hidden cursor-pointer"
        onClick={() => setOpen(true)}
      >
        <PiList />
      </button>
      <NavBar open={open} setOpen={setOpen} />
      <div className="flex items-center gap-5">
        <Link href={"/cart"} className="text-2xl text-secondary-500 relative">
          {!isLoading && cartLength != 0 && (
            <div className="absolute text-xs bg-red-600 rounded-full w-4 h-4 pt-0.5 text-center text-white -top-2 -right-2">
              <span>{toPersianNumbers(cartLength)}</span>
            </div>
          )}
          <PiShoppingCart />
        </Link>
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
      </div>
    </header>
  );
};

export default Header;
