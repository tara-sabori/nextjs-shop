"use client";
import InfoCard from "@/components/InfoCard";
import MyLoading from "@/components/MyLoading";
import { useAuth } from "@/context/AuthContext";
import api from "@/services/api";
import { toPersianNumbers } from "@/utils/toPersianNumbers";
import React, { useEffect, useState } from "react";
import { PiBasket, PiGridFour, PiUsersFour } from "react-icons/pi";

const AdminPage = () => {
  const { user } = useAuth();
  const [dashboardData, setDashboardData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await api.get("/admin/dashboard/stats");
        setDashboardData(data?.data);
      } catch (error) {
        console.log(error?.response);
      } finally {
        setIsLoading(false);
      }
    };
    getData();
  }, []);
  console.log(dashboardData);
  return isLoading ? (
    <MyLoading />
  ) : (
    <div className="p-5 lg:pt-8 lg:w-[80%] space-y-5 lg:space-y-8">
      <h3 className="text-secondary-700 text-base lg:text-lg">
        ادمین <span className="font-semibold mygradient">{user?.name}</span>{" "}
        عزیز خوش آمدید!
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <InfoCard
          icon={<PiBasket />}
          title={"محصولات"}
          value={toPersianNumbers(dashboardData?.categories || 0)}
          className={"bg-primary-100 border-r-8 border-primary-800"}
        />
        <InfoCard
          icon={<PiGridFour />}
          title={"دسته‌بندی"}
          value={toPersianNumbers(dashboardData?.categories || 0)}
          className={"bg-pink-100 border-r-8 border-pink-800"}
        />
        <InfoCard
          icon={<PiUsersFour />}
          title={"کاربران"}
          value={toPersianNumbers(dashboardData?.categories || 0)}
          className={"bg-purple-100 border-r-8 border-purple-800"}
        />
      </div>
    </div>
  );
};

export default AdminPage;
