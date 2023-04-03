import React, { useState } from "react";

const Pagination = ({ itemsPerPage, totalItems, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  const [activePage, setActivePage] = useState(1);

  const handleClick = (event, page) => {
    event.preventDefault();
    paginate(page);
    setActivePage(page);
  };

  return (
    <nav>
      <h2>pagination</h2>
      <ul className="pagination">
        {pageNumbers.map((page) => (
          <li
            key={page}
            className={activePage === page ? "page-item active" : "page-item"}
          >
            <a
              onClick={(e) => handleClick(e, page)}
              href="!#"
              className="page-link"
            >
              {page}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
