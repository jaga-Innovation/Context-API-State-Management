// src/context/AuthContext.jsx
import React, { createContext, useState } from "react";

// Create the Context
export const AuthContext = createContext();

// Create the Provider component
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = (username) => {
    setUser({ name: username });
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
