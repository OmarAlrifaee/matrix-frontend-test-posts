import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Home from "../pages/Root/Home";
import RootBoundary from "../pages/Root/RootBoundary";
import Refresh from "../pages/Auth/Refresh";
import RequireAuth from "../pages/Auth/RequireAuth";
import RequireBack from "../pages/Auth/RequireBack";
import Admin from "../pages/Root/Admin";
import Login from "../pages/Auth/Login";
import Register from "../pages/Auth/Register";
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Refresh />} errorElement={<RootBoundary />}>
      <Route path="/" element={<Home />} />
      <Route element={<RequireBack />}>
        <Route path="sign-in" element={<Login />} />
        <Route path="sign-up" element={<Register />} />
      </Route>
      <Route element={<RequireAuth />}>
        <Route path="admin" element={<Admin />} />
      </Route>
    </Route>
  )
);
export default router;
