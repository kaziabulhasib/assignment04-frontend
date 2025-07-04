import React from "react";
import { FaEdit } from "react-icons/fa";
import { GrFormNextLink, GrFormPreviousLink } from "react-icons/gr";
import { IoTrashBin } from "react-icons/io5";

const books = [
  {
    id: "1",
    title: "The Pragmatic Programmer",
    author: "Andrew Hunt, David Thomas",
    genre: "NON_FICTION",
    isbn: "9780201616224",
    description: "A classic book for software developers.",
    copies: 5,
    status: "available",
  },
  {
    id: "2",
    title: "Clean Code",
    author: "Robert C. Martin",
    genre: "NON_FICTION",
    isbn: "9780132350884",
    description: "A Handbook of Agile Software Craftsmanship.",
    copies: 0,
    status: "not available",
  },
];
const BookTable: React.FC = () => {
  return (
    <section className='container px-4 my-4 mx-auto'>
      <div className='flex items-center gap-x-3'>
        <h2 className='text-lg font-medium text-gray-800'>Books</h2>
        <span className='px-3 py-1 text-xs text-blue-600 bg-blue-100 rounded-full'>
          {books.length} books
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
                      <button className='flex items-center gap-x-2'>
                        <span>Status</span>
                      </button>
                    </th>
                    <th className='px-4 py-3.5 text-sm font-normal text-left text-gray-500'>
                      <button className='flex items-center gap-x-2'>
                        <span>Genre</span>
                      </button>
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
                  {books.map((m) => (
                    <tr key={m.id}>
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
                            {m.status}
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
                          <button className='text-gray-500 hover:text-red-500 focus:outline-none text-xl'>
                            <IoTrashBin />
                          </button>
                          <button className='text-gray-500 hover:text-indigo-500 focus:outline-none text-xl'>
                            <FaEdit />
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

      {/* Pagination controls (stub) */}
      <div className='flex items-center justify-between mt-6'>
        <button className='flex items-center px-5 py-2 text-sm text-gray-700 bg-white border rounded-md gap-x-2 hover:bg-gray-100'>
          <GrFormPreviousLink className='text-2xl' />
          <span>Previous</span>
        </button>
        <div className='hidden lg:flex items-center gap-x-3'>
          {[1, 2, 3, 4, 5].map((n) => (
            <button
              key={n}
              className={`px-2 py-1 text-sm ${
                n === 1
                  ? "text-blue-500 bg-blue-100/60"
                  : "text-gray-500 hover:bg-gray-100"
              } rounded-md`}>
              {n}
            </button>
          ))}
        </div>
        <button className='flex items-center px-5 py-2 text-sm text-gray-700 bg-white border rounded-md gap-x-2 hover:bg-gray-100'>
          <span>Next</span>
          <GrFormNextLink className='text-2xl' />
        </button>
      </div>
    </section>
  );
};
export default BookTable;
