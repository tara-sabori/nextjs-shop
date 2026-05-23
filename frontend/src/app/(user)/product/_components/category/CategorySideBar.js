import api from "@/services/api";
import { Suspense } from "react";
import CategoryLoading from "./CategoryLoading";
import CategoryList from "./CategoryList";

export default async function CategorySideBar() {
  const { data } = await api.get("/category/list");
  const categories = data ? data?.data?.categories : [];
  console.log(categories);
  return (
    <div className="w-[90%] rounded-md border border-secondary-300 bg-secondary-50 p-3 space-y-3">
      <h3 className="mygradient text-sm font-semibold">لیست دسته‌بندی‌ها</h3>
      <Suspense fallback={<CategoryLoading />}>
        <CategoryList categories={categories} />
      </Suspense>
    </div>
  );
}
