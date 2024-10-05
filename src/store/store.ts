import { configureStore } from "@reduxjs/toolkit";
import widgetReducer from "./widgetSlice";

const appStore = configureStore({
  reducer: {
    widget: widgetReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof appStore.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof appStore.dispatch;

export default appStore;
