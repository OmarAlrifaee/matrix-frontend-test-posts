import { Box, Container } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import Navbar from "../../components/shared/Navbar";

const RootLayout = () => {
  return (
    <Box>
      <Navbar />
      <Container centerContent py={10}>
        <Outlet />
      </Container>
    </Box>
  );
};
export default RootLayout;
