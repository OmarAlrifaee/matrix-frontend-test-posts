import { Container, Flex } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <Container py={10}>
      <Flex justify={"center"} align={"center"} minH={"100vh"}>
        <Outlet />
      </Flex>
    </Container>
  );
};
export default AuthLayout;
