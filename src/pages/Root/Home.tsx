import { Box } from "@chakra-ui/react";
import AddNewPostModel from "../../components/home/AddNewPostModel";
import { useAppSelector } from "../../redux/store";
import { useGetAllPostsQuery } from "../../redux/api-slices/postsApiSlice";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import EmptyState from "../../components/shared/EmptyState";
import PostsSkeletonList from "../../components/shared/PostsSkeletonList";
import ErrorState from "../../components/shared/ErrorState";
import { paginationStartPage } from "../../constants/pagination";
import PaginatedPosts from "../../components/home/PaginatedPosts";
import { useEffect } from "react";

const Home = () => {
  const user = useAppSelector((state) => state.authSlice.user);
  const isAdmin = user?.type === "admin";
  const canAddPost = !!user?.token && !isAdmin; // only users can add posts
  const [urlSearchParams] = useSearchParams();
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const page = urlSearchParams.get("page") || paginationStartPage;
  const postsQuery = useGetAllPostsQuery({
    url: `/api/posts${page ? `?page=${page}` : ""}`,
  });
  // this to prevent showing an empty state if the user in oagination page 2 for example and there is no data there
  // but we have data in page 1
  useEffect(() => {
    if (
      !postsQuery.data?.data.length &&
      parseInt(urlSearchParams.get("page")!) !== 1
    ) {
      const params = new URLSearchParams(urlSearchParams.toString());
      params.set("page", paginationStartPage);
      navigate(`${pathname}?${params.toString()}`, { replace: true });
    }
  }, [postsQuery.data?.data.length, urlSearchParams, navigate, pathname]);
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
