"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import useGetData from "@/hooks/useGetData";
import ProductCard from "@/app/(user)/product/(list)/_components/product/ProductCard";
import Link from "next/link";
import ProductCardSkeleton from "./ProductCardSkeleton";

export default function LatestProducts() {
  const { loading, dataList } = useGetData(
    "/product/list",
    "products",
  );
  console.log(dataList?.length);
  const products = dataList || [];

  return (
    <section className="py-16 bg-secondary-100/60">
      <div className="container">
        <div className="flex items-baseline justify-between mb-4">
          <h2 className="text-2xl md:text-3xl font-bold">
            <span className="mygradient">آخرین محصولات</span>
          </h2>
          <Link className="mygradient text-lg" href={"/product"}>
            مشاهده همه
          </Link>
        </div>
        <div className="container">
          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={24}
            slidesPerView="auto"
            navigation
            freeMode={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            watchOverflow={true}
            // className="!overflow-visible"
          >
            {loading
              ? [1, 2, 3, 4].map((item) => (
                  <SwiperSlide
                    key={item}
                    className="!w-[250px] lg:!w-[200px] p-5"
                  >
                    <ProductCardSkeleton />
                  </SwiperSlide>
                ))
              : products?.map((product) => (
                  <SwiperSlide
                    key={product?._id}
                    className="!w-[250px] lg:!w-[200px] py-5"
                  >
                    <ProductCard product={product} />
                  </SwiperSlide>
                ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
