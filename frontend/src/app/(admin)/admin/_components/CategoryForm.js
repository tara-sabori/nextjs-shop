"use client";
import SubmitButton from "@/components/SubmitButton";
import TextAreaField from "@/components/TextAreaField";
import TextField from "@/components/TextField";
import api from "@/services/api";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const CategoryForm = ({ category = {} }) => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    defaultValues: {
      title: category?.title || "",
      englishTitle: category?.englishTitle || "",
      description: category?.description || "",
    },
  });
  const onSubmit = async (myData) => {
    const formData = { ...myData, type: "product" };
    console.log(formData);
    try {
      let res;
      if (category?._id) {
        res = await api.patch(
          `/admin/category/update/${category?._id}`,
          formData,
        );
      } else {
        res = await api.post("/admin/category/add", formData);
      }
      const message = res?.data?.data?.message;
      toast.success(message);
      router.push("/admin/categories");
    } catch (error) {
      console.log(error?.response);
      toast.error(error?.response?.data?.message || "مشکلی رخ داده است.");
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <form className="space-y-4 md:w-125" onSubmit={handleSubmit(onSubmit)}>
      <TextField
        name={"title"}
        label={"عنوان به فارسی"}
        register={register}
        required
        validationSchema={{
          required: "این فیلد الزامی است.",
          pattern: {
            value: /^[آاآبپتثجچحخدذرزژسشصضطظعغفقکگلمنوهی\u06F0-\u06F9\s]+$/,
            message: "فقط حروف فارسی مجاز است.",
          },
          minLength: {
            value: 3,
            message: "باید بیشتر از دو کاراکتر باشد.",
          },
        }}
        errors={errors}
      />
      <TextField
        name={"englishTitle"}
        label={"عنوان به انگلیسی"}
        register={register}
        required
        validationSchema={{
          required: "این فیلد الزامی است.",
          pattern: {
            value: /^[A-Za-z]+(?:-[A-Za-z]+)*$/,
            message: "فقظ حروف انگلیسی و - بین کلمات مجاز است.",
          },
        }}
        errors={errors}
      />
      <TextAreaField
        name={"description"}
        label={"توضیحات"}
        register={register}
        errors={errors}
        required
      />
      <SubmitButton disabled={isLoading}>
        {category?._id ? <span>ویرایش</span> : <span>ثبت</span>}
      </SubmitButton>
    </form>
  );
};

export default CategoryForm;
