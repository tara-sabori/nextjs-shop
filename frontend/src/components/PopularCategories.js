import Link from "next/link";

const categories = [
  {
    id: 1,
    name: "الکترونیک",
    cat: "electronics",
    image: "/images/category/electronics.jpg",
  },
  {
    id: 2,
    name: "پوشاک مردانه",
    cat: "men-clothes",
    image: "/images/category/men.jpg",
  },
  {
    id: 3,
    name: "پوشاک زنانه",
    cat: "women-clothes",
    image: "/images/category/women.jpg",
  },
  {
    id: 4,
    name: "آرایشی",
    cat: "beauty",
    image: "/images/category/beauty.jpg",
  },
];

export default function PopularCategories() {
  return (
    <section className="w-full py-16 md:py-24">
      <div className="container">
        {/* عنوان بخش */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl md:text-4xl font-black text-secondary-900 mb-4">
            دسته‌بندی‌های{" "}
            <span className="mygradient bg-clip-text text-transparent">
              محبوب
            </span>
          </h2>
          <p className="text-secondary-500 text-sm md:text-base max-w-md mx-auto">
            همه آنچه نیاز دارید را در دسته‌های مشخص پیدا کنید
          </p>
        </div>

        {/* گرید دسته‌بندی‌ها */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <Link
              key={category.id}
              href={`/product/category/${category?.cat}?page=1`}
              // href={`/product/category/women-clothes?page=1`}
              className="group relative block aspect-4/5 overflow-hidden rounded-2xl shadow-lg transition-all duration-500 hover:-translate-y-2"
            >
              {/* تصویر پس‌زمینه */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url('${category.image}')` }}
              />

              <div className="absolute inset-0 bg-linear-to-t from-secondary-900/90 via-secondary-900/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />

              {/* محتوای کارت (متن) */}
              <div className="absolute inset-0 flex flex-col justify-end p-6 text-right">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-2 transform transition-transform duration-500 group-hover:translate-x-[-10px]">
                  {category.name}
                </h3>

                <div className="w-0 h-1 bg-primary-400 transition-all duration-500 group-hover:w-full rounded-full" />

                <span className="mt-4 text-sm text-secondary-200 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  مشاهده محصولات ←
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
