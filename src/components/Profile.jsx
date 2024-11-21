// src/components/Profile.jsx
import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

const Profile = () => {
  const { user, logout } = useContext(AuthContext);

  return (
    <div>
      {user ? (
        <>
          <h2>Welcome, {user.name}!</h2>
          <button onClick={logout} style={{ padding: '5px 10px', marginTop: '10px' }}>
            Logout
          </button>
        </>
      ) : (
        <h2>Please log in to view your profile.</h2>
      )}
    </div>
  );
};

export default Profile;
