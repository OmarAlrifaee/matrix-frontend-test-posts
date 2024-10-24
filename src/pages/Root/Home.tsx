import { Box } from "@chakra-ui/react";
import AddNewPostModel from "../../components/home/AddNewPostModel";
import { useAppSelector } from "../../redux/store";
import { useGetAllPostsQuery } from "../../redux/api-slices/postsApiSlice";
import { useSearchParams } from "react-router-dom";
import EmptyState from "../../components/shared/EmptyState";
import PostsSkeletonList from "../../components/shared/PostsSkeletonList";
import ErrorState from "../../components/shared/ErrorState";
import { paginationStartPage } from "../../constants/pagination";
import PaginatedPosts from "../../components/home/PaginatedPosts";

const Home = () => {
  const user = useAppSelector((state) => state.authSlice.user);
  const isAdmin = user?.type === "admin";
  const canAddPost = !!user?.token && !isAdmin; // only users can add posts
  const [urlSearchParams] = useSearchParams();
  const page = urlSearchParams.get("page") || paginationStartPage;
  const postsQuery = useGetAllPostsQuery({
    url: `/api/posts${page ? `?page=${page}` : ""}`,
  });
  return (
    <Box py={5} w={"full"}>
      {postsQuery.isSuccess && !!postsQuery.data.data.length && canAddPost && (
        <Box mb={3}>
          <AddNewPostModel />
        </Box>
      )}
      {postsQuery.isFetching || postsQuery.isLoading ? (
        <PostsSkeletonList />
      ) : postsQuery.isError ? (
        <ErrorState
          message={
            postsQuery.error.message ||
            "some thing went wronge please try agine"
          }
          refetch={postsQuery.refetch}
        />
      ) : postsQuery.isSuccess && !!postsQuery.data.data.length ? (
        <PaginatedPosts posts={postsQuery.data} />
      ) : (
        <EmptyState
          message="sorry, there is no data to show"
          refetch={postsQuery.refetch}
          canAddPost={canAddPost}
        />
      )}
    </Box>
  );
};
export default Home;
