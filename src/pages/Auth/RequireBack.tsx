import { Navigate, Outlet } from "react-router-dom";

const RequireBack = () => {
  const isLoggedIn = false;
  if (isLoggedIn) return <Navigate to={"/"} replace />;
  return <Outlet />;
};
export default RequireBack;
