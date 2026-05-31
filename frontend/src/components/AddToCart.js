"use client";

import { useAuth } from "@/context/AuthContext";
import api from "@/services/api";
import { toPersianNumbers } from "@/utils/toPersianNumbers";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";
import {
  PiCircleNotch,
  PiMinusBold,
  PiPlusBold,
  PiTrashBold,
} from "react-icons/pi";

const AddToCart = ({ productId }) => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const { isLoggedIn, user, cart, dispatch } = useAuth();
  const existProductInCart = cart?.productDetail?.find(
    (c) => c?._id === productId,
  );
  const addToCartHandler = async () => {
    setIsLoading(true);
    try {
      const { data } = await api.post("/cart/add", { productId });
      const cart = data?.data?.cart;
      console.log(data?.data);
      dispatch({ type: "addToCart", payload: cart });
      toast.success(data?.data?.message);
    } catch (error) {
      console.log(error?.response);
      toast.error(error?.response?.data?.message || "مشکلی رخ داده است.");
    } finally {
      setIsLoading(false);
    }
  };
  const removeFromCartHandler = async () => {
    setIsLoading(true);
    try {
      const { data } = await api.post("/cart/remove", { productId });
      const cart = data?.data?.cart;
      console.log(data?.data);
      dispatch({ type: "removeFromCart", payload: cart });
      toast.success(data?.data?.message);
    } catch (error) {
      console.log(error?.response);
      toast.error(error?.response?.data?.message || "مشکلی رخ داده است.");
    } finally {
      setIsLoading(false);
    }
  };
  const checkUserHandler = () => {
    if (!isLoggedIn) {
      toast.error("وارد حساب کاربری خود شوید.");
      router.push("/auth");
      return;
    } else if (!user?.name) {
      toast.error("اطلاعات خود را تکمیل کنید.");
      router.push("/auth/complete-profile");
      return;
    } else {
      addToCartHandler();
    }
  };
  return (
    <>
      {!existProductInCart?._id ? (
        <button
          onClick={checkUserHandler}
          disabled={isLoading}
          className="bgGradient w-full rounded-md p-1.5 text-sm text-white"
        >
          افزودن به سبد خرید
        </button>
      ) : (
        <div className="flex items-center gap-2 justify-end">
          <button
            type="button"
            onClick={addToCartHandler}
            disabled={isLoading}
            className="cursor-pointer border border-primary-900 rounded-md p-0.5 text-primary-900 text-sm"
          >
            <PiPlusBold />
          </button>
          <span>
            {isLoading ? (
                <PiCircleNotch className="animate-spin text-xl text-primary-900" />
            ) : (
              toPersianNumbers(existProductInCart?.quantity)
            )}
          </span>
          {existProductInCart?.quantity === 1 ? (
            <button
              type="button"
              onClick={removeFromCartHandler}
              disabled={isLoading}
              className="text-lg text-red-600"
            >
              <PiTrashBold />
            </button>
          ) : (
            <button
              type="button"
              onClick={removeFromCartHandler}
              disabled={isLoading}
              className="cursor-pointer border border-primary-900 rounded-md p-0.5 text-primary-900 text-sm"
            >
              <PiMinusBold />
            </button>
          )}
        </div>
      )}
    </>
  );
};

export default AddToCart;
