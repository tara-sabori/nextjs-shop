import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center py-20 text-center">
      <h2 className="text-2xl font-bold text-secondary-800">محصولی یافت نشد</h2>
      <p className="text-secondary-600 mt-2">متأسفانه محصول مورد نظر شما وجود ندارد.</p>
      <Link replace href="/product" className="mt-5 px-6 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition duration-300">
        بازگشت به لیست محصولات
      </Link>
    </div>
  );
}
