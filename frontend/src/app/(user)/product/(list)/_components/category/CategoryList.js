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
    <div className="flex flex-row lg:flex-col gap-6 lg:gap-2 lg:h-30 lg:max-h-75 lg:overflow-y-auto">
      <Link
        className={`${!cat ? "mygradient" : "text-secondary-700"} text-sm whitespace-nowrap`}
        href={`/product${query}`}
      >
        همه
      </Link>
      {categories?.map((category) => (
        <Link
          className={`${cat === category?.englishTitle ? "mygradient" : "text-secondary-700"} text-sm whitespace-nowrap`}
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
