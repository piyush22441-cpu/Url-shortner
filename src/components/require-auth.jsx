import { Navigate } from 'react-router-dom';
import { UrlState } from '@/context';

const RequireAuth = ({ children }) => {
  const { isAuthenticated, loading } = UrlState();

  if (loading) {
    return <div className="flex justify-center items-center min-h-screen">Loading...</div>;
  }

  if (!isAuthenticated) {
    return <Navigate to="/auth" replace />;
  }

  return children;
};

export default RequireAuth;