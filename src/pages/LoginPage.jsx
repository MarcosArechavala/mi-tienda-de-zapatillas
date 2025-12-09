import React, { useState, useRef, useEffect } from 'react';
    import { useAuth } from '../context/AuthContext';
    import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  
  const emailInputRef = useRef(null);

  
  useEffect(() => {
    
    if (emailInputRef.current) {
      emailInputRef.current.focus();
    }
  }, []); 

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim()) {
      login(email);
      navigate('/perfil');
    }
  };

    return (
    <form onSubmit={handleSubmit} style={{ maxWidth: '400px', margin: '2rem auto' }}>
      <h2>Iniciar Sesión</h2>
      <input
        
        ref={emailInputRef}
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="tu@email.com"
        required
        style={{ width: '100%', padding: '0.5rem', marginBottom: '1rem' }}
      />
      <button type="submit" style={{ width: '100%', padding: '0.75rem' }}>Entrar</button>
    </form>
  );
};

export default LoginPage;