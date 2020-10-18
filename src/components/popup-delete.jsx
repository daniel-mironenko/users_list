import React from "react";

const PopupDelete = ({ idUsersdelete, setIdUsersdelete, users, setUsers }) => {

  return (
    <div className={`popup-container ${!idUsersdelete && `visually-hidden`}`}>
      <div className="popup-delete">
        <h3>Вы уверены, что хотите удалить пользователя</h3>
        <button
          onClick={() => {
            const newUsers = users.filter((it) => it.id !== idUsersdelete);

            setUsers(newUsers);
            setIdUsersdelete(null);
          }}
          className="btn-delete btn-delete--yes"
        >
          Да
        </button>
        <button
          onClick={() => {
            setIdUsersdelete(null);
          }}
          className="btn-delete btn-delete--no"
        >
          Нет
        </button>
      </div>
    </div>
  );
};

export default PopupDelete;
