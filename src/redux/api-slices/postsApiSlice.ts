import {
  BaseQueryFn,
  createApi,
  FetchArgs,
} from "@reduxjs/toolkit/query/react";
import { AxiosError } from "axios";
import { axiosBaseQuery } from "../../api/axiosBaseQuery";
import { APITAGS } from "../../constants/tags";
import {
  AddPost,
  PaginatedPosts,
  /* PaginatedPosts, */ Post,
  UpdatePost,
} from "../../types/posts";

export const postsApiSlice = createApi({
  baseQuery: axiosBaseQuery() as BaseQueryFn<FetchArgs, unknown, AxiosError>,
  reducerPath: "postsApiSlice",
  tagTypes: [APITAGS.POSTS],
  endpoints: (builder) => ({
    addPost: builder.mutation<Post, AddPost>({
      query: (post) => {
        const formData = new FormData();
        Object.entries(post).forEach(([key, value]) => {
          if (key && value) {
            formData.append(key, value);
          }
        });
        return {
          url: "/api/posts",
          method: "post",
          data: formData,
        };
      },
      invalidatesTags: [APITAGS.POSTS],
    }),
    updatePost: builder.mutation<
      Post,
      { post: UpdatePost; UpdatedPostId: number }
    >({
      query: ({ post, UpdatedPostId }) => {
        const formData = new FormData();
        Object.entries(post).forEach(([key, value]) => {
          if (key && value) {
            formData.append(key, value);
          }
        });
        return {
          url: `/api/edit-post/${UpdatedPostId}`,
          method: "post",
          data: formData,
        };
      },
      invalidatesTags: [APITAGS.POSTS]
    }),
    deletePost: builder.mutation<Post, { deletedPostId: number }>({
      query: ({ deletedPostId }) => ({
        url: `/api/posts/${deletedPostId}`,
        method: "delete",
      }),
      invalidatesTags: [APITAGS.POSTS],
    }),
    getAllPosts: builder.query<PaginatedPosts, { url: string }>({
      query: ({ url = "/api/posts" }) => {
        return {
          url,
          method: "get",
        };
      },
      providesTags: [APITAGS.POSTS],
    }),
  }),
});
export const {
  useAddPostMutation,
  useDeletePostMutation,
  useUpdatePostMutation,
  useGetAllPostsQuery,
} = postsApiSlice;
