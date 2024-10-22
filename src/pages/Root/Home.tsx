import { Box, Skeleton, Stack } from "@chakra-ui/react";
import Post from "../../components/home/Post";
import AddNewPostModel from "../../components/home/AddNewPostModel";

const Home = () => {
  const isAdmin = false;
  const isAuthed = true;
  return (
    <Box py={5} w={"full"}>
      {isAuthed && !isAdmin ? <AddNewPostModel /> : ""}
      <Stack overflowY={"auto"} spacing={10} className="posts-container">
        <Skeleton isLoaded={true}>
          <Post />
        </Skeleton>
      </Stack>
    </Box>
  );
};
export default Home;
