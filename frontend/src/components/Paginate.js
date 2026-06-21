"use client";

import ReactPaginate from "react-paginate";
import { PiCaretLeftFill, PiCaretRightFill } from "react-icons/pi";
import { useSearchParams, useRouter, usePathname } from "next/navigation";

const Paginate = ({ pageCount = 1, isClient = false }) => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const currentPage = Number(searchParams.get("page")) || 1;

  const handlePageClick = (data) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("page", (data.selected + 1).toString());
    const query = params.toString();
    if (!isClient) {
      router.push(`${pathname}?${query}`);
    } else {
      window.history.pushState(null, "", `${pathname}?${query}`);
    }
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="flex justify-start mt-0">
      <div className="flex items-center gap-4 bg-primary-50/30 p-1.5 rounded-md">
        <ReactPaginate
          onPageChange={handlePageClick}
          previousLabel={<PiCaretRightFill />}
          nextLabel={<PiCaretLeftFill />}
          pageCount={pageCount}
          pageRangeDisplayed={1}
          containerClassName="flex items-center justify-between gap-2"
          pageLinkClassName={
            "text-secondary-800 w-6 h-6 rounded-md flex text-sm items-center justify-center cursor-pointer"
          }
          activeLinkClassName={
            "border border-primary-500 shadow-[0_0_5px_#00000020] !text-primary-900 w-6 h-6 rounded-md flex items-center justify-center cursor-default"
          }
          previousLinkClassName="text-sm text-primary-900 cursor-pointer"
          nextLinkClassName="text-sm text-primary-900 cursor-pointer"
          disabledLinkClassName="cursor-default"
          forcePage={currentPage - 1}
        />
      </div>
    </div>
  );
};

export default Paginate;
