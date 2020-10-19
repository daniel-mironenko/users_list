import React from "react";

const PopupDelete = ({ idUserDelete, setIdUserDelete, users, setUsers }) => {

  return (
    <div className={`popup-container ${!idUserDelete && `visually-hidden`}`}>
      <div className="popup-delete">
        <h3>Вы уверены, что хотите удалить пользователя</h3>
        <button
          onClick={() => {
            const newUsers = users.filter((it) => it.id !== idUserDelete);

            setUsers(newUsers);
            setIdUserDelete(null);
          }}
          className="btn-delete btn-delete--yes"
        >
          Да
        </button>
        <button
          onClick={() => {
            setIdUserDelete(null);
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
