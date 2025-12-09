 import React from 'react';
    import { Navigate, Outlet } from 'react-router-dom';
    import { useAuth } from '../../context/AuthContext';

    const PublicRoute = () => {
      const { isAuthenticated } = useAuth();

      // Si el usuario está autenticado, lo redirige a su perfil
      // Si no, renderiza la pgina solicitada (Login, Registro)
      return isAuthenticated ? <Navigate to="/perfil" replace /> : <Outlet />;
    };
    
    export default PublicRoute;