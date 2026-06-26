"use client";
import useGetData from "@/hooks/useGetData";
import UsersList from "./UsersList";
import { Suspense } from "react";

const AdminUsersContent = () => {
  const { loading, dataList, setDataList } = useGetData(
    "/admin/user/list",
    "users",
  );
  console.log(dataList);
  return (
    <>
      <h3 className="text-base font-semibold lg:text-lg">
        <span className="mygradient">لیست کاربران</span>
      </h3>
      <UsersList users={dataList} isLoading={loading} />
    </>
  );
};

const AdminUsersPage = () => {
  return (
    <Suspense fallback={<div>loading...</div>}>
      <AdminUsersContent />
    </Suspense>
  );
};

export default AdminUsersPage;
