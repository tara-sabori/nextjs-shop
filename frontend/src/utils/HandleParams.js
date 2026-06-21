"use client";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
export const useHandleParams = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  const handleParams = (key, value) => {
    const params = new URLSearchParams(searchParams.toString());
    if (value !== undefined && value !== null) {
      params.set(key, value.toString());
    } else {
      params.delete(key);
    }
    router.push(`${pathname}?${params.toString()}`, { scroll: false });
  };

  return handleParams;
};
