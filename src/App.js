import React, { Fragment, useEffect, useState } from 'react';
import { adaptedUsers } from './adapter';
import UsersPage from './pages/users-page';
const url = `https://5ebbb8e5f2cfeb001697d05c.mockapi.io/users`;

const App = () => {
  const [users, setUsers] = useState(null);

  const getUsers = async () => {
    const response = await fetch(url);
    const json = await response.json();
    const data = adaptedUsers(json);

    setUsers(data);
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <Fragment>
      {users &&
        <UsersPage users={users} setUsers={setUsers}/>
      }</Fragment>
  );
}

export default App;
