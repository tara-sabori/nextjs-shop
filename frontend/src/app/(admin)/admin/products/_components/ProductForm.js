"use client";
import RHFSelect from "@/components/RHFSElect";
import SubmitButton from "@/components/SubmitButton";
import TextAreaField from "@/components/TextAreaField";
import TextField from "@/components/TextField";
import useCategories from "@/hooks/useCategories";
import api from "@/services/api";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const ProductForm = ({ product = {} }) => {
  const { isLoadingCategories, categories } = useCategories();
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      title: product?.title || "",
      description: product?.description || "",
      slug: product?.slug || "",
      brand: product?.brand || "",
      category: product?.category?._id || "",
      price: product?.price || 0,
      discount: product?.discount || 0,
      offPrice: product?.offPrice || 0,
      countInStock: product?.countInStock || "",
      imageLink: product?.imageLink || "",
    },
  });
  const calculateDiscount = (discount, price) => {
    const newPrice = price - (price * discount) / 100;
    return newPrice;
  };
  const onSubmit = async (myData) => {
    const offPrice = myData?.discount
      ? calculateDiscount(myData?.discount, myData.price)
      : myData?.price;
    const formData = { ...myData, offPrice };
    console.log(formData);
    try {
      let res;
      if (product?._id) {
        res = await api.patch(
          `/admin/product/update/${product?._id}`,
          formData,
        );
      } else {
        res = await api.post("/admin/product/add", formData);
      }
      const message = res?.data?.data?.message;
      toast.success(message);
      router.push("/admin/products");
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
        label={"عنوان محصول"}
        required
        validationSchema={{ required: "این فیلد الزامی است." }}
        register={register}
        errors={errors}
      />
      <TextAreaField
        name={"description"}
        label={"توضیحات"}
        required
        validationSchema={{ required: "این فیلد الزامی است." }}
        register={register}
        errors={errors}
      />
      <TextField
        name={"slug"}
        label={"اسلاگ"}
        required
        validationSchema={{ required: "این فیلد الزامی است." }}
        register={register}
        errors={errors}
      />
      <TextField
        name={"brand"}
        label={"برند"}
        required
        validationSchema={{ required: "این فیلد الزامی است." }}
        register={register}
        errors={errors}
      />
      <RHFSelect
        name={"category"}
        label={"دسته‌بندی"}
        options={categories?.map((cat) => {
          return { value: cat?._id, label: cat?.title };
        })}
        required
        validationSchema={{ required: "این فیلد الزامی است." }}
        isLoading={isLoadingCategories}
        register={register}
        errors={errors}
      />
      <TextField
        name={"price"}
        label={"قیمت"}
        required
        validationSchema={{ required: "این فیلد الزامی است." }}
        register={register}
        errors={errors}
        type="number"
        inputMode="numeric"
        min={0}
      />
      <TextField
        name={"discount"}
        label={"تخفیف(به درصد)"}
        register={register}
        type="number"
        inputMode="numeric"
        min={0}
      />
      {/* <TextField
        name={"offPrice"}
        label={"قیمت روی تخفیف"}
        register={register}
        type="number"
        inputMode="numeric"
        min={0}
      /> */}
      <TextField
        name={"countInStock"}
        label={"موجودی"}
        required
        validationSchema={{ required: "این فیلد الزامی است." }}
        register={register}
        errors={errors}
        type="number"
        inputMode="numeric"
        min={0}
      />
      <TextField
        name={"imageLink"}
        label={"لینک عکس محصول"}
        register={register}
      />
      <SubmitButton disabled={isLoading || isLoadingCategories}>
        {product?._id ? <span>ویرایش</span> : <span>ثبت</span>}
      </SubmitButton>
    </form>
  );
};

export default ProductForm;
