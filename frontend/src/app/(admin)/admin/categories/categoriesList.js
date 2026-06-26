"use client";
import { useState } from "react";
import CategoryRow from "./CategoryRow";
import api from "@/services/api";
import toast from "react-hot-toast";
// import Paginate from "@/components/Paginate";
// import { useSearchParams } from "next/navigation";
import { useHandleParams } from "@/utils/HandleParams";

export const categoryListTableTHeads = [
  {
    id: 1,
    label: "#",
  },
  {
    id: 2,
    label: "عنوان",
  },
  {
    id: 3,
    label: "توضیحات",
  },
  {
    id: 4,
    label: "عنوان انگلیسی",
  },
  {
    id: 5,
    label: "نوع",
  },
  {
    id: 6,
    label: "عملیات",
  },
];

const CategoriesList = ({ categories, isLoading, setCategories }) => {
  // const params = useSearchParams();
  // const page = params.get("page") || 1;
  // const lastIndex = page * 4;
  // const firstIndex = lastIndex - 4;
  // const records = categories?.slice(firstIndex, lastIndex);
  const records = categories;
  // const pageCount = Math.ceil(categories?.length / 4);

  const [isDeleting, setIsDeleting] = useState(false);
  const handleParams = useHandleParams();
  const deleteCategory = async (id) => {
    try {
      const { data } = await api.delete(`/admin/category/remove/${id}`);
      setCategories(categories?.filter((cat) => cat?._id !== id));
      // if (records?.length === 1 && page > 1) {
      //   handleParams("page", page - 1);
      // }
      toast.success(data?.data?.message);
    } catch (error) {
      console.log(error?.response);
      toast.error(error?.esponse?.data?.message || "مشکلی رخ داده است.");
    } finally {
      setIsDeleting(false);
    }
  };
  return (
    <>
      <div className="overflow-x-auto shadow-sm overflow-y-hidden my-8">
        <table className="border-collapse table-auto w-full min-w-200 text-sm">
          <thead>
            <tr>
              {categoryListTableTHeads.map((item) => {
                return (
                  <th className="whitespace-nowrap table__th" key={item.id}>
                    {item.label}
                  </th>
                );
              })}
            </tr>
          </thead>
          <tbody>
            {isLoading ? (
              <tr>
                <td colSpan={6} className="text-center p-5 py-20">
                  <span>در حال بارگذاری...</span>
                </td>
              </tr>
            ) : records?.length < 1 ? (
              <tr>
                <td colSpan={6} className="text-center p-5 py-20">
                  <span>موردی یافت نشد</span>
                </td>
              </tr>
            ) : (
              records?.map((category) => (
                <CategoryRow
                  key={category._id}
                  category={category}
                  index={categories.indexOf(category)}
                  isDeleting={isDeleting}
                  deleteCategory={deleteCategory}
                />
              ))
            )}
          </tbody>
        </table>
      </div>
      {/* {!isLoading && <Paginate pageCount={pageCount} isClient={true} />} */}
    </>
  );
};

export default CategoriesList;
