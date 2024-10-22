import { Box, Center, Link, Stack } from "@chakra-ui/react";
import { Link as ReactRouterLink, useLocation } from "react-router-dom";
const Navbar = () => {
  const { pathname } = useLocation();
  const isAdmin = true; // placeholder
  const isLoggedIn = false; // placeholder
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
          {!isLoggedIn ? (
            <>
              <Link
                as={ReactRouterLink}
                to={"/sign-in"}
                color={pathname === "/sign-in" ? "teal.500" : ""}
                fontWeight={"medium"}
              >
                sign in
              </Link>
              <Link
                as={ReactRouterLink}
                to={"/sign-up"}
                color={pathname === "/sign-up" ? "teal.500" : ""}
                fontWeight={"medium"}
              >
                sign up
              </Link>
            </>
          ) : (
            ""
          )}
        </Stack>
      </Center>
    </Box>
  );
};
export default Navbar;
