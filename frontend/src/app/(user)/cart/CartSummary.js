import SubmitButton from "@/components/SubmitButton";
import { useAuth } from "@/context/AuthContext";
import api from "@/services/api";
import { toPersianNumbersWithComma } from "@/utils/toPersianNumbers";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";

export const CartSummary = ({ payDetail }) => {
  const { dispatch } = useAuth();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const { totalOffAmount, totalPrice, totalGrossPrice } = payDetail;
  const createPaymentHandler = async () => {
    setIsLoading(true);
    try {
      const { data } = await api.post("/payment/create");
      const { message, payments } = data?.data;
      toast.success(message);
      dispatch({ type: "createPayment", payload: payments });
      router.push("/profile/payments");
    } catch (error) {
      console.log(error?.response);
      toast.error(error?.response?.data?.message || "مشکلی رخ داده است.");
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className="border border-secondary-200 p-4 rounded-xl shadow-sm bg-secondary-50">
      <p className="mb-4 font-bold mygradient">اطلاعات پرداخت</p>
      <div className="mb-4 text-sm text-secondary-700 flex items-center justify-between">
        <span>جمع کل</span>
        <span>{toPersianNumbersWithComma(totalGrossPrice)}</span>
      </div>
      <div className="mb-4 text-sm text-secondary-700 flex items-center justify-between">
        <span>تخفیف</span>
        <span>{toPersianNumbersWithComma(totalOffAmount)} - </span>
      </div>
      <div className="mb-6 text-sm text-secondary-700 flex items-center justify-between font-bold">
        <span>مبلغ قابل پرداخت</span>
        <span>{toPersianNumbersWithComma(totalPrice)}</span>
      </div>
      <div>
        <button
          className="bgGradient w-full disabled:from-secondary-400 disabled:to-secondary-800 cursor-pointer disabled:cursor-not-allowed rounded-md p-1.5 text-sm text-white"
          onClick={createPaymentHandler}
          disabled={isLoading}
        >
          ثبت سفارش
        </button>
      </div>
    </div>
  );
};
