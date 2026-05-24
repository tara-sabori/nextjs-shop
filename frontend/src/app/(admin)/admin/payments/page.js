"use client";

import useGetData from "@/hooks/useGetData";
import PaymentsList from "./PaymentsList";

const AdminPaymentsPage = () => {
  const { loading, dataList, setDataList } = useGetData(
    "/admin/payment/list",
    "payments",
  );
  console.log(dataList);
  return (
    <>
      <h3 className="text-base font-semibold lg:text-lg">
        <span className="mygradient">لیست سفارشات</span>
      </h3>
      <PaymentsList
        payments={dataList}
        isLoading={loading}
      />
    </>
  );
};

export default AdminPaymentsPage;
