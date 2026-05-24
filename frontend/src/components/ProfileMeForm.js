"use client";
import SubmitButton from "@/components/SubmitButton";
import TextField from "@/components/TextField";
import { useAuth } from "@/context/AuthContext";
import api from "@/services/api";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const ProfileMeForm = ({ user }) => {
  const { dispatch } = useAuth();
  const [isLoading, setIsLoading] = useState(false);

  const defaultValues = {
    name: user?.name || "",
    phoneNumber: user?.phoneNumber || "",
    email: user?.email || "",
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues, mode: "onChange" });

  const onSubmit = async (myData) => {
    setIsLoading(true);
    const userData = { ...user, ...myData };
    try {
      const { data } = await api.patch("/user/update", myData);
      toast.success(data?.data?.message);
      dispatch({ type: "updateUser", payload: userData });
    } catch (error) {
      console.log(error?.response);
      toast.error(error?.response?.data?.message || "مشکلی رخ داده است.");
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <form className="p-5 space-y-4 md:w-125" onSubmit={handleSubmit(onSubmit)}>
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
        name={"phoneNumber"}
        label={"شماره همراه"}
        inputMode="numeric"
        required
        register={register}
        errors={errors}
        validationSchema={{
          required: "این فیلد الزامی است.",
          pattern: {
            value: /^\d*$/,
            message: "فرمت وارد شده اشتباه است.",
          },
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
          pattern: {
            value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,
            message: "فرمت ایمیل وارد شده صحیح نیست.",
          },
        }}
      />
      <SubmitButton disabled={isLoading}>ویرایش</SubmitButton>
    </form>
  );
};

export default ProfileMeForm;
