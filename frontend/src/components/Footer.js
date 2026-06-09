import { FaInstagram, FaTelegram, FaTwitter } from "react-icons/fa6";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-secondary-900 text-secondary-200 py-12 mt-10">
      <div className="container grid gap-10 md:grid-cols-3">
        {/* ستون اول: درباره ما */}
        <div className="space-y-4">
          <h3 className="text-xl font-bold text-white">فروشگاه بزرگ کارت</h3>
          <p className="text-sm leading-7 text-secondary-400">
            ما در فروشگاه کارت متعهد هستیم بهترین کیفیت را با مناسب‌ترین قیمت به
            دست شما برسانیم. تجربه خریدی هوشمندانه، حق شماست.
          </p>
        </div>

        {/* ستون دوم: دسترسی سریع */}
        <div className="space-y-4 md:mx-auto">
          <h4 className="text-lg font-bold text-white">دسترسی سریع</h4>
          <ul className="space-y-2 text-sm text-secondary-400">
            <li>
              <Link href="/" className="hover:text-primary-500 transition">
                درباره ما
              </Link>
            </li>
            <li>
              <Link
                href="/"
                className="hover:text-primary-500 transition"
              >
                تماس با ما
              </Link>
            </li>
            <li>
              <Link href="/" className="hover:text-primary-500 transition">
                سوالات متداول
              </Link>
            </li>
            <li>
              <Link href="/" className="hover:text-primary-500 transition">
                قوانین و مقررات
              </Link>
            </li>
          </ul>
        </div>

        {/* ستون سوم: شبکه‌های اجتماعی */}
        <div className="space-y-4">
          <h4 className="text-lg font-bold text-white">همراه ما باشید</h4>
          <div className="flex gap-4">
            <a
              href="#"
              className="p-3 bg-secondary-800 rounded-full hover:bg-primary-900 transition"
            >
              <FaInstagram className="text-xl" />
            </a>
            <a
              href="#"
              className="p-3 bg-secondary-800 rounded-full hover:bg-primary-900 transition"
            >
              <FaTelegram className="text-xl" />
            </a>
            <a
              href="#"
              className="p-3 bg-secondary-800 rounded-full hover:bg-primary-900 transition"
            >
              <FaTwitter className="text-xl" />
            </a>
          </div>
          <p className="text-xs text-secondary-500 pt-2">
            تمامی حقوق برای فروشگاه کارت محفوظ است.
          </p>
        </div>
      </div>

      {/* خط جداکننده */}
      <div className="max-w-7xl mx-auto px-5 mt-10 pt-6 border-t border-secondary-800 text-center text-xs text-secondary-600">
        طراحی و توسعه با ❤️ توسط تیم فنی کارت
      </div>
    </footer>
  );
}
