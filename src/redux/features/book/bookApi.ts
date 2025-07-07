import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const bookApi = createApi({
  reducerPath: "bookApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://assignment04-backend-sandy.vercel.app/api/",
  }),
  endpoints: (builder) => ({
    getBooks: builder.query<any, { page?: number; limit?: number }>({
      query: ({ page = 1, limit = 10 } = {}) =>
        `books?page=${page}&limit=${limit}`,
    }),
    addBook: builder.mutation({
      query: (newBook) => ({
        url: "books",
        method: "POST",
        body: newBook,
      }),
    }),

    editBook: builder.mutation({
      query: ({ id, ...updatedBook }) => ({
        url: `books/${id}`,
        method: "PUT",
        body: updatedBook,
      }),
    }),

    deleteBook: builder.mutation({
      query: (id) => ({
        url: `books/${id}`,
        method: "DELETE",
      }),
    }),

    borrowBook: builder.mutation({
      query: (borrowData) => ({
        url: "borrow",
        method: "POST",
        body: borrowData,
      }),
    }),
  }),
});

export const {
  useGetBooksQuery,
  useAddBookMutation,
  useDeleteBookMutation,
  useEditBookMutation,
  useBorrowBookMutation,
} = bookApi;
