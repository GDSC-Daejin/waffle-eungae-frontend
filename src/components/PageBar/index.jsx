import React from "react";
import Pagination from "react-js-pagination";
import "./pagebar.css";

const PageBar = ({ page, count, onChange }) => {
  console.log(page, count, onChange);
  return (
    <Pagination
      activePage={page}
      itemsCountPerPage={7}
      totalItemsCount={count - 1}
      pageRangeDisplayed={7}
      prevPageText={"<"}
      nextPageText={">"}
      onChange={(page) => onChange(page)}
      className={"pagination"}
    />
  );
};

export default PageBar;
