"use client";
import SubmitButton from "@/components/SubmitButton";
import TextField from "@/components/TextField";
import { useAuth } from "@/context/AuthContext";
import api from "@/services/api";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const CompleteProfilePage = () => {
  const { dispatch } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (myData) => {
    console.log(myData);
    try {
      const { data } = await api.post("/user/complete-profile", myData);
      console.log(data?.data);
      router.replace("/profile");
      dispatch({ type: "getUser", payload: data?.data });
    } catch (error) {
      console.log(error);
      toast.error(error?.response?.data?.message || "مشکلی رخ داده است.");
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className="w-[80%] md:w-100 border border-secondary-300 py-8 px-4 rounded-md mx-auto mt-10 relative">
      <div className="absolute -top-3 w-fit bg-background">
        <h3 className="text-base mygradient">تکمیل اطلاعات</h3>
      </div>
      <form className="space-y-2" onSubmit={handleSubmit(onSubmit)}>
        <TextField
          name={"name"}
          label={"نام و نام خوانوادگی"}
          required
          register={register}
          errors={errors}
          validationSchema={{
            required: "این فیلد الزامی است.",
          }}
        />
        <TextField
          name={"email"}
          label={"ایمیل"}
          placeholder="test@gmail.com"
          register={register}
          errors={errors}
          required
          validationSchema={{
            required: "این فیلد الزامی است.",
          }}
        />
        <SubmitButton>ثبت</SubmitButton>
      </form>
    </div>
  );
};

export default CompleteProfilePage;
