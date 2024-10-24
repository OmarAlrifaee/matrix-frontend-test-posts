import { Stack } from "@chakra-ui/react";
import { PaginatedPosts as PaginatedPostsType } from "../../types/posts";
import Pagination from "./Pagination";
import Post from "./Post";

type Props = {
  posts: PaginatedPostsType;
};
const PaginatedPosts = ({ posts }: Props) => {
  return (
    <Stack minH={"90vh"} justify={"space-between"} spacing={10}>
      <Stack spacing={10}>
        {posts.data.map((post) => (
          <Post post={post} key={post.id} />
        ))}
      </Stack>
      <Pagination posts={posts} />
    </Stack>
  );
};
export default PaginatedPosts;
