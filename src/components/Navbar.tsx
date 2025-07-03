import { useState } from "react";
import { Link } from "react-router";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className='bg-white shadow px-4 py-3'>
      <div className='max-w-7xl mx-auto flex items-center justify-between'>
        <Link to='/' className='font-bold text-xl text-blue-700'>
          LibraTrack
        </Link>
        <div className='md:hidden'>
          <button
            onClick={() => setOpen(!open)}
            className='text-gray-700 focus:outline-none'
            aria-label='Toggle menu'>
            <svg
              className='w-6 h-6'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'>
              {open ? (
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M6 18L18 6M6 6l12 12'
                />
              ) : (
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M4 6h16M4 12h16M4 18h16'
                />
              )}
            </svg>
          </button>
        </div>
        <div className='hidden md:flex space-x-6'>
          <Link to='/books' className='hover:text-blue-600'>
            All Books
          </Link>
          <Link to='/add-book' className='hover:text-blue-600'>
            Add Book
          </Link>
          <Link to='/borrow-summary' className='hover:text-blue-600'>
            Borrow Summary
          </Link>
        </div>
      </div>
      {/* Mobile menu */}
      {open && (
        <div className='md:hidden mt-2 space-y-2'>
          <Link
            to='/books'
            className='block px-2 py-1 hover:bg-blue-50 rounded'
            onClick={() => setOpen(false)}>
            All Books
          </Link>
          <Link
            to='/create-book'
            className='block px-2 py-1 hover:bg-blue-50 rounded'
            onClick={() => setOpen(false)}>
            Add Book
          </Link>
          <Link
            to='/borrow-summary'
            className='block px-2 py-1 hover:bg-blue-50 rounded'
            onClick={() => setOpen(false)}>
            Borrow Summary
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
