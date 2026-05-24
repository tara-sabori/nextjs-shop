"use client";
import { useState } from "react";
import ProductRow from "./ProductRow";
import toast from "react-hot-toast";
import api from "@/services/api";

export const productListTableTHeads = [
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
    label: "دسته بندی",
  },
  {
    id: 4,
    label: "قیمت",
  },
  {
    id: 5,
    label: "تخفیف",
  },
  {
    id: 6,
    label: "قیمت با تخفیف",
  },
  {
    id: 7,
    label: "موجودی",
  },
  {
    id: 8,
    label: "عملیات",
  },
];

const ProductsList = ({ products, setProducts, isLoading }) => {
  const [isDeleting, setIsDeleting] = useState(false);
  const deleteProduct = async (id) => {
    try {
      const { data } = await api.delete(`/admin/product/remove/${id}`);
      setProducts(products?.filter((p) => p?._id !== id));
      toast.success(data?.data?.message);
    } catch (error) {
      console.log(error);
      toast.error(error?.esponse?.data?.message || "مشکلی رخ داده است.");
    } finally {
      setIsDeleting(false);
    }
  };
  return (
    <div className="overflow-x-auto shadow-sm overflow-y-hidden my-8">
      <table className="border-collapse table-auto w-full min-w-200 text-sm">
        <thead>
          <tr>
            {productListTableTHeads.map((item) => {
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
              <td colSpan={8} className="text-center p-5">
                <span>در حال بارگذاری...</span>
              </td>
            </tr>
          ) : products?.length < 1 ? (
            <tr>
              <td colSpan={8} className="text-center p-5">
                <span>موردی یافت نشد</span>
              </td>
            </tr>
          ) : (
            products?.map((product, index) => (
              <ProductRow
                key={product._id}
                product={product}
                index={index}
                isDeleting={isDeleting}
                deleteProduct={deleteProduct}
              />
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ProductsList;
