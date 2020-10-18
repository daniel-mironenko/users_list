import React, { Fragment, useState } from "react";
import SearchResults from "../components/search-results";
import SearchUsersForm from "../components/search-users-form";

const UsersPage = ({ users, setUsers }) => {
  const [formState, setFormState] = useState({
    filterType: "",
    sortType: null,
  });

  return (
    <div className="container">
      <h1>Список пользователей</h1>
      {users && (
        <Fragment>
          <SearchUsersForm formState={formState} setFormState={setFormState} />
          <SearchResults
            users={users}
            filterType={formState.filterType}
            sortType={formState.sortType}
            setUsers={setUsers}
          />
        </Fragment>
      )}
    </div>
  );
};

export default UsersPage;
