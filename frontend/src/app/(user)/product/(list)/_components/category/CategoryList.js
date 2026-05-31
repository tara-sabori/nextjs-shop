"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const CategoryList = ({ categories }) => {
  const pathname = usePathname();
  const [, , , cat] = pathname.split("/");
  console.log(cat);
  return (
    <div className="flex flex-row lg:flex-col gap-6 lg:gap-2 lg:h-30 lg:max-h-75 lg:overflow-y-auto">
      <Link
        className={`${!cat ? "mygradient" : "text-secondary-700"} text-sm whitespace-nowrap`}
        href={`/product`}
      >
        همه
      </Link>
      {categories?.map((category) => (
        <Link
          className={`${cat === category?.englishTitle ? "mygradient" : "text-secondary-700"} text-sm whitespace-nowrap`}
          key={category?._id}
          href={`/product/category/${category?.englishTitle}`}
        >
          {category?.title}
        </Link>
      ))}
    </div>
  );
};

export default CategoryList;
