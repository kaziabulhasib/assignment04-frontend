import { Link } from "react-router";

const HeroSection: React.FC = () => {
  return (
    <nav className=' bg-white'>
      {/* Hero Section */}
      <div className='container px-6 py-24 md:py-36 mx-auto'>
        <div className='items-center lg:flex '>
          <div className='w-full lg:w-1/2'>
            <div className='lg:max-w-lg'>
              <h1 className='text-3xl font-semibold text-gray-800 lg:text-4xl'>
                Best place to choose <br />
                your <span className='text-blue-500'>Books</span>
              </h1>

              <p className='mt-3 text-gray-600'>
                Discover, borrow, and manage your favorite books with ease. Our
                library management system helps you explore a wide collection,
                keep track of your borrowed books, and enjoy a seamless reading
                experience—all in one place.
              </p>

              <Link to='/books'>
                {" "}
                <button className='w-full px-5 py-2 mt-6 text-sm tracking-wider  uppercase transition-colors duration-300 transform bg-gray-600 hover:bg-gray-700 text-white rounded-lg lg:w-auto cursor-pointer '>
                  See Books
                </button>
              </Link>
            </div>
          </div>

          <div className='flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2'>
            <img
              className='w-full h-full lg:max-w-3xl'
              src='../../hero-image-lms.jpg'
              alt='library'
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default HeroSection;
