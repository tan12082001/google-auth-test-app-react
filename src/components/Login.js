import React from 'react';
import { GoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { setUser } from '../redux/usersSlice';

const Login = () => {
  const dispatch = useDispatch();

  const handleLoginSuccess = async (response) => {
    const token = response.credential;

    try {
      const res = await axios.post('http://localhost:3000/api/v1/login', {
        id_token: token,
      });
      // Dispatch action to update user state in Redux store
      dispatch(setUser(res.data.user));
    } catch (error) {
      console.error('Login error:', error);
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <GoogleLogin
        onSuccess={handleLoginSuccess}
        onError={(error) => console.error('Login error:', error)}
      />
    </div>
  );
};

export default Login;
