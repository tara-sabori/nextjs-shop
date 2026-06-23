import {
  toPersianNumbers,
  toPersianNumbersWithComma,
} from "@/utils/toPersianNumbers";
import Image from "next/image";
import Link from "next/link";
import LikeProduct from "./LikeProduct";

const ProductCard = ({ product }) => {
  // console.log(product);
  return (
    <section className="w-[250px] lg:w-[200px] space-y-3 rounded-2xl bg-secondary-50 shadow-md hover:scale-105 overflow-hidden border border-secondary-200/70">
      {/* img and like*/}
      <div className="w-full h-37.5 bg-white relative">
        {/* like button */}
        <LikeProduct
          likesCount={product?.likesCount}
          productId={product?._id}
          isLiked={product?.isLiked}
        />
        <Image
          alt={product?.title}
          src={product?.imageLink || "/images/not-found2.png"}
          width={100}
          height={100}
          loading="eager"
          className={`${product?.imageLink && "object-contain py-2"} w-full h-37.5`}
        />
        {product?.discount != 0 && (
          <div className="bg-rose-500 px-2 py-0.5 rounded-xl text-white text-xs absolute top-1 right-1">
            {toPersianNumbers(product?.discount)} %
          </div>
        )}
      </div>
      {/* title and brand */}
      <div className="px-1.5">
        <h3 className="text-sm mb-2 font-semibold" title={product?.title}>
          <Link href={`/product/${product?.slug}`}>
            <span className="text-secondary-700 line-clamp-1">
              {product?.title}
            </span>
          </Link>
        </h3>
        <span className="text-xs text-secondary-600 px-2 rounded-full bg-primary-100">
          {product?.brand}
        </span>
      </div>
      {/* price */}
      <div className="flex justify-between items-center p-1.5 py-2 border-t border-secondary-200">
        <span className="mygradient font-semibold text-sm rounded-md p-1.5">
          قیمت:
        </span>
        {product?.discount ? (
          <div className="flex flex-col relative">
            <span className="text-sm font-semibold text-secondary-700">
              {toPersianNumbersWithComma(product?.offPrice)} تومان
            </span>
            <del className="text-xs text-secondary-500 absolute -bottom-3">
              {toPersianNumbersWithComma(product?.price)} تومان
            </del>
          </div>
        ) : (
          <span className="text-sm font-semibold text-secondary-700">
            {toPersianNumbersWithComma(product?.price)} تومان
          </span>
        )}
      </div>
    </section>
  );
};

export default ProductCard;
