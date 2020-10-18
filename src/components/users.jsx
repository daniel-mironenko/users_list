import React, { Fragment, useEffect, useState } from "react";
import NoUsersFound from "./no-users-found";
import Pagination from "./pagination";
import PopupDelete from "./popup-delete";
import User from "./user";

const Users = ({ sortedUsers, setUsers, filterType, users }) => {
  const [idUsersdelete, setIdUsersdelete] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  const usersPerPage = 5;

  const indexOfLastPost = currentPage * usersPerPage;
  const indexOfFirstPost = indexOfLastPost - usersPerPage;
  const currentUsers = sortedUsers.slice(indexOfFirstPost, indexOfLastPost);

  useEffect(() => {
    setCurrentPage(1);
  }, [filterType]);

  return (
    <Fragment>
      {currentUsers.length ? (
        <table className="table-users">
          <thead>
            <tr>
              <th>Имя пользователя</th>
              <th>E-mail</th>
              <th>Дата регистрации</th>
              <th>Рейтинг</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {currentUsers.map((userData) => {
              return (
                <User
                  key={userData.id}
                  userData={userData}
                  setIdUsersdelete={setIdUsersdelete}
                />
              );
            })}
          </tbody>
        </table>
      ) : (
        <NoUsersFound />
      )}

      <Pagination
        sortedUsers={sortedUsers}
        setCurrentPage={setCurrentPage}
        usersPerPage={usersPerPage}
        currentPage={currentPage}
      />

      <PopupDelete
        idUsersdelete={idUsersdelete}
        setIdUsersdelete={setIdUsersdelete}
        setUsers={setUsers}
        users={users}
      />
    </Fragment>
  );
};

export default Users;
