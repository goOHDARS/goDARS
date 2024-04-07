import { configureStore } from "@reduxjs/toolkit";
import {createStore} from 'redux';
import reducer from "../reducers";

export const store = createStore(reducer);

// Infer the `RootState` and `AppDispatch` types from the store itself
// export type RootState = ReturnType<ReturnType<typeof reducer>>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
