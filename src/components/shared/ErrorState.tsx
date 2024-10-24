import { Box, Button, Center, Stack } from "@chakra-ui/react";

type Props = {
  message: string;
  refetch: () => void;
};
const ErrorState = ({ message = "some thing went wronge please try agine", refetch }: Props) => {
  return (
    <Box
      border={"1px"}
      borderColor={"blackAlpha.300"}
      borderRadius={"md"}
      p={5}
    >
      <Stack spacing={3}>
        <Center
          fontSize={{ base: "sm", md: "lg" }}
          textTransform={"capitalize"}
          fontWeight={"medium"}
        >
          {message}
        </Center>
        <Button colorScheme="teal" onClick={refetch}>
          Try Agine
        </Button>
      </Stack>
    </Box>
  );
};
export default ErrorState;
