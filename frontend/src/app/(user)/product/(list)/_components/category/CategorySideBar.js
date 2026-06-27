import api from "@/services/api";
import Categorywrapper from "./Categorywrapper";

export default async function CategorySideBar() {
  // const { data } = await api.get("/category/list");
  // const categories = data ? data?.data?.categories : [];
  let categories = [];

  try {
    const { data } = await api.get("/category/list");
    categories = data?.data?.categories || [];
  } catch (error) {
    categories = [];
    console.log("CategorySideBar fetch error:", error?.message);
  }
  console.log(categories);
  return (
    <div className="w-full lg:w-[90%] rounded-2xl border border-secondary-200 bg-white/80 backdrop-blur-sm shadow-sm p-4 lg:p-5 pl-0!">
      <h3 className="text-sm font-semibold whitespace-nowrap mb-4">
        <span className="mygradient">دسته‌بندی‌ها</span>
      </h3>
      <Categorywrapper categories={categories} />
    </div>
  );
}
