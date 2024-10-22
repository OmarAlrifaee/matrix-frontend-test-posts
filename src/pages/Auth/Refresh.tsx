import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { useAppSelector } from "../../redux/store";
import Cookie from "cookie-universal";
import { AUTH_TOKEN_KEY } from "../../constants/auth";
const Refresh = () => {
  const user = useAppSelector((state) => state.authSlice.user);
  const cookie = Cookie();
  useEffect(() => {
    if (user?.token) {
      cookie.set(AUTH_TOKEN_KEY, user?.token);
    } else cookie.remove(AUTH_TOKEN_KEY);
  }, [user, cookie]);
  return <Outlet />;
};
export default Refresh;
