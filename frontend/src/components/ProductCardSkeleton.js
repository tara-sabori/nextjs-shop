const ProductCardSkeleton = () => {
  return (
    <section className="w-[250px] lg:w-[200px] space-y-3 rounded-2xl bg-secondary-50 shadow-md overflow-hidden animate-pulse">
      {/* بخش تصویر و لایک */}
      <div className="w-full h-37.5 bg-secondary-200 relative"></div>

      {/* بخش عنوان و برند */}
      <div className="px-1.5 space-y-2">
        <div className="h-4 bg-secondary-200 rounded w-full"></div>
        <div className="h-4 bg-secondary-200 rounded w-1/2"></div>
      </div>

      {/* بخش قیمت */}
      <div className="flex justify-between items-center p-1.5 py-2 border-t border-secondary-200">
        <div className="h-4 bg-secondary-200 rounded w-12"></div>
        <div className="h-6 bg-secondary-200 rounded w-20"></div>
      </div>
    </section>
  );
};

export default ProductCardSkeleton;
