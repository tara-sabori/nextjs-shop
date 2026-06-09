import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative w-full h-[90vh] overflow-hidden -mt-20">
      <div
        className="absolute inset-0 bg-no-repeat bg-cover bg-top transition-transform duration-1000 hover:scale-105"
        style={{
          backgroundImage: "url('/images/hero.jpg')",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-secondary-900/80 via-secondary-900/40 to-secondary-50" />

      <div className="relative h-full w-full flex items-center justify-center">
        <div className="text-center space-y-6 px-5 max-w-4xl">
          <div className="inline-block animate-fade-in">
            <span className="text-sm md:text-base font-medium px-4 py-1.5 rounded-full bg-primary-100/20 text-primary-200 border border-primary-400/30 backdrop-blur-md">
              تجربه‌ای متفاوت از خریدی هوشمندانه
            </span>
          </div>

          <h1 className="text-2xl md:text-3xl lg:text-4xl font-black text-white my-5">
            <span className="">فروشگاه بزرگ کارت</span>
          </h1>

          <p className="text-base md:text-xl text-secondary-200 leading-relaxed max-w-2xl mx-auto font-light">
            در «کارت»، هر محصول داستانی برای گفتن دارد. ما با وسواس بهترین‌ها را
            برای شما دست‌چین کرده‌ایم.
          </p>

          <Link
            href="/product"
            className="group w-fit mx-auto flex items-center justify-center px-8 py-3.5 text-base font-bold text-white transition-all duration-300 bg-primary-900 rounded-2xl hover:bg-primary-800 shadow-xl shadow-primary-900/20"
          >
            مشاهده محصولات
            <span className="mr-2 transition-transform duration-300 group-hover:translate-x-[-5px]">
              ←
            </span>
          </Link>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce hidden md:block">
        <div className="w-6 h-10 border-2 border-secondary-400 rounded-full flex justify-center p-1">
          <div className="w-1 h-2 bg-secondary-400 rounded-full" />
        </div>
      </div>
    </section>
  );
}
