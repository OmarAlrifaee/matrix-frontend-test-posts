import { Box,  Center, Link, Stack } from "@chakra-ui/react";
import { Link as ReactRouterLink, useLocation } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { useCallback } from "react";
import { getCurrentUser } from "../../redux/slices/authSlice";
const Navbar = () => {
  const { pathname } = useLocation();
  const user = useAppSelector((state) => state.authSlice.user);
  const dispatch = useAppDispatch();
  const isAdmin = user?.type === "admin";
  const logout = useCallback(() => {
    dispatch(getCurrentUser(null));
  }, [dispatch]);
  return (
    <Box as="nav" py={5} borderBottom={"2px"} borderColor={"blackAlpha.300"}>
      <Center>
        <Stack direction={"row"} spacing={5} textTransform={"capitalize"}>
          <Link
            as={ReactRouterLink}
            to={"/"}
            color={pathname === "/" ? "teal.500" : ""}
            fontWeight={"medium"}
          >
            Home
          </Link>
          {isAdmin ? (
            <Link
              as={ReactRouterLink}
              to={"/admin"}
              color={pathname === "/admin" ? "teal.500" : ""}
              fontWeight={"medium"}
            >
              Admin
            </Link>
          ) : (
            ""
          )}
          {!user?.token ? (
            <Link
              as={ReactRouterLink}
              to={"/sign-in"}
              color={pathname === "/sign-in" ? "teal.500" : ""}
              fontWeight={"medium"}
            >
              sign in
            </Link>
          ) : (
            <Link onClick={logout} fontWeight={"medium"} color={"red.500"}>
              sign Out
            </Link>
          )}
        </Stack>
      </Center>
    </Box>
  );
};
export default Navbar;
