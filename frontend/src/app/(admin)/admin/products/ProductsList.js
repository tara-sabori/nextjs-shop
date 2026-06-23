"use client";
import { useState } from "react";
import ProductRow from "./ProductRow";
import toast from "react-hot-toast";
import api from "@/services/api";
import Paginate from "@/components/Paginate";
import { useHandleParams } from "@/utils/HandleParams";

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

const ProductsList = ({
  products,
  totalPages,
  setLoading,
  isLoading,
  currentPage,
}) => {
  const [isDeleting, setIsDeleting] = useState(false);
  const handleParams = useHandleParams();
  const deleteProduct = async (id) => {
    try {
      const { data } = await api.delete(`/admin/product/remove/${id}`);
      if (products?.length === 1 && currentPage !== 1) {
        handleParams("page", currentPage - 1);
      }
      setLoading(true);
      toast.success(data?.data?.message);
    } catch (error) {
      console.log(error);
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
                <td colSpan={8} className="text-center p-5 py-20">
                  <span>در حال بارگذاری...</span>
                </td>
              </tr>
            ) : products?.length < 1 ? (
              <tr>
                <td colSpan={8} className="text-center p-5 py-20">
                  <span>موردی یافت نشد</span>
                </td>
              </tr>
            ) : (
              products?.map((product, index) => (
                <ProductRow
                  key={product._id}
                  product={product}
                  index={(currentPage - 1) * 4 + index + 1}
                  isDeleting={isDeleting}
                  deleteProduct={deleteProduct}
                />
              ))
            )}
          </tbody>
        </table>
      </div>
      {!isLoading && <Paginate pageCount={totalPages} />}
    </>
  );
};

export default ProductsList;
