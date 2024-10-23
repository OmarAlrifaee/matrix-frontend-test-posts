import { Container } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <Container
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      minH={"100vh"}
      py={10}
    >
      <Outlet />
    </Container>
  );
};
export default AuthLayout;
