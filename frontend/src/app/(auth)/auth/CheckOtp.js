"use client";
import { useEffect, useState } from "react";
import { IoMdArrowRoundBack } from "react-icons/io";
import OtpInputs from "./_components/OtpInputs";
import api from "@/services/api";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import SubmitButton from "@/components/SubmitButton";
import { useAuth } from "@/context/AuthContext";

export const CheckOtp = ({ phone, setStep, setOtpMessage, otpMessage }) => {
  const { dispatch } = useAuth();
  const router = useRouter();
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [time, setTime] = useState(90);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    let interval;
    if (time > 0) {
      interval = setInterval(() => {
        setTime((time) => time - 1);
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [time]);
  const backToStepOne = () => {
    setOtp(["", "", "", "", "", ""]);
    setStep(1);
    setTime(90);
  };
  const getOtp = async () => {
    const formData = {
      phoneNumber: phone,
    };
    try {
      const {data} = await api.post("/user/get-otp", formData);
      setOtp(["", "", "", "", "", ""]);
      setTime(90);
      setOtpMessage(data?.data?.message);
      toast.success("کد تایید ارسال شد.");
      console.log(data);
    } catch (error) {
      console.log(error);
      toast.error(error?.response?.data?.message || "مشکلی رخ داده است.");
    }
  };
  const checkOtpHandler = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const formData = {
      phoneNumber: phone,
      otp: otp.join(""),
    };
    console.log(formData);
    try {
      const { data } = await api.post("/user/check-otp", formData);
      console.log(data?.data);
      const role = data?.data?.user?.role;
      const isActive = data?.data?.user?.isActive;
      toast.success(data?.data?.message);
      dispatch({ type: "getUser", payload: data?.data });
      if (!isActive) router.replace("/auth/complete-profile");
      else if (role === "ADMIN") router.replace("/admin");
      else if (role === "USER") router.replace("/profile");
    } catch (error) {
      toast.error(error?.response?.data?.message || "مشکلی رخ داده است.");
      console.log(error?.response?.data?.message);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <form className="space-y-2" onSubmit={checkOtpHandler}>
      <div className="flex justify-between">
        <h2 className="text-primary-600 font-bold">نکست وان کد</h2>
        <IoMdArrowRoundBack
          onClick={backToStepOne}
          className="text-secondary-500 cursor-pointer"
          size={"20px"}
        />
      </div>
      <p className="text-xs text-secondary-800">
        کد تایید برای شماره {phone} ارسال شد
      </p>
      <h3 className="text-sm mb-4">
        کد تایید را وارد کنید
        <span className="text-xs text-secondary-800">{otpMessage}</span>
      </h3>
      <OtpInputs otp={otp} setOtp={setOtp} />
      <SubmitButton disabled={isLoading || otp?.join("")?.length < 6}>
        <span>تایید و ورود</span>
      </SubmitButton>
      <div className="text-left">
        {time ? (
          <span className="text-xs text-secondary-500">
            {time} ثانیه دیگر تا ارسال مجدد کد
          </span>
        ) : (
          <span
            className="text-xs text-secondary-500 cursor-pointer"
            onClick={getOtp}
          >
            ارسال مجدد کد
          </span>
        )}
      </div>
    </form>
  );
};
