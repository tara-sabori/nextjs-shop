"use client";
import SubmitButton from "@/components/SubmitButton";
import api from "@/services/api";
import { useState } from "react";
import toast from "react-hot-toast";

const GetOtp = ({ setStep, phone, setPhone, setOtpMessage }) => {
  const [isLoading, setIsLoading] = useState(false);
  const getOtpHandler = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const formData = {
      phoneNumber: phone,
    };
    try {
      const { data } = await api.post("/user/get-otp", formData);
      console.log(data);
      setOtpMessage(data?.data?.message);
      toast.success("کد تایید ارسال شد.");
      setStep(2);
    } catch (error) {
      console.log(error);
      toast.error(error?.response?.data?.message || "مشکلی رخ داده است.");
    } finally {
      setIsLoading(false);
    }
  };
  const validPhoneNumber = (e) => {
    const value = e.target.value;
    const pattern = /^\d*$/;
    if (pattern.test(value)) {
      setPhone(value);
    }
  };
  return (
    <form className="space-y-2" onSubmit={getOtpHandler}>
      <h2 className="text-primary-600 font-bold">نکست وان کد</h2>
      <h3 className="text-sm">ورود | ثبت نام</h3>
      <p className="text-sm">لطفا شماره موبایل خود را وارد کنید</p>
      <input
        type="text"
        placeholder="شماره موبایل"
        value={phone}
        onChange={validPhoneNumber}
        inputMode="numeric"
        className="border border-secondary-300 text-base my-3 rounded-lg w-full p-1.5 outline-none placeholder:text-sm"
      />
      <SubmitButton disabled={isLoading || phone?.length !== 11}>
        <span>ورود</span>
      </SubmitButton>
    </form>
  );
};

export default GetOtp;
