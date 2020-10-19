import React from "react";
import { getCustomDate } from "../utils/data-helper";

const User = ({ userData, setIdUserDelete }) => {
  const { username, email, registrationDate, rating, id } = userData;
  const date = getCustomDate(registrationDate);

  return (
    <tr>
      <td>{username}</td>
      <td>{email}</td>
      <td>{date}</td>
      <td>{rating}</td>
      <td>
        <span
          onClick={() => {
            setIdUserDelete(id)
          }}
          className="delete-user"
        >
          &#10006;
        </span>
      </td>
    </tr>
  );
};

export default User;
