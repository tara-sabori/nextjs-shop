"use client";
import React, { Suspense } from "react";
import CategoryLoading from "./CategoryLoading";
import CategoryList from "./CategoryList";

const Categorywrapper = ({ categories }) => {
  return (
    <Suspense fallback={<CategoryLoading />}>
      <CategoryList categories={categories} />
    </Suspense>
  );
};

export default Categorywrapper;
