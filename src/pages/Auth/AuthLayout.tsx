import { Flex } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <Flex justify={"center"} align={"center"} minH={"100vh"}>
      <Outlet />
    </Flex>
  );
};
export default AuthLayout;
