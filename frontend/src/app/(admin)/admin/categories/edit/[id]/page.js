"use client";
import api from "@/services/api";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import CategoryForm from "../../../_components/CategoryForm";

const EditCategoryPage = () => {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [category, setCategory] = useState(null);
  useEffect(() => {
    const getCategory = async () => {
      try {
        const { data } = await api.get(`/category/${id}`);
        setCategory(data?.data?.category);
        console.log(data);
      } catch (error) {
        console.log(error?.response);
        setCategory(null);
      } finally {
        setIsLoading(false);
      }
    };
    getCategory();
  }, [id]);
  return isLoading ? (
    <p>loading...</p>
  ) : !category ? (
    <p>دسته‌بندی موردنظر یافت نشد.</p>
  ) : (
    <div className="space-y-5">
      <h3 className="text-base font-semibold lg:text-lg">
        <span className="mygradient">ویرایش دسته‌بندی‌</span>
      </h3>
      <CategoryForm category={category} />
    </div>
  );
};

export default EditCategoryPage;
