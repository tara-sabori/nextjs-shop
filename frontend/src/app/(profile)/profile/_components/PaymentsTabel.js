import toLocalDateString from "@/utils/toLocalDateString";
import {
  toPersianNumbers,
  toPersianNumbersWithComma,
} from "@/utils/toPersianNumbers";
import React from "react";

const userPaymentTHeads = [
  {
    id: 1,
    label: "#",
  },
  {
    id: 2,
    label: "شماره فاکتور",
  },
  {
    id: 3,
    label: "توضیحات",
  },
  {
    id: 4,
    label: "محصولات",
  },
  {
    id: 5,
    label: "مبلغ",
  },
  {
    id: 6,
    label: "تاریخ",
  },
  {
    id: 7,
    label: "وضعیت",
  },
];

const PaymentsTabel = ({ payments }) => {
  return (
    <div className="overflow-x-auto overflow-y-hidden my-8">
      <table className="border-collapse table-auto w-full min-w-200 text-sm">
        <thead>
          <tr>
            {userPaymentTHeads.map((item) => {
              return (
                <th className="whitespace-nowrap table__th" key={item.id}>
                  {item.label}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {payments?.length < 1 ? (
            <tr>
              <td colSpan={7} className="text-center p-5">
                <span>موردی یافت نشد</span>
              </td>
            </tr>
          ) : (
            payments?.map((payment, index) => {
              return (
                <tr key={payment?._id}>
                  <td className="table__td">{index}</td>
                  <td className="table__td  whitespace-nowrap truncate">
                    {toPersianNumbers(payment?.invoiceNumber)}
                  </td>
                  <td className="table__td  max-w-70 whitespace-nowrap truncate">
                    {payment?.description}
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
                  <td className="table__td whitespace-nowrap">
                    {payment?.amount!=0? toPersianNumbersWithComma(payment?.amount)+" تومان":"رایگان"} 
                  </td>
                  <td className="table__td">
                    {toLocalDateString(payment?.createdAt)}
                  </td>
                  <td className="table__td">
                    {payment.status === "COMPLETED" ? (
                      <span className="badge badge--success text-xs">موفق</span>
                    ) : (
                      <span className="badge badge--error text-xs">ناموفق</span>
                    )}
                  </td>
                </tr>
              );
            })
          )}
        </tbody>
      </table>
    </div>
  );
};

export default PaymentsTabel;
