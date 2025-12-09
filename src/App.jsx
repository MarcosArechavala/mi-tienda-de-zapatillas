import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Layout from './components/Layout/Layout';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import ProfilePage from './pages/ProfilePage';
import PrivateRoute from './components/auth/PrivateRoute';
import PublicRoute from './components/auth/PublicRoute';


const AppLayout = () => {
  return (
    <>
      <Navbar />
      <Layout>
        <Outlet /> {/* se renderizará el componente de la ruta hija */}
      </Layout>
    </>
  );
};


const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />, // Todas las rutas usarán este layout con Navbar
    children: [
      // --- Rutas Públicas Generales ---
      {
        index: true, 
        element: <HomePage />,
      },

  
      {
        element: <PublicRoute />,
        children: [
          {
            path: 'login',
            element: <LoginPage />,
          }
          
        ]
      },
      
      // --- Rutas Privadas 
      {
        element: <PrivateRoute />,
        children: [
          {
            path: 'perfil',
            element: <ProfilePage />,
          }
          //   agregar /carrito, /mis-favoritos, etc.
        ]
      },
    ],
  },
]);


function App() {
  
  return <RouterProvider router={router} />;
}

export default App;
