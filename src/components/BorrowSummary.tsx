import React from "react";
import { useGetBorrowSummaryQuery } from "../redux/features/borrow/borrowApi";

const BorrowSummary: React.FC = () => {
  const { data, isLoading, error } = useGetBorrowSummaryQuery(undefined);

  if (isLoading) return <div>Loading summary...</div>;
  if (error) return <div>Error loading summary.</div>;

  return (
    <section className='w-full max-w-3xl md:max-w-4xl lg:max-w-5xl mx-auto mt-8 bg-white p-6 rounded shadow min-h-[350px]'>
      <h2 className='text-2xl font-bold mb-6 text-center'>
        Borrowed Books Summary
      </h2>
      <div className='overflow-x-auto'>
        <table className='min-w-[600px] w-full text-base md:text-lg divide-y divide-gray-200'>
          <thead className='bg-gray-100'>
            <tr>
              <th className='px-6 py-3 text-left font-semibold text-gray-700'>
                Title
              </th>
              <th className='px-6 py-3 text-left font-semibold text-gray-700'>
                ISBN
              </th>
              <th className='px-6 py-3 text-left font-semibold text-gray-700'>
                Total Borrowed
              </th>
            </tr>
          </thead>
          <tbody>
            {data?.data?.length === 0 && (
              <tr>
                <td
                  colSpan={3}
                  className='text-center py-8 text-gray-500 text-lg'>
                  No borrow records found.
                </td>
              </tr>
            )}
            {data?.data?.map((item: any, idx: number) => (
              <tr key={idx} className='border-b hover:bg-gray-50 transition'>
                <td className='px-6 py-4'>{item.book.title}</td>
                <td className='px-6 py-4'>{item.book.isbn}</td>
                <td className='px-6 py-4'>{item.totalQuantity}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default BorrowSummary;
