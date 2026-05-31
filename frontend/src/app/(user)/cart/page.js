"use client";

import MyLoading from "@/components/MyLoading";
import { useAuth } from "@/context/AuthContext";
import CartItem from "./CartItem";
import { CartSummary } from "./CartSummary";
import Link from "next/link";

const CartPage = () => {
  const { cart, isLoading, isLoggedIn } = useAuth();
  const cartLength = cart?.productDetail?.length;
  return isLoading ? (
    <MyLoading />
  ) : !isLoggedIn ? (
    <div className="container lg:max-w-5xl">
      <p className="font-bold mb-4">برای مشاهده سبد خرید لطفا لاگین کنید</p>
      <Link href="/auth" className="text-lg font-bold mygradient">
        رفتن به صفحه لاگین؟
      </Link>
    </div>
  ) : (
    <div className="container">
      {!cartLength ? (
        <div className="space-y-4">
          <p>سبد خرید خالیه!</p>
          <Link href="/product" className="text-lg font-bold mygradient">
            رفتن به صفحه محصولات
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-4 gap-6">
          <div className="col-span-4 lg:col-span-3 space-y-5">
            {cart?.productDetail?.map((item) => {
              return <CartItem key={item._id} cartItem={item} />;
            })}
          </div>
          <div className="col-span-4 lg:col-span-1">
            <CartSummary payDetail={cart?.payDetail} />
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
