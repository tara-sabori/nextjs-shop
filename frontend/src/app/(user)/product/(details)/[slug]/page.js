import AddToCart from "@/components/AddToCart";
import api from "@/services/api";
import {
  toPersianNumbers,
  toPersianNumbersWithComma,
} from "@/utils/toPersianNumbers";
import { toStringCookies } from "@/utils/toStringCookies";
import { cookies } from "next/headers";
import Image from "next/image";
import { notFound } from "next/navigation";

export default async function ProductBySlugPage({ params }) {
  const { slug } = await params;
  const cookieStore = await cookies();
  const strCookies = toStringCookies(cookieStore);
  // const { data } = await api.get(`/product/slug/${slug}`, {
  //   headers: {
  //     Cookie: strCookies,
  //   },
  // });
  // const product = data?.data?.product || null;
  // if (!product) {
  //   notFound();
  // }

  let product = null;
  try {
    const response = await api.get(`/product/slug/${slug}`, {
      headers: {
        Cookie: strCookies,
      },
    });
    product = response.data?.data?.product || null;
  } catch (error) {
    console.error("Error fetching product:", error);
    if (error.response && error.response.status === 404) {
      notFound();
    }
  }

  if (!product) {
    notFound();
  }

  console.log(product);
  return (
    <div className="container p-5 pt-0 space-y-5 grid grid-cols-3 gap-4">
      {/* information */}
      <main className="space-y-4 col-span-3 md:col-span-2 pb-10 md:pb-0">
        <div className="block md:hidden w-full h-[250px]">
          <Image
            src={product?.imageLink || "/images/not-found2.png"}
            width={200}
            height={200}
            alt={product?.title}
            className="w-full h-full rounded-lg"
          />
        </div>
        <h2 className="font-semibold text-lg">
          <span className="mygradient">{product?.title}</span>
        </h2>
        <p className="text-base leading-10 text-justify text-secondary-700">
          {product?.description}
        </p>
        <h4 className="font-semibold text-secondary-700">جزئیات محصول</h4>
        <div className="flex items-center gap-2">
          <span className="text-secondary-700">برند:</span>
          <span>{product?.brand}</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-secondary-700">موجودی:</span>
          <span>
            {product?.countInStock > 0
              ? toPersianNumbers(product?.countInStock)
              : "ناموجود"}
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-secondary-700">دسته‌بندی:</span>
          <span>{product?.category?.title}</span>
        </div>
        {/* <div className="flex items-center gap-2">
          <span className="text-secondary-700">قیمت:</span>
          {product?.offPrice ? (
            <div className="flex flex-col">
              <span className="text-sm font-semibold text-secondary-700">
                {product?.offPrice} تومان
              </span>
              <del className="text-xs text-secondary-500">
                {product?.price} تومان
              </del>
            </div>
          ) : (
            <span className="text-sm font-semibold text-secondary-700">
              {product?.price} تومان
            </span>
          )}
        </div> */}
      </main>
      <section className="fixed bottom-0 left-0 right-0 shadow-lg md:shadow-none bg-secondary-50 md:bg-white md:static md:col-span-1 px-3 md:px-10">
        <div className="hidden md:block w-full h-[250px] mr-auto">
          <Image
            src={product?.imageLink || "/images/not-found2.png"}
            width={200}
            height={200}
            alt={product?.title}
            className="w-full h-full rounded-tr-lg rounded-tl-lg"
          />
        </div>
        <div className="bg-secondary-50 px-3 py-5 md:p-3 flex flex-row-reverse justify-between md:flex-col md:shadow-sm gap-5">
          <div className="flex items-center gap-2 justify-between">
            <span className="text-secondary-700">قیمت:</span>
            {product?.offPrice ? (
              <div className="flex flex-col">
                <span className="text-sm font-semibold text-secondary-700 whitespace-nowrap">
                  {toPersianNumbersWithComma(product?.offPrice)} تومان
                </span>
                <del className="text-xs text-secondary-500 whitespace-nowrap">
                  {toPersianNumbersWithComma(product?.price)} تومان
                </del>
              </div>
            ) : (
              <span className="text-sm font-semibold text-secondary-700 whitespace-nowrap">
                {toPersianNumbersWithComma(product?.price)} تومان
              </span>
            )}
          </div>
          <AddToCart productId={product?._id} />
        </div>
      </section>
    </div>
  );
}
