import ProductCardSkeleton from "@/components/ProductCardSkeleton";
import React from "react";

const loading = () => {
  return (
    <div className="flex items-stretch justify-center lg:justify-start gap-4 flex-wrap">
      {[1, 2, 3, 4].map((item) => (
        <ProductCardSkeleton key={item} />
      ))}
    </div>
  );
};

export default loading;
