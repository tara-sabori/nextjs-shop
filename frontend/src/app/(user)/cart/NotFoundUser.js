import Image from "next/image";
import Link from "next/link";

export default function NotFoundUser() {
  return (
    <div className="gap-4 flex flex-col justify-center items-center container">
      <Image
        src={"/images/cart/login.svg"}
        height={200}
        width={200}
        alt="empty-cart"
      />
      <p className="font-bold mb-4">برای مشاهده سبد خرید لطفا لاگین کنید</p>
      <Link href="/auth" className="text-lg font-bold mygradient">
        رفتن به صفحه لاگین؟
      </Link>
    </div>
  );
}
