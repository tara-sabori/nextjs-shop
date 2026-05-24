"use client";
import useGetData from "@/hooks/useGetData";
import Link from "next/link";
import { PiPlus } from "react-icons/pi";
import ProductsList from "./ProductsList";

const AdminProductsPage = () => {
  const { loading, dataList, setDataList } = useGetData(
    "/product/list",
    "products",
  );
  console.log(dataList);
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
        products={dataList}
        setProducts={setDataList}
        isLoading={loading}
      />
    </>
  );
};

export default AdminProductsPage;
