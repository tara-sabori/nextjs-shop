"use client";

import { useAuth } from "@/context/AuthContext";
import api from "@/services/api";
import { toPersianNumbers } from "@/utils/toPersianNumbers";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";
import { PiHeart, PiHeartFill } from "react-icons/pi";

const LikeProduct = ({ productId, likesCount, isLiked }) => {
  const { user, dispatch, isLoggedIn } = useAuth();
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [isLoading, setIsLoading] = useState(false);
  const likeHandler = async () => {
    if (!isLoggedIn) {
      toast.error("وارد حساب کاربری خود شوید.");
      return;
    }
    setIsLoading(true);
    try {
      const { data } = await api.post(`/product/like/${productId}`);
      router.refresh(pathname + "?" + searchParams?.toString());
      let newData = user?.likedProducts || [];
      if (!isLiked) {
        newData?.push(productId);
      } else {
        newData = newData?.filter((d) => d !== productId);
      }
      dispatch({
        type: "likeProduct",
        payload: { ...user, likedProducts: newData },
      });
      toast.success(data?.data?.message);
    } catch (error) {
      console.log(error?.response);
      toast.error(error?.response?.data?.message || "مشکلی رخ داده است.");
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className="flex items-center gap-0.5 py-0.5 absolute bg-red-50 w-fit rounded-lg px-1 top-1 right-1">
      <button
        onClick={likeHandler}
        disabled={isLoading}
        className="cursor-pointer disabled:cursor-not-allowed"
      >
        {isLiked ? (
          <PiHeartFill className="text-red-600" />
        ) : (
          <PiHeart className="text-red-600" />
        )}
      </button>
      <span className="text-xs text-secondary-500 pt-0.5">
        {toPersianNumbers(likesCount)}
      </span>
    </div>
  );
};

export default LikeProduct;
