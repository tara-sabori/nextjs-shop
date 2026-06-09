"use client";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { useCallback, useState } from "react";

const sortOptions = [
  {
    id: 1,
    value: "earliest",
    label: "قدیمی ترین",
  },
  {
    id: 2,
    value: "latest",
    label: "جدید ترین",
  },
  {
    id: 3,
    value: "popular",
    label: "محبوب ترین",
  },
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

  const sortHandler = (e) => {
    const value = e.target.value;
    setMySort(value);
    router.push(pathname + "?" + createQueryString("sort", value));
  };
  return (
    <div className="w-full lg:w-[90%] overflow-x-auto rounded-lg lg:border lg:border-secondary-300 bg-secondary-50 p-3 flex flex-row lg:flex-col gap-4">
      <h3 className="mygradient text-sm font-semibold whitespace-nowrap">
        مرتب‌سازی
      </h3>
      {sortOptions?.map((option) => (
        <div className="flex items-center gap-2" key={option?.id}>
          <input
            className="cursor-pointer"
            type="radio"
            name="sort-filter"
            id={option?.id}
            value={option?.value}
            checked={mySort === option?.value}
            onChange={sortHandler}
          />
          <label
            className="cursor-pointer text-sm text-secondary-700 whitespace-nowrap"
            htmlFor={option?.id}
          >
            {option?.label}
          </label>
        </div>
      ))}
    </div>
  );
};

export default ProductFilter;
