import { Box, Center, Stack} from "@chakra-ui/react";
import AddNewPostModel from "../home/AddNewPostModel";

type Props = {
  message: string;
  refetch: () => void;
  canAddPost: boolean;
};
const EmptyState = ({ message = "No Data", canAddPost }: Props) => {
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
        {canAddPost ? <AddNewPostModel /> : ""}
      </Stack>
    </Box>
  );
};
export default EmptyState;
