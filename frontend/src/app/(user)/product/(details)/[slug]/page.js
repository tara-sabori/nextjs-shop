import AddToCart from "@/components/AddToCart";
import BackButton from "@/components/BackButton";
import api from "@/services/api";
import {
  toPersianNumbers,
  toPersianNumbersWithComma,
} from "@/utils/toPersianNumbers";
import { toStringCookies } from "@/utils/toStringCookies";
import { cookies } from "next/headers";
import Image from "next/image";
import { notFound } from "next/navigation";

export const dynamic = "force-static"; // SSG or {cache : "force-cache"}
export const dynamicParams = false;

export default async function ProductBySlugPage({ params }) {
  const { slug } = await params;
  const cookieStore = await cookies();
  const strCookies = toStringCookies(cookieStore);

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
    <>
    <BackButton />
    <div className="container p-5 pt-0 space-y-5 grid grid-cols-3 gap-4">
      {/* information */}
      <main className="space-y-4 col-span-3 md:col-span-2 pb-16 md:pb-0">
        <div className="block md:hidden w-[250px] h-[250px] mx-auto">
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
        <div className="rounded-2xl border border-secondary-200 bg-white p-4 shadow-sm">
          <h3 className="mb-4 text-lg font-semibold text-secondary-800">
            جزئیات محصول
          </h3>

          <div className="space-y-3">
            <div className="flex items-center justify-between rounded-xl bg-secondary-50 px-4 py-3">
              <span className="text-secondary-600">برند</span>
              <span className="font-medium text-secondary-800">
                {product?.brand}
              </span>
            </div>

            <div className="flex items-center justify-between rounded-xl bg-secondary-50 px-4 py-3">
              <span className="text-secondary-600">موجودی</span>
              <span
                className={`font-medium ${
                  product?.countInStock > 0
                    ? "text-emerald-600"
                    : "text-rose-600"
                }`}
              >
                {product?.countInStock > 0
                  ? toPersianNumbers(product?.countInStock)
                  : "ناموجود"}
              </span>
            </div>

            <div className="flex items-center justify-between rounded-xl bg-secondary-50 px-4 py-3">
              <span className="text-secondary-600">دسته‌بندی</span>
              <span className="font-medium text-secondary-800">
                {product?.category?.title}
              </span>
            </div>
          </div>
        </div>
      </main>
      <section className="fixed bottom-0 left-0 right-0 shadow-lg md:shadow-none bg-secondary-50 md:bg-white md:static md:col-span-1 px-3 md:px-10">
        <div className="hidden md:block w-full aspect-square relative mt-4">
          <Image
            src={product?.imageLink || "/images/not-found2.png"}
            fill
            alt={product?.title}
            className="object-contain bg-secondary-50 rounded-tr-2xl rounded-tl-2xl border p-2"
          />
        </div>
        <div className="bg-secondary-50 px-3 py-5 md:p-3 flex flex-row-reverse justify-between md:flex-col border-secondary-200 gap-5">
          <div className="flex items-center gap-2 justify-between">
            <span className="text-secondary-700">قیمت:</span>
            {product?.discount ? (
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
          {product?.countInStock > 0?<AddToCart productId={product?._id} />:
          <span className="text-rose-600">ناموجود</span>
          }
        </div>
      </section>
    </div>
    </>
  );
}
