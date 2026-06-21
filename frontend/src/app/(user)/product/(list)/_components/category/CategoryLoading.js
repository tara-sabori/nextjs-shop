const CategoryLoading = () => {
  return (
    <div className="w-full lg:w-[90%]">
      <div className="flex flex-row lg:flex-col gap-3 overflow-x-auto pb-1">
        {Array.from({ length: 4 }).map((_, index) => (
          <div
            key={index}
            className="min-w-17.5 lg:w-full flex items-center gap-3 rounded-xl border border-secondary-200 bg-secondary-100 p-5 animate-pulse"
          ></div>
        ))}
      </div>
    </div>
  );
};

export default CategoryLoading;
