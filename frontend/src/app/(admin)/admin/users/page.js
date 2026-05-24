"use client"
import useGetData from "@/hooks/useGetData";
import UsersList from "./UsersList";

const AdminUsersPage = () => {
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
      <UsersList
        users={dataList}
        isLoading={loading}
      />
    </>
  )
}

export default AdminUsersPage