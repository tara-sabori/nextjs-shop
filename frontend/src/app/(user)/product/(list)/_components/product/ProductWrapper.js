"use client";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import Productloading from "../../loading";

export default function ProductWrapper({ children }) {
  const searchParams = useSearchParams();
  const key = searchParams.toString();

  return (
    <Suspense key={key} fallback={<Productloading />}>
      {children}
    </Suspense>
  );
}
