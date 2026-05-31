import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center py-20 text-center">
      <p className="text-secondary-600 mt-2">متأسفانه صفحه مورد نظر شما وجود ندارد.</p>
      <Link replace href="/" className="mt-5 px-6 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition duration-300">
        بازگشت به صفحه اصلی
      </Link>
    </div>
  );
}