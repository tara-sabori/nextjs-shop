"use client";
import useCategories from "@/hooks/useCategories";
import React from "react";
import CategoriesList from "./categoriesList";
import Link from "next/link";
import { PiPlus } from "react-icons/pi";

const AdminCategoriesPage = () => {
  const { isLoadingCategories, categories, setCategories } = useCategories();
  console.log(categories);
  return (
    <>
      <div className="flex items-center justify-between">
        <h3 className="text-base font-semibold lg:text-lg">
          <span className="mygradient">لیست دسته‌بندی‌ها</span>
        </h3>
        <Link
          className="bgGradient flex items-center gap-1 p-2 rounded-lg text-sm text-white"
          href={"/admin/categories/add"}
        >
          <PiPlus className="text-lg" />
          <span>افزودن دسته‌بندی‌</span>
        </Link>
      </div>
      <CategoriesList
        categories={categories}
        setCategories={setCategories}
        isLoading={isLoadingCategories}
      />
    </>
  );
};

export default AdminCategoriesPage;
