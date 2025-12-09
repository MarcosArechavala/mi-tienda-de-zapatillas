import React from 'react';

import { Link, useNavigate } from 'react-router-dom';

import { useAuth } from '../../context/AuthContext';
import styles from './Navbar.module.css';

const Navbar = () => {
 
  const { isAuthenticated, user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/'); 
  };

  return (
    <header className={styles.navbar}>
      <h1 className={styles.logo}>
        <Link to="/" className={styles.logoLink}>ZapaTienda</Link>
      </h1>
      <nav>
        <ul className={styles.navList}>
          <li><Link to="/">Catálogo</Link></li>
          
          {/* 4. Renderizado Condicional */}
          {isAuthenticated ? (
            <>
              <li><Link to="/perfil">{user.email}</Link></li>
              <li><button onClick={handleLogout} className={styles.logoutButton}>Cerrar Sesión</button></li>
            </>
          ) : (
            <li><Link to="/login">Iniciar Sesión</Link></li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;