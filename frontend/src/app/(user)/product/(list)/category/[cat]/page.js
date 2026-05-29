// import { Suspense } from "react";
// import ProductList from "../../_components/product/ProductList";
import api from "@/services/api";
import ProductCard from "../../_components/product/ProductCard";

export default async function ProductByCategoryPage({ params }) {
  const { cat } = await params;
  const { data } = await api.get(`/product/list?category=${cat}`);
  const { products } = data?.data || [];
  return (
    <div className="flex items-center gap-4 flex-wrap">
      {products?.map((product) => (
        <ProductCard key={product?._id} product={product} />
      ))}
    </div>
  );
}
