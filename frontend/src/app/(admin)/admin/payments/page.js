"use client";

import useGetData from "@/hooks/useGetData";
import PaymentsList from "./PaymentsList";
import { Suspense } from "react";

const AdminPaymentsContent = () => {
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
      <PaymentsList payments={dataList} isLoading={loading} />
    </>
  );
};

const AdminPaymentsPage = () => {
  return(
    <Suspense fallback={<div>
      loading...
    </div>}>
      <AdminPaymentsContent />
    </Suspense>
  )
};

export default AdminPaymentsPage;
