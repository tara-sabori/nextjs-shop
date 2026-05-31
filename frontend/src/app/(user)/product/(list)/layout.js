import CategorySideBar from "./_components/category/CategorySideBar";

export default function ProductLayout({ children }) {
  return (
    <section className="container">
      <div className="grid grid-cols-4 gap-4">
        {/* side bar */}
        <div className="col-span-4 lg:col-span-1">
          <CategorySideBar />
        </div>
        {/* course cards */}
        <div className="col-span-4 lg:col-span-3">{children}</div>
      </div>
    </section>
  );
}
