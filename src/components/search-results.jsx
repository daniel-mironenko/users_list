import React from "react";
import { getFilteredUsers } from "../utils/filter";
import { sortUsers } from "../utils/sort";
import Users from "./users";

const SearchResults = ({ data, filterType, sortType, setData }) => {
  const filteredUsers = getFilteredUsers(data, filterType);
  const sortedUsers = sortUsers(filteredUsers, sortType)
  
  return (
    <main>
      <Users data={sortedUsers} setData={setData}/>
    </main>
  );
};

export default SearchResults;
