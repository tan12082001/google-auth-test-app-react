// src/components/Logout.js
import React from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { clearUser } from '../redux/usersSlice';

const Logout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await axios.delete('http://localhost:3000/api/v1/logout');
      // Clear user from Redux store
      dispatch(clearUser());
      // Redirect to login page
      navigate('/');
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  return (
    <button onClick={handleLogout}>Logout</button>
  );
};

export default Logout;
