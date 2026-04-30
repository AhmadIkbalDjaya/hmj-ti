import { Navigate } from 'react-router-dom';

export default function ProtectedRoute({ children }) {
  const isAuth = true;

  if (isAuth) {
    return children;
  }

  return <Navigate to="/login" replace />;
}
