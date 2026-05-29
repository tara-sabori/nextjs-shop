import AddToCart from "@/components/AddToCart";
import api from "@/services/api";
import Image from "next/image";
import { notFound } from "next/navigation";

export default async function ProductBySlugPage({ params }) {
  const { slug } = await params;
  const { data } = await api.get(`/product/slug/${slug}`);
  const product = data?.data?.product || null;
  console.log(product);
  return (
    <div className="container p-5 pt-0 space-y-5 grid grid-cols-3 gap-4">
      {/* information */}
      <main className="space-y-4 col-span-2">
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
          <span>{product?.countInStock}</span>
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
      <section className="col-span-1 px-10">
        <div className="w-full h-[250px] mr-auto">
          <Image
            src={"/images/not-found.jpg"}
            width={200}
            height={200}
            alt={product?.title}
            className="w-full h-full rounded-tr-lg rounded-tl-lg"
          />
        </div>
        <div className="bg-secondary-50 p-3 shadow-sm">
          <div className="flex items-center gap-2 justify-end">
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
          </div>
          <AddToCart productId={product?._id} />
        </div>
      </section>
    </div>
  );
}
