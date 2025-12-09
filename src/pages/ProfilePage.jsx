import React from 'react';
import { useAuth } from '../context/AuthContext';

    const ProfilePage = () => {
      const { user, logout } = useAuth();

      if (!user) return null; 

      return (
        <div style={{ padding: '2rem' }}>
          <h2>Mi Perfil</h2>
          <p>Bienvenido, <strong>{user.email}</strong></p>
          <button onClick={logout}>Cerrar Sesión</button>
        </div>
      );
    };

    export default ProfilePage;