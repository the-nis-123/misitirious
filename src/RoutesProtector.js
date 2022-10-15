import { Navigate, useLocation, Outlet } from 'react-router-dom';
// import useAuth from './hooks/useAuthContext';

const RoutesProtector = () => {
  // const { auth } = useAuth();
  // const location = useLocation();
  return <Outlet />;
  // return auth?.email && auth?.account_type==='subscriber' ? <Outlet />
  //   : <Navigate to='/login' state={{ from: location }} replace />
}

export default RoutesProtector;