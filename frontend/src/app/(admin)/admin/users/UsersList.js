import { useSearchParams } from "next/navigation";
import UsersRow from "./UsersRow";
import Paginate from "@/components/Paginate";

export const userListTableHeads = [
  {
    id: 1,
    label: "#",
  },
  {
    id: 2,
    label: "نام",
  },
  {
    id: 3,
    label: "ایمیل",
  },
  {
    id: 4,
    label: "شماره موبایل",
  },
  {
    id: 5,
    label: "محصولات",
  },
  {
    id: 6,
    label: "تاریخ پیوستن",
  },
];

const UsersList = ({users,isLoading}) => {
  const page = useSearchParams().get("page") || 1;
    const lastIndex = page * 4;
    const firstIndex = lastIndex - 4;
    const records = users?.slice(firstIndex, lastIndex);
    const pageCount = Math.ceil(users?.length / 4);
  return (
    <>
      <div className="overflow-x-auto my-8 shadow-sm">
      <table className="border-collapse table-auto w-full min-w-200 text-sm">
        <thead>
          <tr>
            {userListTableHeads.map((item) => {
              return (
                <th className="whitespace-nowrap table__th" key={item.id}>
                  {item.label}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {isLoading ? (
            <tr>
              <td colSpan={6} className="text-center p-5">
                <span>در حال بارگذاری...</span>
              </td>
            </tr>
          ) : records?.length < 1 ? (
            <tr>
              <td colSpan={6} className="text-center p-5">
                <span>موردی یافت نشد</span>
              </td>
            </tr>
          ) : (
            records.map((user, index) => (
              <UsersRow key={user?._id} user={user} index={users?.indexOf(user)} />
            ))
          )}
        </tbody>
      </table>
    </div>
      {!isLoading && <Paginate pageCount={pageCount} isClient={true} />}
    </>
  )
}

export default UsersList