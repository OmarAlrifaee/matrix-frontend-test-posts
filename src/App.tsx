import { RouterProvider } from "react-router-dom";
import router from "./router";
import { Box } from "@chakra-ui/react";
const App = () => {
  return (
    <Box>
      <RouterProvider router={router} />
    </Box>
  );
};
export default App;
