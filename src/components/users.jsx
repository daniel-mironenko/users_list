import React, { Fragment, useEffect, useState } from "react";
import NoUsersFound from "./no-users-found";
import Pagination from "./pagination";
import PopupDelete from "./popup-delete";
import User from "./user";

const Users = ({ sortedUsers, setUsers, filterType, users }) => {
  const [idUserDelete, setIdUserDelete] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  const usersPerPage = 5;

  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = sortedUsers.slice(indexOfFirstUser, indexOfLastUser);

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
                  setIdUserDelete={setIdUserDelete}
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
        idUserDelete={idUserDelete}
        setIdUserDelete={setIdUserDelete}
        setUsers={setUsers}
        users={users}
      />
    </Fragment>
  );
};

export default Users;
