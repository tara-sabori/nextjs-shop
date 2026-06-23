// import { Suspense } from "react";
// import ProductList from "../../_components/product/ProductList";
import api from "@/services/api";
import ProductCard from "../../_components/product/ProductCard";
import { cookies } from "next/headers";
import { toStringCookies } from "@/utils/toStringCookies";
import Paginate from "@/components/Paginate";

export const dynamic = "force-dynamic";

export default async function ProductByCategoryPage({ params, searchParams }) {
  const { cat } = await params;
  const cookieStore = await cookies();
  const strCookies = toStringCookies(cookieStore);
  const searchParamsObj = (await searchParams) || {};
  const query = new URLSearchParams(searchParamsObj);
  const queryString = query.toString();
  let products = [];
  let totalPages = 0;
  try {
    const { data } = await api.get(
      `/product/list?category=${cat}&${queryString}`,
      {
        headers: {
          Cookie: strCookies,
        },
      },
    );
    products = data?.data?.products || [];
    totalPages = data?.data?.totalPages || 0;
  } catch (error) {
    console.log(error?.response);
    products = [];
    totalPages = 0;
  }
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
      <div className="flex justify-center lg:justify-start">
        {totalPages > 0 && <Paginate pageCount={totalPages} />}
      </div>
    </div>
  );
}
