import React, { Fragment, useEffect, useState } from 'react';
import { adaptedUsers } from './adapter';
import UsersPage from './pages/users-page';
const url = `https://5ebbb8e5f2cfeb001697d05c.mockapi.io/users`;

const App = () => {
  const [data, setData] = useState(null);

  const getUsers = async () => {
    const response = await fetch(url);
    const json = await response.json();
    const users = adaptedUsers(json);

    setData(users);
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <Fragment>
      {data &&
        <UsersPage data={data} setData={setData}/>
      }</Fragment>
  );
}

export default App;
