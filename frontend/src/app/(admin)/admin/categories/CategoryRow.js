"use client"
import { toPersianNumbers } from "@/utils/toPersianNumbers";
import Link from "next/link";
import React from "react";
import { HiEye, HiTrash } from "react-icons/hi";
import { RiEdit2Line } from "react-icons/ri";

const CategoryRow = ({ category, index, deleteCategory, isDeleting }) => {
  return (
    <tr className="table__tr">
      <td className="table__td">{toPersianNumbers(index + 1)}</td>
      <td className="table__td  whitespace-nowrap">{category.title}</td>
      <td className="table__td">{category.description}</td>
      <td className="table__td">{category.englishTitle}</td>
      <td className="table__td">
        <span className="badge badge--secondary">{category.type}</span>
      </td>
      <td className="table__td font-bold text-lg">
        <div className="flex items-center gap-x-4">
          {/* <Link href={`/admin/categories/${category._id}`}>
            <HiEye className="text-primary-900 text-lg" />
          </Link> */}
          <button
            disabled={isDeleting}
            className="cursor-pointer disabled:cursor-not-allowed"
            onClick={() => deleteCategory(category._id)}
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
};

export default CategoryRow;
