import api from "@/services/api";
import ProductCard from "./_components/product/ProductCard";
import { cookies } from "next/headers";
import { toStringCookies } from "@/utils/toStringCookies";
import Paginate from "@/components/Paginate";

export const dynamic = "force-dynamic";

export default async function ProductPage({ searchParams }) {
  const cookieStore = await cookies();
  const strCookies = toStringCookies(cookieStore);
  const params = (await searchParams) || {};
  const query = new URLSearchParams(params);
  const queryString = query.toString();
  const { data } = await api.get(`/product/list?${queryString}`, {
    headers: {
      Cookie: strCookies,
    },
  });
  console.log(data?.data);
  const { products } = data?.data || [];
  const totalPages = data?.data?.totalPages || 1;
  console.log(products);
  return (
    <div className="space-y-4">
      <div className="min-h-[80vh]">
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
      </div>
      {/* paginate */}
      <div className="flex justify-center lg:justify-start">
        <Paginate pageCount={totalPages} />
        </div>
    </div>
  );
}
