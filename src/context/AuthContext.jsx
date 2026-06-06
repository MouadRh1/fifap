import React, { createContext, useState, useContext, useEffect } from 'react';

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem('admin_token'));
  const [loading, setLoading] = useState(true);

  // Utiliser la vraie URL de l'API en production
  const API_URL = import.meta.env.VITE_API_URL || 'https://darkgrey-kudu-778101.hostingersite.com/api';

  // Récupérer l'utilisateur connecté
  const fetchUser = async (currentToken) => {
    try {
      const response = await fetch(`${API_URL}/admin/me`, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${currentToken}`,
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        const data = await response.json();
        if (data.success && data.data?.user) {
          setUser(data.data.user);
        } else {
          // Token invalide, déconnexion
          logout();
        }
      } else if (response.status === 401) {
        // Non autorisé, déconnexion
        logout();
      } else {
        console.error('Erreur fetchUser:', response.status);
        logout();
      }
    } catch (error) {
      console.error('Erreur de connexion fetchUser:', error);
      logout();
    } finally {
      setLoading(false);
    }
  };

  // Vérifier le token au chargement
  useEffect(() => {
    if (token) {
      fetchUser(token);
    } else {
      setLoading(false);
    }
  }, [token]);

  // Connexion
  const login = async (email, password) => {
    try {
      const response = await fetch(`${API_URL}/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        const newToken = data.data.token;
        localStorage.setItem('admin_token', newToken);
        setToken(newToken);
        setUser(data.data.user);
        return { success: true };
      } else {
        return { 
          success: false, 
          message: data.message || 'Email ou mot de passe incorrect' 
        };
      }
    } catch (error) {
      console.error('Erreur de connexion login:', error);
      return { success: false, message: 'Erreur de connexion au serveur' };
    }
  };

  // Déconnexion
  const logout = async () => {
    if (token) {
      try {
        await fetch(`${API_URL}/admin/logout`, {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${token}`,
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
        });
      } catch (error) {
        console.error('Erreur lors de la déconnexion:', error);
      }
    }
    localStorage.removeItem('admin_token');
    setToken(null);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, token, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};