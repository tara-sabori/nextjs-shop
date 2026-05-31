"use client";
import { useAuth } from "@/context/AuthContext";
import React from "react";
import UserStatus from "./_components/UserStatus";
import PaymentsTabel from "./_components/PaymentsTabel";
import Link from "next/link";
import MyLoading from "@/components/MyLoading";

const ProfilePage = () => {
  const { user, payments, isLoading } = useAuth();
  return isLoading ? (
    <MyLoading />
  ) : (
    <div className="p-5 lg:pt-8 lg:w-[80%] space-y-5 lg:space-y-8">
      <h3 className="text-secondary-700 text-base lg:text-lg">
        کاربر <span className="font-semibold mygradient">{user?.name}</span>{" "}
        عزیز خوش آمدید!
      </h3>
      <UserStatus />
      <h3 className="text-base font-semibold lg:text-lg">
        <span className="mygradient">آخرین سفارشات</span>
      </h3>
      {payments?.length < 1 ? (
        <div className="space-y-3">
          <p className="font-semibold">سفارشی ثبت نشده</p>
          <Link href={"/product"} className="text-sm mygradient">
            مشاهده محصولات
          </Link>
        </div>
      ) : (
        <PaymentsTabel payments={payments?.slice(-3)} />
      )}
    </div>
  );
};

export default ProfilePage;
