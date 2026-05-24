import UsersRow from "./UsersRow";

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
  return (
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
          ) : users?.length < 1 ? (
            <tr>
              <td colSpan={6} className="text-center p-5">
                <span>موردی یافت نشد</span>
              </td>
            </tr>
          ) : (
            users.map((user, index) => (
              <UsersRow user={user} index={index} />
            ))
          )}
        </tbody>
      </table>
    </div>
  )
}

export default UsersList