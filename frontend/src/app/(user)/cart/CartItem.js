import AddToCart from '@/components/AddToCart'
import { toPersianNumbers, toPersianNumbersWithComma } from '@/utils/toPersianNumbers'
import React from 'react'

const CartItem = ({cartItem}) => {
  return (
    <div className="border border-secondary-200 bg-secondary-50 shadow-sm rounded-xl p-4 flex flex-col gap-4 lg:flex-row justify-between">
      <span className="flex-1 font-semibold mygradient line-clamp-2">{cartItem.title}</span>
      <div className="flex items-center justify-between gap-x-0 flex-1">
        <div>
          <div>
            <span className='text-secondary-800'>قیمت :</span>
            <span
              className={`${
                cartItem.discount ? "line-through text-gray-500" : "text-secondary-700"
              }`}
            >
              {toPersianNumbersWithComma(cartItem.price*cartItem.quantity)}
            </span>
          </div>
          {!!cartItem.discount && (
            <div className="flex items-center gap-x-2 mt-2">
              <p className="text-secondary-700">
                {" "}
                {toPersianNumbersWithComma(cartItem.offPrice*cartItem.quantity)}
              </p>
              <div className="bg-rose-500 px-2 py-0.5 rounded-xl text-white text-sm">
                {toPersianNumbers(cartItem.discount)} %
              </div>
            </div>
          )}
        </div>
        <AddToCart productId={cartItem?._id} />
      </div>
    </div>
  )
}

export default CartItem