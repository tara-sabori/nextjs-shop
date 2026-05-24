import PaymentRow from "./PaymentRow";

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
  return (
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
              <td colSpan={8} className="text-center p-5">
                <span>در حال بارگذاری...</span>
              </td>
            </tr>
          ) : payments?.length < 1 ? (
            <tr>
              <td colSpan={8} className="text-center p-5">
                <span>موردی یافت نشد</span>
              </td>
            </tr>
          ) : (
            payments.map((payment, index) => (
              <PaymentRow payment={payment} index={index} />
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default PaymentsList;
