import api from "@/services/api";
import ProductCard from "./_components/product/ProductCard";

export const dynamic = "force-dynamic";

// const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export default async function ProductPage() {
  // await wait(500);
  const { data } = await api.get(`/product/list`);
  const { products } = data?.data || [];
  console.log(products);
  return (
    <div className="flex items-stretch justify-center lg:justify-start gap-4 flex-wrap">
      {products?.map((product) => (
        <ProductCard key={product?._id} product={product} />
      ))}
    </div>
  );
}
