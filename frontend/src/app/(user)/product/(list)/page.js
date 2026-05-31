import api from "@/services/api";
import ProductCard from "./_components/product/ProductCard";
import { cookies } from "next/headers";
import { toStringCookies } from "@/utils/toStringCookies";

export const dynamic = "force-dynamic";

// const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export default async function ProductPage() {
  // await wait(500);
  const cookieStore = await cookies();
  const strCookies = toStringCookies(cookieStore);
  const { data } = await api.get(`/product/list`, {
    headers: {
      Cookie: strCookies,
    },
  });
  const { products } = data?.data || [];
  console.log(products);
  return (
    <div className="flex items-stretch justify-center lg:justify-start gap-4 flex-wrap">
      {products?.length < 1 ? (
        <div className="w-full py-10 text-center text-secondary-600">
          محصولی یافت نشد
        </div>
      ) : (
        products?.map((product) => (
          <ProductCard key={product?._id} product={product} />
        ))
      )}
    </div>
  );
}
