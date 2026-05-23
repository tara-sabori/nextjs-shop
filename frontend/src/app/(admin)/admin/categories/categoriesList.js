import Link from "next/link";
import { HiEye, HiTrash } from "react-icons/hi";
import { RiEdit2Line } from "react-icons/ri";

export const categoryListTableTHeads = [
  {
    id: 1,
    label: "#",
  },
  {
    id: 2,
    label: "عنوان",
  },
  {
    id: 3,
    label: "توضیحات",
  },
  {
    id: 4,
    label: "عنوان انگلیسی",
  },
  {
    id: 5,
    label: "نوع",
  },
  {
    id: 6,
    label: "عملیات",
  },
];

const CategoriesList = ({ categories, isLoading }) => {
  return (
    <div className="overflow-x-auto overflow-y-hidden my-8">
      <table className="border-collapse table-auto w-full min-w-200 text-sm">
        <thead>
          <tr>
            {categoryListTableTHeads.map((item) => {
              return (
                <th className="whitespace-nowrap table__th" key={item.id}>
                  {item.label}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {isLoading ? (
            <tr>
              <td colSpan={6} className="text-center p-5">
                <span>در حال بارگذاری...</span>
              </td>
            </tr>
          ) : categories?.length < 1 ? (
            <tr>
              <td colSpan={6} className="text-center p-5">
                <span>موردی یافت نشد</span>
              </td>
            </tr>
          ) : (
            categories?.map((category, index) => {
              return (
                <tr key={category._id} className="table__tr">
                  <td className="table__td">{index + 1}</td>
                  <td className="table__td  whitespace-nowrap">
                    {category.title}
                  </td>
                  <td className="table__td">{category.description}</td>
                  <td className="table__td">{category.englishTitle}</td>
                  <td className="table__td">
                    <span className="badge badge--secondary">
                      {category.type}
                    </span>
                  </td>
                  <td className="table__td font-bold text-lg">
                    <div className="flex items-center gap-x-4">
                      <Link href={`/admin/categories/${category._id}`}>
                        <HiEye className="text-primary-900 text-lg" />
                      </Link>
                      <button
                        onClick={() => removeCategoryHandler(category._id)}
                      >
                        <HiTrash className="text-rose-600 text-lg" />
                      </button>
                      <Link href={`/admin/categories/edit/${category._id}`}>
                        <RiEdit2Line className="text-lg text-secondary-600" />
                      </Link>
                    </div>
                  </td>
                </tr>
              );
            })
          )}
        </tbody>
      </table>
    </div>
  );
};

export default CategoriesList;
