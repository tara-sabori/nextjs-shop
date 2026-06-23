"use client";
import api from "@/services/api";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import ProductForm from "../../_components/ProductForm";
import MyLoading from "@/components/MyLoading";

const EditProductPage = () => {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [product, setProduct] = useState(null);
  useEffect(() => {
    const getProductById = async () => {
      try {
        const { data } = await api.get(`/product/${id}`);
        setProduct(data?.data?.product);
      } catch (error) {
        console.log(error?.response);
      } finally {
        setIsLoading(false);
      }
    };
    getProductById();
  }, []);
  return isLoading ? (
    <MyLoading />
  ) : !product ? (
    <p>دسته‌بندی موردنظر یافت نشد.</p>
  ) : (
    <div className="space-y-5">
      <h3 className="text-base font-semibold lg:text-lg">
        <span className="mygradient">ویرایش محصول</span>
      </h3>
      <ProductForm product={product} />
    </div>
  );
};

export default EditProductPage;
