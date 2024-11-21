// src/App.jsx
import React from 'react';
import { AuthProvider } from './context/AuthContext';
import Login from './components/Login';
import Profile from './components/Profile';

const App = () => {
  return (
    <AuthProvider>
      <div style={{ textAlign: 'center', padding: '20px' }}>
        <h1>Authentication Example</h1>
        <Login />
        <Profile />
      </div>
    </AuthProvider>
  );
};

export default App;
