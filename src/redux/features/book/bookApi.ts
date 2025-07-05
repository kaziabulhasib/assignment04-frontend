import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const bookApi = createApi({
  reducerPath: "bookApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api/" }),
  endpoints: (builder) => ({
    getBooks: builder.query({
      query: ({ page = 1, limit = 10 } = {}) =>
        `books?page=${page}&limit=${limit}`,
    }),
    // You can add more endpoints (addBook, editBook, deleteBook) here later
  }),
});

export const { useGetBooksQuery } = bookApi;
