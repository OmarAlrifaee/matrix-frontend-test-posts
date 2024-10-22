import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { User } from "../../types/user";
type AuthState = {
  user: User | null;
};
const initialState: AuthState = { user: null };
export const authSlice = createSlice({
  initialState,
  name: "authSlice",
  reducers: {
    getCurrentUser: (state, action: PayloadAction<User | null>) => {
      state.user = action.payload;
    },
  },
});
export const { getCurrentUser } = authSlice.actions;
