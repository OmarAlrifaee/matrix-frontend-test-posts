import { AxiosError, AxiosResponse } from "axios";
import { ToastState } from "../redux/slices/toastSlice";
type GetResponseMessageArgsI = Record<
  "post" | "delete",
  Record<number | string, { message: string }>
> & { default: { message: string } };
export const getResponseMessage = (
  response: AxiosResponse | AxiosError,
  options: ToastState
): ToastState => {
  if (response.config?.method === "get") {
    return {
      open: false,
      toast: { title: "", description: "", status: "success" },
    };
  }
  if (!response) {
    return {
      open: true,
      toast: {
        status: "warning",
        title: "Warning",
        description: "No Response",
      },
    };
  }
  const responseMessages: GetResponseMessageArgsI = {
    post: {
      200: { message: "Post Updated Successfully" },
      201: { message: "Post Added Successfully" },
      401: { message: "Please Sign In First" },
      422: { message: "Wronge Email Or Password" },
      500: { message: "Sorry There Is A Problem In The Server" },
    },
    delete: {
      200: { message: "Post Deleted Successfully" },
      401: { message: "Please Sign In First" },
      500: { message: "Sorry There Is A Problem In The Server" },
    },
    default: {
      message: "Connection Error, Please Check Your Connection And Try Agine",
    },
  };
  const message =
    // @ts-expect-error typescript thing here
    responseMessages[response.config?.method?.toString()][
      response?.status?.toString()
    ]?.message || responseMessages.default.message;

  return { open: true, toast: { ...options.toast, description: message } };
};
