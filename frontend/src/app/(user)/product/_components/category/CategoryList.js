const CategoryList = ({ categories }) => {
  return (
    <div className="space-y-2 h-[150px] max-h-[300px]">
      <div className="flex items-center gap-2.5">
        <input id={"all"} type="radio" name="categoryItem" />
        <label
          htmlFor={"all"}
          className="text-nowrap text-sm select-none cursor-pointer"
        >
          همه
        </label>
      </div>
      {categories?.map((category) => (
        <div className="flex items-center gap-2.5" key={category?._id}>
          <input id={category?._id} type="radio" name="categoryItem" />
          <label
            htmlFor={category?._id}
            className="text-nowrap text-sm select-none cursor-pointer"
          >
            {category?.title}
          </label>
        </div>
      ))}
    </div>
  );
};

export default CategoryList;
