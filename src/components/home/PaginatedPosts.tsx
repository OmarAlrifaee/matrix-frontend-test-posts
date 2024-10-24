import { Stack } from "@chakra-ui/react";
import { PaginatedPosts as PaginatedPostsType } from "../../types/posts";
import Pagination from "./Pagination";
import Post from "./Post";

type Props = {
  posts: PaginatedPostsType;
};
const PaginatedPosts = ({ posts }: Props) => {
  return (
    <Stack spacing={10}>
      {posts.data.map((post) => (
        <Post post={post} key={post.id} />
      ))}
      <Pagination posts={posts} />
    </Stack>
  );
};
export default PaginatedPosts;
