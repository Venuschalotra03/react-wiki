import React, { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";

// Pagination component with responsive page buttons using react-paginate
const Pagination = ({ pageNumber, info, updatePageNumber }) => {
  // Handle page number change event
  let pageChange = (data) => {
    updatePageNumber(data.selected + 1);
  };
  // Track window width to adjust pagination display on resize
  const [width, setWidth] = useState(window.innerWidth);
  const updateDimensions = () => {
    setWidth(window.innerWidth);
  };
  //addig event listener for window resize
  useEffect(() => {
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  return (
    <>
      <style jsx>
        {`
          @media (max-width: 768px) {
            .pagination {
              font-size: 12px;
            }
            .next,
            .prev {
              display: none;
            }
          }
          @media (max-width: 768px) {
            .pagination {
              font-size: 14px;
            }
          }
        `}
      </style>
      <ReactPaginate
        className="pagination justify-content-center my-4 gap-4"
        nextLabel="Next"
        forcePage={pageNumber === 1 ? 0 : pageNumber - 1}
        previousLabel="Prev"
        previousClassName="page-item"
        nextClassName="page-item"
        previousLinkClassName="btn btn-primary fs-5 text-white"
        nextLinkClassName="btn btn-primary fs-5 text-white"
        activeClassName="active"
        marginPagesDisplayed={width < 576 ? 1 : 2}
        pageRangeDisplayed={width < 576 ? 1 : 2}
        pageCount={info?.pages}
        onPageChange={pageChange}
        pageClassName="page-item"
        pageLinkClassName="page-link"
      />
    </>
  );
};

export default Pagination;
