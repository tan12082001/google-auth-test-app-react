import './App.css';
import { Navigate, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import UserList from './components/UserList';
import Login from './components/Login';
import { useSelector } from 'react-redux';
import { GoogleOAuthProvider } from '@react-oauth/google';

const App = () => {
  const user = useSelector((state) => state.user.user);

  return (
    <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}>
      <Router>
        <Routes>
          <Route path="/" element={user ? <Navigate to="/users" /> : <Login />} />
          <Route path="/users" element={user ? <UserList /> : <Navigate to="/" />} />
        </Routes>
      </Router>
    </GoogleOAuthProvider>
  );
}

export default App;
