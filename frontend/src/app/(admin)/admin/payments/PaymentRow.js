import toLocalDateString from "@/utils/toLocalDateString";
import { toPersianNumbers, toPersianNumbersWithComma } from "@/utils/toPersianNumbers";
import React from "react";

const PaymentRow = ({ payment, index }) => {
  return (
    <tr>
      <td className="table__td">{toPersianNumbers(index + 1)}</td>
      <td className="table__td  whitespace-nowrap truncate">
        {payment?.invoiceNumber}
      </td>
      <td className="table__td  max-w-70 whitespace-nowrap truncate">
        {payment?.description}
      </td>
      <td className="table__td  whitespace-nowrap truncate">
        <div className="flex flex-col gap-y-2">
          <span> {payment?.user?.name}</span>
          <span> {payment?.user?.email}</span>
          <span className="font-bold">{payment?.user?.phoneNumber}</span>
        </div>
      </td>
      <td className="table__td">
        <div className="flex flex-col gap-y-2 items-start">
          {payment?.cart?.productDetail.map((product) => {
            return (
              <span
                className="badge badge--secondary text-xs"
                key={product?._id}
              >
                {product?.title}
              </span>
            );
          })}
        </div>
      </td>
      <td className="table__td">{toPersianNumbersWithComma(payment?.amount)}</td>
      <td className="table__td">{toLocalDateString(payment?.createdAt)}</td>
      <td className="table__td">
        {payment?.status === "COMPLETED" ? (
          <span className="badge badge--success text-xs">موفق</span>
        ) : (
          <span className="badge badge--error text-xs">ناموفق</span>
        )}
      </td>
    </tr>
  );
};

export default PaymentRow;
