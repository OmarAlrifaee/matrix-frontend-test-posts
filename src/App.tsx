import { RouterProvider } from "react-router-dom";
import router from "./router";
import { Box } from "@chakra-ui/react";
import CustomToast from "./components/shared/CustomToast";
const App = () => {
  return (
    <Box>
      <RouterProvider router={router} />
      <CustomToast />
    </Box>
  );
};
export default App;
