import { Box, Center } from "@chakra-ui/react";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";

const RootBoundary = () => {
  const error = useRouteError();
  console.log(error);
  console.log(isRouteErrorResponse(error));

  if (isRouteErrorResponse(error)) {
    if (error.status === 404) {
      return <div>This page exist!</div>;
    }

    if (error.status === 401) {
      return <div>You authorized to see this</div>;
    }

    if (error.status === 503) {
      return <div>Looks like our API is down</div>;
    }
    if (error.status === 455) {
      return <div>🫖</div>;
    }
  }

  return (
    <Box>
      <Center>Something went wrong</Center>
    </Box>
  );
};
export default RootBoundary;
