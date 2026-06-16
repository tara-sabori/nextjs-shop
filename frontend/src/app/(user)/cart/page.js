"use client";

import MyLoading from "@/components/MyLoading";
import { useAuth } from "@/context/AuthContext";
import CartItem from "./CartItem";
import { CartSummary } from "./CartSummary";
import EmptyCart from "./EmptyCart";
import NotFoundUser from "./NotFoundUser";

const CartPage = () => {
  const { cart, isLoading, isLoggedIn } = useAuth();
  const cartLength = cart?.productDetail?.length;
  return isLoading ? (
    <MyLoading />
  ) : !isLoggedIn ? (
    <NotFoundUser />
  ) : (
    <div className="container">
      {!cartLength ? (
        <EmptyCart />
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
