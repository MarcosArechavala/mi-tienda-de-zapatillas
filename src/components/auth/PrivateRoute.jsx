import React from 'react';
    import { Navigate, Outlet } from 'react-router-dom';
    import { useAuth } from '../../context/AuthContext';

    const PrivateRoute = () => {
      const { isAuthenticated } = useAuth();
    
      // Si el usuario está autenticado, renderiza la página solicitada (a través de Outlet)
      
      return isAuthenticated ? <Outlet /> : <Navigate to="/login" replace />;
    };

    export default PrivateRoute;