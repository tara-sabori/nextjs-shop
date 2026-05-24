"use client"
import { useState } from "react";
import CategoryRow from "./CategoryRow";
import api from "@/services/api";
import toast from "react-hot-toast";

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

const CategoriesList = ({ categories, isLoading,setCategories }) => {
  const [isDeleting,setIsDeleting]=useState(false);
  const deleteCategory=async (id) => {
    try {
      const {data}=await api.delete(`/admin/category/remove/${id}`);
      setCategories(categories?.filter(cat=>cat?._id!==id));
      toast.success(data?.data?.message);
    } catch (error) {
      console.log(error?.response);
      toast.error(error?.esponse?.data?.message||"مشکلی رخ داده است.")
    } finally {
      setIsDeleting(false)
    }
  }
  return (
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
              <td colSpan={6} className="text-center p-5">
                <span>در حال بارگذاری...</span>
              </td>
            </tr>
          ) : categories?.length < 1 ? (
            <tr>
              <td colSpan={6} className="text-center p-5">
                <span>موردی یافت نشد</span>
              </td>
            </tr>
          ) : (
            categories?.map((category, index) => (
              <CategoryRow
                key={category._id}
                category={category}
                index={index}
                isDeleting={isDeleting}
                deleteCategory={deleteCategory}
              />
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default CategoriesList;
