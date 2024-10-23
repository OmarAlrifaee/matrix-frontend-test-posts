import {
  BaseQueryFn,
  createApi,
  FetchArgs,
} from "@reduxjs/toolkit/query/react";
import { axiosBaseQuery } from "../../api/axiosBaseQuery";
import { AddUser, User } from "../../types/user";
import { AxiosError } from "axios";
import { handleToastContent } from "../slices/toastSlice";
import router from "../../router";
import { loginFormFailds } from "../../lib/zod/schemas";
import { getCurrentUser } from "../slices/authSlice";

export const authApiSlice = createApi({
  baseQuery: axiosBaseQuery() as BaseQueryFn<FetchArgs, unknown, AxiosError>,
  reducerPath: "authApiSlice",
  endpoints: (builder) => ({
    register: builder.mutation<User, AddUser>({
      query: (data) => {
        const formData = new FormData();
        Object.entries(data).forEach(([key, value]) => {
          if (key && value) {
            formData.append(key, value);
          }
        });
        return {
          url: "/api/register",
          data: formData,
          method: "post",
        };
      },
      async onQueryStarted(_arg, api) {
        try {
          const result = await api.queryFulfilled;
          if (result.data) {
            api.dispatch(
              handleToastContent({
                open: true,
                toast: {
                  title: "Success",
                  description: "Account Created Successfully",
                  status: "success",
                },
              })
            );
            router.navigate("/sign-in", { replace: true });
          }
        } catch {
          //
        }
      },
    }),
    login: builder.mutation<User, loginFormFailds>({
      query: (data) => {
        const formData = new FormData();
        Object.entries(data).forEach(([key, value]) => {
          if (key && value) {
            formData.append(key, value);
          }
        });
        return {
          url: "/api/login",
          data: formData,
          method: "post",
        };
      },
      async onQueryStarted(_arg, api) {
        try {
          const result = await api.queryFulfilled;
          if (result.data) {
            api.dispatch(getCurrentUser(result.data));
            api.dispatch(
              handleToastContent({
                open: true,
                toast: {
                  title: "Success",
                  description: "You Logged In Successfully",
                  status: "success",
                },
              })
            );
            router.navigate("/", { replace: true });
          }
        } catch {
          //
        }
      },
    }),
  }),
});
export const { useRegisterMutation, useLoginMutation } = authApiSlice;
