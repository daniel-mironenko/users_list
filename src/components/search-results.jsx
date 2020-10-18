import React from "react";
import { getFilteredUsers } from "../utils/filter";
import { sortUsers } from "../utils/sort";
import Users from "./users";

const SearchResults = ({ users, filterType, sortType, setUsers }) => {
  const filteredUsers = getFilteredUsers(users, filterType);
  const sortedUsers = sortUsers(filteredUsers, sortType);

  return (
    <main>
      <Users sortedUsers={sortedUsers} setUsers={setUsers} filterType={filterType} users={users}/>
    </main>
  );
};

export default SearchResults;
