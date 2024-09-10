import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/usersSlice";

export const store = configureStore({
  reducer: {
    users: userReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
