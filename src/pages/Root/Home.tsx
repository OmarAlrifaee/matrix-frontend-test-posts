import { Box, Skeleton, Stack } from "@chakra-ui/react";
import Post from "../../components/home/Post";
import AddNewPostModel from "../../components/home/AddNewPostModel";
import { useAppSelector } from "../../redux/store";

const Home = () => {
  const user = useAppSelector((state) => state.authSlice.user);
  const isAdmin = user?.type === "admin";
  return (
    <Box py={5} w={"full"}>
      {user?.token && !isAdmin ? <AddNewPostModel /> : ""}
      <Stack overflowY={"auto"} spacing={10} className="posts-container">
        <Skeleton isLoaded={true}>
          <Post />
        </Skeleton>
      </Stack>
    </Box>
  );
};
export default Home;
