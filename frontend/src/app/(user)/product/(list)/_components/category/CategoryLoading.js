import React from "react";

const CategoryLoading = () => {
  return (
    <div className="flex flex-row lg:flex-col gap-6 lg:gap-2 lg:h-30 lg:max-h-75 lg:overflow-y-auto animate-pulse">
      <div className="h-4 w-12 rounded bg-secondary-200" />
      <div className="h-4 w-16 rounded bg-secondary-200" />
      <div className="h-4 w-20 rounded bg-secondary-200" />
      <div className="h-4 w-14 rounded bg-secondary-200" />
      <div className="h-4 w-18 rounded bg-secondary-200" />
      <div className="h-4 w-24 rounded bg-secondary-200" />
    </div>
  );
};

export default CategoryLoading;
