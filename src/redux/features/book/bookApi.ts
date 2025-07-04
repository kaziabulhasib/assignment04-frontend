import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const bookApi = createApi({
  reducerPath: "bookApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api/" }),
  endpoints: (builder) => ({
    getBooks: builder.query({
      query: ({ page = 1, limit = 10 } = {}) =>
        `books?page=${page}&limit=${limit}`,
    }),
    deleteBook: builder.mutation({
      query: (id) => ({
        url: `books/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const { useGetBooksQuery, useDeleteBookMutation } = bookApi;
