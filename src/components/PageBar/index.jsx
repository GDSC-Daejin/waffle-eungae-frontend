import React from "react";
import Pagination from "react-js-pagination";
import "./pagebar.css";

const PageBar = ({ page, count, onChange }) => {
  return (
    <Pagination
      activePage={page}
      itemsCountPerPage={4}
      totalItemsCount={count === 1 ? count : count - 1}
      pageRangeDisplayed={5}
      prevPageText={"<"}
      nextPageText={">"}
      onChange={(page) => onChange(page)}
      className={"pagination"}
    />
  );
};

export default PageBar;
