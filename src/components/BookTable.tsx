import React, { useState, useEffect } from "react";
import { FaEdit, FaHandHoldingHeart } from "react-icons/fa";
import { GrFormNextLink, GrFormPreviousLink } from "react-icons/gr";
import { IoTrashBin } from "react-icons/io5";
import BorrowBookForm from "./BorrowBookForm";
import {
  useDeleteBookMutation,
  useGetBooksQuery,
} from "../redux/features/book/bookApi";
import Swal from "sweetalert2";
import EditBookForm from "./EditBookForm";

interface BookTableProps {
  onBorrowed?: () => void;
}

const BookTable: React.FC<BookTableProps> = ({ onBorrowed }) => {
  const [page, setPage] = useState(1);
  const limit = 10;

  const { data, isLoading, error, refetch } = useGetBooksQuery({
    page,
    limit,
  });
  const [deleteBook] = useDeleteBookMutation();
  const books = data?.data || [];
  const total = data?.pagination?.total || 0; // <-- FIXED: use pagination
  const totalPages = Math.ceil(total / limit);

  // Ensure page is always valid when totalPages changes (e.g. after add/delete)
  useEffect(() => {
    if (page > totalPages && totalPages > 0) {
      setPage(totalPages);
    }
  }, [totalPages, page]);

  const [borrowingBook, setBorrowingBook] = useState<any | null>(null);
  const [editingBook, setEditingBook] = useState<any | null>(null);

  const handleDeleteBook = async (id: string) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        await deleteBook(id);
        refetch();
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        });
      }
    });
  };

  const handleEditBook = (book: any) => {
    setEditingBook(book);
  };

  const handleBorrowBook = (book: any) => {
    setBorrowingBook(book);
  };

  // Optional: Scroll to top on page change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [page]);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading books.</div>;

  return (
    <section className='container px-4 my-4 mx-auto'>
      <div className='flex items-center gap-x-3'>
        <h2 className='text-lg font-medium text-gray-800'>Books</h2>
        <span className='px-3 py-1 text-xs text-blue-600 bg-blue-100 rounded-full'>
          {total} books {/* <-- FIXED: use total, not books.length */}
        </span>
      </div>
      <div className='flex flex-col mt-6 min-h-[calc(100vh-200px)]'>
        <div className='overflow-x-auto -mx-4 sm:-mx-6 lg:-mx-8 -my-2'>
          <div className='inline-block min-w-full py-2 align-middle md:px-6 lg:px-8'>
            <div className='overflow-hidden border border-gray-200 rounded-lg'>
              <table className='min-w-full divide-y divide-gray-200'>
                <thead className='bg-gray-50'>
                  <tr>
                    <th className='py-3.5 px-4 text-sm font-normal text-left text-gray-500'>
                      <div className='flex items-center gap-x-3'>
                        <span>Title</span>
                      </div>
                    </th>
                    <th className='px-12 py-3.5 text-sm font-normal text-left text-gray-500'>
                      <span>Status</span>
                    </th>
                    <th className='px-4 py-3.5 text-sm font-normal text-left text-gray-500'>
                      <span>Genre</span>
                    </th>
                    <th className='px-4 py-3.5 text-sm font-normal text-left text-gray-500'>
                      Author
                    </th>
                    <th className='px-4 py-3.5 text-sm font-normal text-left text-gray-500'>
                      ISBN
                    </th>
                    <th className='px-4 py-3.5 text-sm font-normal text-left text-gray-500'>
                      Copies
                    </th>
                    <th className='py-3.5 px-4'>
                      <span className='sr-only'>Edit</span>
                    </th>
                  </tr>
                </thead>
                <tbody className='bg-white divide-y divide-gray-200'>
                  {books.map((m: any) => (
                    <tr key={m._id || m.id}>
                      <td className='px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap'>
                        <div className='inline-flex items-center gap-x-3'>
                          <div>
                            <h2 className='font-medium text-gray-800'>
                              {m.title}
                            </h2>
                          </div>
                        </div>
                      </td>
                      <td className='px-12 py-4 text-sm font-medium text-gray-700 whitespace-nowrap'>
                        <div className='inline-flex items-center px-3 py-1 rounded-full gap-x-2 bg-emerald-100/60'>
                          <span className='h-1.5 w-1.5 rounded-full bg-emerald-500'></span>
                          <h2 className='text-sm font-normal text-emerald-500'>
                            {m.available ? "available" : "not available"}
                          </h2>
                        </div>
                      </td>
                      <td className='px-4 py-4 text-sm text-gray-500 whitespace-nowrap'>
                        {m.genre}
                      </td>
                      <td className='px-4 py-4 text-sm text-gray-500 whitespace-nowrap'>
                        {m.author}
                      </td>
                      <td className='px-4 py-4 text-sm whitespace-nowrap'>
                        <div className='flex items-center gap-x-2'>
                          {m.isbn}
                        </div>
                      </td>
                      <td className='px-4 py-4 text-sm whitespace-nowrap'>
                        <div className='flex items-center gap-x-2'>
                          {m.copies}
                        </div>
                      </td>
                      <td className='px-4 py-4 text-sm whitespace-nowrap'>
                        <div className='flex items-center gap-x-6'>
                          <button
                            onClick={() => handleDeleteBook(m._id)}
                            className='cursor-pointer text-gray-500 hover:text-red-500 focus:outline-none text-xl'>
                            <IoTrashBin />
                          </button>
                          <button
                            onClick={() => handleEditBook(m)}
                            className='cursor-pointer text-gray-500 hover:text-indigo-500 focus:outline-none text-xl'>
                            <FaEdit />
                          </button>
                          <button
                            onClick={() => handleBorrowBook(m)}
                            className='cursor-pointer text-center text-gray-500 hover:text-green-500 focus:outline-none text-2xl'>
                            <FaHandHoldingHeart />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      {editingBook && (
        <div className='fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50'>
          <EditBookForm
            book={editingBook}
            onClose={() => {
              setEditingBook(null);
              refetch();
            }}
          />
        </div>
      )}

      {/* borrow book modal  */}
      {borrowingBook && (
        <div className='fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50'>
          <BorrowBookForm
            book={borrowingBook}
            onClose={() => {
              setBorrowingBook(null);
              refetch();
            }}
            onBorrowed={() => {
              if (onBorrowed) onBorrowed();
            }}
          />
        </div>
      )}
      {/* Pagination controls */}
      {totalPages > 1 && (
        <div className='flex items-center justify-between mt-6'>
          <button
            onClick={() => setPage((p) => Math.max(1, p - 1))}
            disabled={page === 1}
            className='flex items-center px-1 md:px-3 py-0.5 md:py-2 text-sm text-gray-700 bg-white border rounded-md gap-x-2 hover:bg-gray-100 disabled:opacity-50'>
            <GrFormPreviousLink className='text-2xl' />
            <span>Prev</span>
          </button>
          <div className='flex items-center gap-x-2'>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => (
              <button
                key={n}
                onClick={() => setPage(n)}
                className={`px-3 py-1 text-sm rounded-md ${
                  n === page
                    ? "text-blue-500 bg-blue-100/60"
                    : "text-gray-500 hover:bg-gray-100"
                }`}>
                {n}
              </button>
            ))}
          </div>
          <button
            onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
            disabled={page === totalPages || totalPages === 0}
            className='flex items-center px-1 md:px-3 py-0.5 md:py-2 text-sm text-gray-700 bg-white border rounded-md gap-x-2 hover:bg-gray-100 disabled:opacity-50'>
            <span>Next</span>
            <GrFormNextLink className='text-2xl' />
          </button>
        </div>
      )}
    </section>
  );
};

export default BookTable;
