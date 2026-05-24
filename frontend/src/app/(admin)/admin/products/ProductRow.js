import Link from "next/link";
import React from "react";
import { HiEye, HiTrash } from "react-icons/hi";
import { RiEdit2Line } from "react-icons/ri";

const ProductRow = ({ product, index, deleteProduct, isDeleting }) => {
  return (
    <tr>
      <td className="table__td">{index + 1}</td>
      <td className="table__td  whitespace-nowrap">{product.title}</td>
      <td className="table__td">{product.category.title}</td>
      <td className="table__td">{product.price}</td>
      <td className="table__td">{product.discount}</td>
      <td className="table__td">{product.offPrice}</td>
      <td className="table__td">{product.countInStock}</td>
      <td className="table__td font-bold text-lg">
        <div className="flex items-center gap-x-4">
          {/* <Link href={`/admin/products/${product._id}`}>
            <HiEye className="text-primary-900 text-lg" />
          </Link> */}
          <button
            disabled={isDeleting}
            className="cursor-pointer disabled:cursor-not-allowed"
            onClick={() => deleteProduct(product._id)}
          >
            <HiTrash className="text-rose-600 text-lg" />
          </button>
          <Link href={`/admin/products/edit/${product._id}`}>
            <RiEdit2Line className="text-lg text-secondary-600" />
          </Link>
        </div>
      </td>
    </tr>
  );
};

export default ProductRow;
