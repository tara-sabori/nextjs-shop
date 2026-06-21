"use client";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";

const CategoryList = ({ categories }) => {
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams);
  params.set("page", 1);
  const query = params ? `?${params}` : "";
  const pathname = usePathname();
  const [, , , cat] = pathname.split("/");
  console.log(cat);
  return (
    <div className="flex flex-row lg:flex-col gap-6 lg:gap-4 lg:min-h-30 lg:max-h-75 overflow-x-auto lg:overflow-y-auto pl-4 pb-2">
      <Link
        className={`group relative flex items-center gap-3 rounded-xl border px-4 py-3 text-sm transition-all duration-300 whitespace-nowrap min-w-fit lg:w-full ${
                !cat
                  ? "border-primary-400 bg-primary-50 text-primary-700 shadow-sm"
                  : "border-secondary-200 bg-secondary-50 text-secondary-700 hover:border-primary-300 hover:bg-primary-50/50"
              }`}
        href={`/product${query}`}
      >
        همه
      </Link>
      {categories?.map((category) => (
        <Link
          className={`group relative flex items-center gap-3 rounded-xl border px-4 py-3 text-sm transition-all duration-300 whitespace-nowrap min-w-fit lg:w-full ${
                cat === category?.englishTitle
                  ? "border-primary-400 bg-primary-50 text-primary-700 shadow-sm"
                  : "border-secondary-200 bg-secondary-50 text-secondary-700 hover:border-primary-300 hover:bg-primary-50/50"
              }`}
          key={category?._id}
          href={`/product/category/${category?.englishTitle}${query}`}
        >
          {category?.title}
        </Link>
      ))}
    </div>
  );
};

export default CategoryList;
