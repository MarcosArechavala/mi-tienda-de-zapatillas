// src/context/AuthContext.jsx
import React, { createContext, useState, useContext } from 'react';

// 1. Crear el Contexto
const AuthContext = createContext();


export const AuthProvider = ({ children }) => {
 
  const [user, setUser] = useState(null);

  
  const login = (email) => {
 
    //  simplemente creamos un usuario.
    setUser({ email });
  };

  // Función de Logout
  const logout = () => {
    setUser(null);
  };

  
  const value = {
    user,
    isAuthenticated: !!user,
    login,
    logout
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};


export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth debe ser usado dentro de un AuthProvider');
  }
  return context;
};