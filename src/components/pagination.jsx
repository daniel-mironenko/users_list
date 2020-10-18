import React from "react";

const Pagination = ({ sortedUsers, setCurrentPage, usersPerPage, currentPage }) => {
  const countPage = [];

  for (let i = 1; i <= Math.ceil(sortedUsers.length / usersPerPage); i++) {
    countPage.push(i);
  }

  return (
    <div className="pagination-container">
      <ul className="pagination-list">
        {countPage.map((number) => {
          return (
            <li onClick={() => {
              setCurrentPage(number);
            }} key={number} className={`pagination-item ${currentPage === number && `pagination--active`}`}>
              <span>{number}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Pagination;
