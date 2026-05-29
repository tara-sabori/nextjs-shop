import Image from "next/image";
import Link from "next/link";

const ProductCard = ({ product }) => {
  return (
    <Link href={`/product/${product?.slug}`}>
      <section className="w-57.5 space-y-3 rounded-lg bg-secondary-50 shadow-md hover:scale-105 overflow-hidden">
        {/* img */}
        <div className="w-full h-37.5 bg-secondary-100">
          <Image
            alt={product?.title}
            src={"/images/not-found.jpg"}
            width={100}
            height={100}
            className="w-full h-37.5"
          />
        </div>
        <div className="px-1.5">
          <h3 className="text-sm mb-2 font-semibold" title={product?.title}>
            <span className="text-secondary-700 line-clamp-1">
              {product?.title}
            </span>
          </h3>
          <span className="text-xs text-secondary-600 px-2 rounded-full bg-primary-100">
            {product?.brand}
          </span>
        </div>
        <div className="flex justify-between items-center p-1.5 py-2 border-t border-secondary-200">
          <span className="mygradient font-semibold text-sm rounded-md p-1.5">
            قیمت:
          </span>
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
      </section>
    </Link>
  );
};

export default ProductCard;
