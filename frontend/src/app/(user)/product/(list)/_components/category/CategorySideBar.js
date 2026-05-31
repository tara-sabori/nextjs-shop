import api from "@/services/api";
import { Suspense } from "react";
import CategoryLoading from "./CategoryLoading";
import CategoryList from "./CategoryList";

export default async function CategorySideBar() {
  const { data } = await api.get("/category/list");
  const categories = data ? data?.data?.categories : [];
  console.log(categories);
  return (
    <div className="w-full lg:w-[90%] overflow-x-auto rounded-lg lg:border lg:border-secondary-300 bg-secondary-50 p-3 flex flex-row lg:flex-col gap-4">
      <h3 className="mygradient text-sm font-semibold whitespace-nowrap">لیست دسته‌بندی‌ها</h3>
      <Suspense fallback={<CategoryLoading />}>
        <CategoryList categories={categories} />
      </Suspense>
    </div>
  );
}
