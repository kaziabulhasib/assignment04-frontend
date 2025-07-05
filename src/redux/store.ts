import { configureStore } from "@reduxjs/toolkit";
import { bookApi } from "./features/book/bookApi";

export const store = configureStore({
  reducer: {
    [bookApi.reducerPath]: bookApi.reducer,
    // ...other reducers
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(bookApi.middleware),
});
