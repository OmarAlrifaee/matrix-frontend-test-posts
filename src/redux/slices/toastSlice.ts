import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
type Toast = {
  title: string;
  description: string;
  status: "success" | "error" | "info" | "warning";
};
export type ToastState = {
  open: boolean;
  toast: Toast;
};
const initialState: ToastState = {
  open: false,
  toast: {
    title: "",
    description: "",
    status: "success",
  },
};
export const toastSlice = createSlice({
  initialState,
  name: "toastSlice",
  reducers: {
    handleToastContent: (state, action: PayloadAction<ToastState>) => {
      state.toast = action.payload.toast;
      state.open = action.payload.open
    },
  },
});
export const { handleToastContent } = toastSlice.actions;
