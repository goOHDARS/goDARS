import { configureStore } from "@reduxjs/toolkit";
import createRootReducer from "../reducers";

export const store = configureStore({
  reducer: createRootReducer,
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<ReturnType<typeof createRootReducer>>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
