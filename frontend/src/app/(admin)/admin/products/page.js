"use client";
import useGetData from "@/hooks/useGetData";
import Link from "next/link";
import { PiPlus } from "react-icons/pi";
import ProductsList from "./ProductsList";
import { Suspense, use, useEffect, useState } from "react";
import api from "@/services/api";
import { useSearchParams } from "next/navigation";

const AdminProductsContent = () => {
  // const { loading, dataList, setDataList } = useGetData(
  //   "/product/list",
  //   "products",
  // );
  const params = useSearchParams();
  const page = params?.get("page") || 1;
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  useEffect(() => {
    setLoading(true);
  }, [page]);

  useEffect(() => {
    if (!loading) return;
    const fetchData = async () => {
      try {
        const { data } = await api.get(`/product/list?page=${page}&limit=4`);
        setData(data?.data);
        console.log(data);
      } catch (error) {
        console.log(error?.response);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [page, loading]);
  const products = data?.products || [];
  const totalPages = data?.totalPages;
  const currentPage = data?.page;
  return (
    <>
      <div className="flex items-center justify-between">
        <h3 className="text-base font-semibold lg:text-lg">
          <span className="mygradient">لیست محصولات</span>
        </h3>
        <Link
          className="bgGradient flex items-center gap-1 p-2 rounded-lg text-sm text-white"
          href={"/admin/products/add"}
        >
          <PiPlus className="text-lg" />
          <span>افزودن محصول</span>
        </Link>
      </div>
      <ProductsList
        products={products}
        totalPages={totalPages}
        setLoading={setLoading}
        isLoading={loading}
        currentPage={currentPage}
      />
    </>
  );
};

const AdminProductsPage = () => {
  return (
    <Suspense fallback={<div>loading...</div>}>
      <AdminProductsContent />
    </Suspense>
  );
};
export default AdminProductsPage;
