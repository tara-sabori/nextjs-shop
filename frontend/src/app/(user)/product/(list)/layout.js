import Footer from "@/components/Footer";
import CategorySideBar from "./_components/category/CategorySideBar";
import ProductFilter from "./_components/filter/ProductFilter";
import ProductWrapper from "./_components/product/ProductWrapper";

export default function ProductLayout({ children }) {
  return (
    <div>
      <section className="container">
        <div className="grid grid-cols-4 gap-4">
          {/* side bar */}
          <div className="col-span-4 lg:col-span-1 space-y-3">
            <CategorySideBar />
            <ProductFilter />
          </div>
          {/* course cards */}
          <div className="col-span-4 lg:col-span-3 min-h-dvh">
            <ProductWrapper>{children}</ProductWrapper>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
