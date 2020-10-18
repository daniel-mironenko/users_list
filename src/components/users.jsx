import React, { Fragment, useState } from "react";
import PopupDelete from "./popup-delete";
import User from "./user";

const Users = ({ data, setData }) => {
  const [idUsersdelete, setIdUsersdelete] = useState(null);

  return (
    <Fragment>
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
          {data.map((userData) => {
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
      
      <PopupDelete idUsersdelete={idUsersdelete} setIdUsersdelete={setIdUsersdelete} setData={setData} data={data}/>
    </Fragment>
  );
};

export default Users;
