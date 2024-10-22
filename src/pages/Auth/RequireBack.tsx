import { Navigate, Outlet } from "react-router-dom";
import { useAppSelector } from "../../redux/store";
const RequireBack = () => {
  const user = useAppSelector(state => state.authSlice.user);
  if (user?.token) return <Navigate to={"/"} replace />;
  return <Outlet />;
};
export default RequireBack;
