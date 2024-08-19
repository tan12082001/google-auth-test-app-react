// src/components/UserList.js
import React, { useEffect, useState } from 'react';
import api from '../redux/api';
import Logout from './Logout';

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await api.get('/users');
        setUsers(response.data);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div>
      <h2>Users List</h2>
      <Logout />
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
      <div className="App">
        <header className="App-header">
            Google User Authentication Test Application
        </header>
      </div>
    </div>
  );
};

export default UserList;
