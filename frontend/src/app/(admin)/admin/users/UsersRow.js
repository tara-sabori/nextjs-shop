import toLocalDateString from "@/utils/toLocalDateString";
import { toPersianNumbers } from "@/utils/toPersianNumbers";

const UsersRow = ({ user,index }) => {
  return (
    <tr>
      <td className="table__td">{toPersianNumbers(index+1)}</td>
      <td className="table__td  whitespace-nowrap">{user?.name}</td>
      <td className="table__td">{user?.email}</td>
      <td className="table__td">
        <div className="flex whitespace-nowrap gap-x-2 items-center">
          {user?.phoneNumber}
        </div>
      </td>
      <td className="table__td">
        <div className="flex flex-col gap-y-2 items-start">
          {user?.Products.map((product, index) => {
            return (
              <span className="badge badge--secondary text-xs" key={index}>
                {product.title}
              </span>
            );
          })}
        </div>
      </td>
      <td className="table__td">{toLocalDateString(user?.createdAt)}</td>
    </tr>
  );
};

export default UsersRow;
