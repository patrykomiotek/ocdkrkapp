import { configureStore } from "@reduxjs/toolkit";
import { reducer as counterReducer } from "./features/Counter/counterSlice";

export const store = configureStore({
  reducer: {
    xyz: counterReducer,
    // user: userReducer,
    // comments: commentsReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
