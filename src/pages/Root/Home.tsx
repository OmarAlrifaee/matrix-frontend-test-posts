import { Box, Skeleton, Stack } from "@chakra-ui/react";
import Post from "../../components/home/Post";
import AddNewPostModel from "../../components/home/AddNewPostModel";
import { useAppSelector } from "../../redux/store";
import { useGetAllPostsQuery } from "../../redux/api-slices/postsApiSlice";

const Home = () => {
  const user = useAppSelector((state) => state.authSlice.user);
  const postsQuery = useGetAllPostsQuery({ url: "/api/posts" });
  const isAdmin = user?.type === "admin";
  return (
    <Box py={5} w={"full"}>
      {user?.token && !isAdmin ? <AddNewPostModel /> : ""}
      <Stack overflowY={"auto"} spacing={10} className="posts-container">
        {postsQuery.data?.data.map((post) => (
          <Skeleton key={post.id} isLoaded={postsQuery.isSuccess}>
            <Post post={post} />
          </Skeleton>
        ))}
      </Stack>
    </Box>
  );
};
export default Home;
