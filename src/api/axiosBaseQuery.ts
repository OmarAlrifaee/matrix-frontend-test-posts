import Cookie from "cookie-universal";
import type { BaseQueryFn } from "@reduxjs/toolkit/query";
import axios from "axios";
import type { AxiosRequestConfig, AxiosError } from "axios";
import { AUTH_TOKEN_KEY } from "../constants/auth";
import { validatedEnv } from "../lib/zod/schemas";
import { handleToastContent } from "../redux/slices/toastSlice";
import { getResponseMessage } from "../utils/getResponseMessage";


export const axiosBaseQuery =
  (
    { baseUrl }: { baseUrl: string } = {
      baseUrl: validatedEnv.VITE_API_BASE_URL,
    }
  ): BaseQueryFn<
    {
      url: string;
      method?: AxiosRequestConfig["method"];
      data?: AxiosRequestConfig["data"];
      params?: AxiosRequestConfig["params"];
      headers?: AxiosRequestConfig["headers"];
    },
    unknown,
    unknown
  > =>
  async ({ url, method, data, params, headers }, api) => {
    const cookieStore = Cookie();
    const token = cookieStore.get(AUTH_TOKEN_KEY);
    try {
      const result = await axios({
        url: baseUrl + url,
        method,
        data,
        params,
        headers: token
          ? { ...headers, Authorization: `Bearer ${token}` }
          : headers,
      });
      api.dispatch(
        handleToastContent(
          getResponseMessage(result, {
            open: true,
            toast: { status: "success", title: "Success", description: "" },
          })
        )
      );
      return result;
    } catch (axiosError) {
      const err = axiosError as AxiosError;
      api.dispatch(
        handleToastContent(
          getResponseMessage(err, {
            open: true,
            toast: { status: "error", title: "Error", description: "" },
          })
        )
      );
      return {
        error: {
          status: err.response?.status,
          data: err.response?.data || err.message,
        },
      };
    } finally {
      //
    }
  };
