import api from "@/services/api";
import { Suspense } from "react";
import CategoryLoading from "./CategoryLoading";
import CategoryList from "./CategoryList";

export default async function CategorySideBar() {
  const { data } = await api.get("/category/list");
  const categories = data ? data?.data?.categories : [];
  console.log(categories);
  return (
    <div className="w-full lg:w-[90%] rounded-2xl border border-secondary-200 bg-white/80 backdrop-blur-sm shadow-sm p-4 lg:p-5 pl-0!">
      <h3 className="text-sm font-semibold whitespace-nowrap mb-4">
        <span className="mygradient">دسته‌بندی‌ها</span>
      </h3>
      <Suspense fallback={<CategoryLoading />}>
        <CategoryList categories={categories} />
      </Suspense>
    </div>
  );
}
