import { useLoaderData, useNavigate, useLocation } from "react-router-dom";

export default function PaginationContainer() {
  const { meta } = useLoaderData();
  const { page, pageCount } = meta.pagination;
  const pages = Array.from({ length: pageCount }, (_, index) => {
    return index + 1;
  });

  const { search, pathname } = useLocation();
  const navigate = useNavigate();

  const handlePageNumber = (pageNumber) => {
    console.log(search);
    console.log(pathname);
    const searchParams = new URLSearchParams(search);
    searchParams.set("page", pageNumber);
    navigate(`${pathname}?${searchParams.toString()}`);
    console.log(pageNumber);
  };
  if (pageCount < 2) {
    return null;
  }

  return (
    <div className="mt-16 flex justify-end">
      <div className="join">
        <button
          className="btn join-item btn-xs sm:btn-md"
          type="button"
          onClick={() => {
            let prevPage = page - 1;
            if (prevPage < 1) prevPage = pageCount;
            handlePageNumber(prevPage);
          }}
        >
          Prev
        </button>
        {pages.map((pageNumber) => {
          return (
            <button
              className={`btn join-item btn-xs border-none sm:btn-md ${page == pageNumber ? "border-base-300 bg-base-300" : ""}`}
              type="button"
              key={pageNumber}
              onClick={() => handlePageNumber(pageNumber)}
            >
              {pageNumber}
            </button>
          );
        })}
        <button
          className="btn join-item btn-xs sm:btn-md"
          type="button"
          onClick={() => {
            let nextPage = page + 1;
            if (nextPage > pageCount) nextPage = 1;
            handlePageNumber(nextPage);
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
}
