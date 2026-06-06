import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const PrivateRoute = ({ children }) => {
  const { token, loading } = useAuth();

  if (loading) {
    return <div className="text-center py-20">Chargement...</div>;
  }

  return token ? children : <Navigate to="/admin" />;
};

export default PrivateRoute;