import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import { authSlice } from "../slices/authSlice";
import { toastSlice } from "../slices/toastSlice";
import { authApiSlice } from "../api-slices/authApiSlice";
import { postsApiSlice } from "../api-slices/postsApiSlice";

const rootReducer = combineReducers({
  authSlice: authSlice.reducer,
  toastSlice: toastSlice.reducer,
  [authApiSlice.reducerPath]: authApiSlice.reducer,
  [postsApiSlice.reducerPath]: postsApiSlice.reducer
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat([authApiSlice.middleware, postsApiSlice.middleware]),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector = useSelector.withTypes<RootState>();
export { store };
