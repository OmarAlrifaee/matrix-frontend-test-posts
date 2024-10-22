import { Navigate, Outlet } from "react-router-dom";
import { useAppSelector } from "../../redux/store";

const RequireAuth = () => {
  const user = useAppSelector((state) => state.authSlice.user);
  const isAdmin = user?.type === "admin";
  if (!isAdmin) return <Navigate to={"/"} replace />; // only admins allowed to go to admin page
  return <Outlet />;
};
export default RequireAuth;
