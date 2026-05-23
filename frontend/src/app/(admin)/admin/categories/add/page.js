import CategoryForm from "../../_components/CategoryForm";

const CategoryAddPage = () => {
  return (
    <div className="space-y-5">
      <h3 className="text-base font-semibold lg:text-lg">
        <span className="mygradient">ایجاد دسته‌بندی‌</span>
      </h3>
      <CategoryForm />
    </div>
  );
};

export default CategoryAddPage;
