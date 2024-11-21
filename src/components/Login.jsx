// src/components/Login.jsx
import React, { useContext, useState } from 'react';
import { AuthContext } from '../context/AuthContext';

const Login = () => {
  const { login } = useContext(AuthContext);
  const [username, setUsername] = useState('');

  const handleLogin = () => {
    if (username.trim()) {
      login(username);
      setUsername('');
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Enter your name"
        style={{ padding: '5px', marginRight: '10px' }}
      />
      <button onClick={handleLogin} style={{ padding: '5px 10px' }}>
        Login
      </button>
    </div>
  );
};

export default Login;
