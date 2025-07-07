import React from "react";
import { useGetBorrowSummaryQuery } from "../redux/features/borrow/borrowApi";


const BorrowSummary: React.FC = () => {
  const { data, isLoading, error } = useGetBorrowSummaryQuery();

  if (isLoading) return <div>Loading summary...</div>;
  if (error) return <div>Error loading summary.</div>;

  return (
    <section className="max-w-2xl mx-auto mt-8 bg-white p-6 rounded shadow">
      <h2 className="text-xl font-bold mb-4">Borrowed Books Summary</h2>
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">Title</th>
            <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">ISBN</th>
            <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">Total Borrowed</th>
          </tr>
        </thead>
        <tbody>
          {data?.data?.length === 0 && (
            <tr>
              <td colSpan={3} className="text-center py-4 text-gray-500">No borrow records found.</td>
            </tr>
          )}
          {data?.data?.map((item: any, idx: number) => (
            <tr key={idx} className="border-b">
              <td className="px-4 py-2">{item.book.title}</td>
              <td className="px-4 py-2">{item.book.isbn}</td>
              <td className="px-4 py-2">{item.totalQuantity}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default BorrowSummary;