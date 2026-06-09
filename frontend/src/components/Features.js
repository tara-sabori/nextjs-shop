import {
  FaTruckFast,
  FaShieldHalved,
  FaHeadset,
  FaBoxOpen,
} from "react-icons/fa6";

export default function Features() {
  const features = [
    {
      icon: <FaTruckFast className="text-4xl text-primary-900" />,
      title: "ارسال سریع",
      description:
        "سفارش‌هات در کوتاه‌ترین زمان ممکن، با بسته‌بندی مطمئن به دستت می‌رسه.",
    },
    {
      icon: <FaShieldHalved className="text-4xl text-primary-900" />,
      title: "خرید امن",
      description:
        "با خیال راحت خرید کن؛ امنیت اطلاعات و پرداخت شما اولویت ماست.",
    },
    {
      icon: <FaHeadset className="text-4xl text-primary-900" />,
      title: "پشتیبانی ۲۴ ساعته",
      description: "هر زمان که نیاز داشتی، تیم پشتیبانی ما کنارته تا کمکت کنه.",
    },
    {
      icon: <FaBoxOpen className="text-4xl text-primary-900" />,
      title: "محصولات متنوع",
      description:
        "از کالاهای روزمره تا آیتم‌های خاص؛ هر چیزی که بخوای اینجا پیدا می‌کنی.",
    },
  ];

  return (
    <section className="w-full py-16 text-secondary-700">
      <div className="container">
        <div className="text-center mb-12">
          <span className="text-sm tracking-[0.3em] mygradient uppercase">
            Why Choose Us
          </span>
          <h2 className="mt-3 text-2xl md:text-4xl font-bold">
            چرا از فروشگاه ما خرید کنی؟
          </h2>
          <p className="mt-4 text-secondary-400 max-w-2xl mx-auto">
            ما فقط یک فروشگاه نیستیم؛ یک تجربه خرید راحت، سریع و مطمئن برات
            ساختیم.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((item, index) => (
            <div
              key={index}
              className="group rounded-2xl border border-secondary-400/10 bg-secondary-50 p-6 shadow-lg  transition-all duration-300 hover:-translate-y-2 hover:bg-white/10"
            >
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary-900/10">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">
                <span className="mygradient">{item.title}</span>
              </h3>
              <p className="text-sm leading-7 text-secondary-500">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
