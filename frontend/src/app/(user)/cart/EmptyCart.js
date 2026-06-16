import Image from "next/image";
import Link from "next/link";

export default function EmptyCart() {
  return (
    <div className="gap-4 flex flex-col justify-center items-center container">
      <Image
        src={"/images/cart/empty-cart.svg"}
        height={200}
        width={200}
        alt="empty-cart"
      />
      <p>سبد خرید خالیه!</p>
      <Link href="/product" className="text-lg font-bold mygradient">
        رفتن به صفحه محصولات
      </Link>
    </div>
  );
}
