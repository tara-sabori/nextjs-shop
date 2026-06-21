"use client";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { useCallback, useState } from "react";

const sortOptions = [
  { id: 1, value: "earliest", label: "قدیمی ترین" },
  { id: 2, value: "latest", label: "جدید ترین" },
  { id: 3, value: "popular", label: "محبوب ترین" },
];

const ProductFilter = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const sort = searchParams?.get("sort");
  const [mySort, setMySort] = useState(sort || "earliest");

  const createQueryString = useCallback(
    (name, value) => {
      const params = new URLSearchParams(searchParams);
      params.set(name, value);
      params.set("page", 1);
      return params.toString();
    },
    [searchParams],
  );

  const sortHandler = (value) => {
    setMySort(value);
    router.push(pathname + "?" + createQueryString("sort", value));
  };

  return (
    <div className="w-full lg:w-[90%] rounded-2xl border border-secondary-200 bg-white/80 backdrop-blur-sm shadow-sm p-4 lg:p-5">
      <div className="flex items-center justify-between mb-4">
        <h3 className="mygradient text-sm font-bold whitespace-nowrap">
          مرتب‌سازی
        </h3>
        <span className="text-xs text-secondary-500">انتخاب یک گزینه</span>
      </div>

      <div className="flex flex-row lg:flex-col gap-3 overflow-x-auto pb-2">
        {sortOptions.map((option) => {
          return (
            <button
              key={option.id}
              type="button"
              onClick={() => sortHandler(option.value)}
              className={`group relative flex items-center gap-3 rounded-xl border px-4 py-3 text-sm transition-all duration-300 whitespace-nowrap min-w-fit lg:w-full cursor-pointer ${
                mySort === option.value
                  ? "border-primary-400 bg-primary-50 text-primary-700 shadow-sm"
                  : "border-secondary-200 bg-secondary-50 text-secondary-700 hover:border-primary-300 hover:bg-primary-50/50"
              }`}
            >
              <span className="font-medium">{option.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default ProductFilter;
