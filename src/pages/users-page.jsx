import React, { Fragment, useState } from "react";
import SearchResults from "../components/search-results";
import SearchUsersForm from "../components/search-users-form";

const UsersPage = ({ data, setData }) => {
  const [formState, setFormState] = useState({
    filterType: "",
    sortType: null,
  });

  return (
    <div className="container">
      <h1>Список пользователей</h1>
      {data && (
        <Fragment>
          <SearchUsersForm formState={formState} setFormState={setFormState} />
          <SearchResults
            data={data}
            filterType={formState.filterType}
            sortType={formState.sortType}
            setData={setData}
          />
        </Fragment>
      )}
    </div>
  );
};

export default UsersPage;
