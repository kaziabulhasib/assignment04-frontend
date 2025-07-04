import React from "react";
import { FaEdit } from "react-icons/fa";
import { IoTrashBin, IoTrashBinOutline } from "react-icons/io5";

const members = [
  {
    id: "1",
    avatarUrl:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=880&q=80",
    name: "Arthur Melo",
    username: "@arthurmelo",
    status: "Active",
    role: "Design Director",
    email: "arthurmelo@example.com",
    teams: ["Design", "Product", "Marketing"],
  },
];

const BookTable: React.FC = () => {
  return (
    <section className='container px-4 mx-auto'>
      <div className='flex items-center gap-x-3'>
        <h2 className='text-lg font-medium text-gray-800'>Team members</h2>
        <span className='px-3 py-1 text-xs text-blue-600 bg-blue-100 rounded-full'>
          {members.length} users
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
                        <input
                          type='checkbox'
                          className='text-blue-500 border-gray-300 rounded'
                        />
                        <span>Name</span>
                      </div>
                    </th>
                    <th className='px-12 py-3.5 text-sm font-normal text-left text-gray-500'>
                      <button className='flex items-center gap-x-2'>
                        <span>Status</span>
                        {/* SVG icon */}
                      </button>
                    </th>
                    <th className='px-4 py-3.5 text-sm font-normal text-left text-gray-500'>
                      <button className='flex items-center gap-x-2'>
                        <span>Role</span>
                        {/* SVG icon */}
                      </button>
                    </th>
                    <th className='px-4 py-3.5 text-sm font-normal text-left text-gray-500'>
                      Email address
                    </th>
                    <th className='px-4 py-3.5 text-sm font-normal text-left text-gray-500'>
                      Teams
                    </th>
                    <th className='py-3.5 px-4'>
                      <span className='sr-only'>Edit</span>
                    </th>
                  </tr>
                </thead>
                <tbody className='bg-white divide-y divide-gray-200'>
                  {members.map((m) => (
                    <tr key={m.id}>
                      <td className='px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap'>
                        <div className='inline-flex items-center gap-x-3'>
                          <input
                            type='checkbox'
                            className='text-blue-500 border-gray-300 rounded'
                          />
                          <div className='flex items-center gap-x-2'>
                            <img
                              className='object-cover w-10 h-10 rounded-full'
                              src={m.avatarUrl}
                              alt={m.name}
                            />
                            <div>
                              <h2 className='font-medium text-gray-800'>
                                {m.name}
                              </h2>
                              <p className='text-sm text-gray-600'>
                                {m.username}
                              </p>
                            </div>
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
                        {m.role}
                      </td>
                      <td className='px-4 py-4 text-sm text-gray-500 whitespace-nowrap'>
                        {m.email}
                      </td>
                      <td className='px-4 py-4 text-sm whitespace-nowrap'>
                        <div className='flex items-center gap-x-2'>
                          {m.teams.map((team, i) => (
                            <p
                              key={i}
                              className='px-3 py-1 text-xs text-indigo-500 rounded-full bg-indigo-100/60'>
                              {team}
                            </p>
                          ))}
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
          {/* Prev SVG */}
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
          {/* Next SVG */}
        </button>
      </div>
    </section>
  );
};
export default BookTable;
