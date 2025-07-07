import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const borrowApi = createApi({
  reducerPath: "borrowApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://assignment04-backend-sandy.vercel.app/api/",
  }),
  endpoints: (builder) => ({
    getBorrowSummary: builder.query({
      query: () => "borrow",
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

export const { useGetBorrowSummaryQuery, useBorrowBookMutation } = borrowApi;
