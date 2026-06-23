import { useSearchParams } from "next/navigation";
import PaymentRow from "./PaymentRow";
import Paginate from "@/components/Paginate";

export const adminPaymentListTableTHeads = [
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
    label: "کاربر",
  },
  {
    id: 5,
    label: "محصولات",
  },
  {
    id: 6,
    label: "مبلغ",
  },
  {
    id: 7,
    label: "تاریخ",
  },
  {
    id: 8,
    label: "وضعیت",
  },
];

const PaymentsList = ({ payments, isLoading }) => {
  const page = useSearchParams().get("page") || 1;
  const lastIndex = page * 4;
  const firstIndex = lastIndex - 4;
  const records = payments?.slice(firstIndex, lastIndex);
  const pageCount = Math.ceil(payments?.length / 4);
  return (
    <>
      <div className="overflow-x-auto my-8 shadow-sm">
        <table className="border-collapse table-auto w-full min-w-200 text-sm">
          <thead>
            <tr>
              {adminPaymentListTableTHeads.map((item) => {
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
                <td colSpan={8} className="text-center p-5 py-20">
                  <span>در حال بارگذاری...</span>
                </td>
              </tr>
            ) : records?.length < 1 ? (
              <tr>
                <td colSpan={8} className="text-center p-5 py-20">
                  <span>موردی یافت نشد</span>
                </td>
              </tr>
            ) : (
              records?.map((payment) => (
                <PaymentRow
                  key={payment?._id}
                  payment={payment}
                  index={payments.indexOf(payment)}
                />
              ))
            )}
          </tbody>
        </table>
      </div>
      {!isLoading && <Paginate pageCount={pageCount} isClient={true} />}
    </>
  );
};

export default PaymentsList;
