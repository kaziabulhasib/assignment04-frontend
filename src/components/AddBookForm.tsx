import React, { useState } from "react";
import { useForm } from "react-hook-form";
import {
  useGetBooksQuery,
  useAddBookMutation,
} from "../redux/features/book/bookApi";
import Swal from "sweetalert2";

const genres = [
  "FICTION",
  "NON_FICTION",
  "SCIENCE",
  "HISTORY",
  "BIOGRAPHY",
  "FANTASY",
];

type BookFormInputs = {
  title: string;
  author: string;
  genre: string;
  isbn: string;
  description?: string;
  copies: number;
};

const AddBookForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<BookFormInputs>();
  const [addBook, { isLoading }] = useAddBookMutation();
  const [success, setSuccess] = useState<string | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const onSubmit = async (data: BookFormInputs) => {
    setSuccess(null);
    setErrorMsg(null);
    try {
      await addBook(data).unwrap();
      Swal.fire("book added successfully")
      reset();
    } catch (err: any) {
      setErrorMsg(err?.data?.message || "Failed to add book.");
    }
  };

  return (
    <form
      className='max-w-lg mx-auto bg-white p-6 rounded shadow mt-8'
      onSubmit={handleSubmit(onSubmit)}>
      <h2 className='text-xl font-bold mb-4'>Add New Book</h2>

      {success && <div className='mb-2 text-green-600'>{success}</div>}
      {errorMsg && <div className='mb-2 text-red-600'>{errorMsg}</div>}

      <div className='mb-4'>
        <label className='block mb-1 font-medium'>Title</label>
        <input
          className='w-full border px-3 py-2 rounded'
          {...register("title", { required: "Title is required" })}
        />
        {errors.title && (
          <span className='text-red-500 text-sm'>{errors.title.message}</span>
        )}
      </div>

      <div className='mb-4'>
        <label className='block mb-1 font-medium'>Author</label>
        <input
          className='w-full border px-3 py-2 rounded'
          {...register("author", { required: "Author is required" })}
        />
        {errors.author && (
          <span className='text-red-500 text-sm'>{errors.author.message}</span>
        )}
      </div>
      {/* status  */}

      <div className='mb-4'>
        <label className='block mb-1 font-medium'>Available</label>
        <select
          className='w-full border px-3 py-2 rounded'
          {...register("available", { required: true })}
          defaultValue='true'>
          <option value='true'>Available</option>
          <option value='false'>Not Available</option>
        </select>
      </div>

      <div className='mb-4'>
        <label className='block mb-1 font-medium'>Genre</label>
        <select
          className='w-full border px-3 py-2 rounded'
          {...register("genre", { required: "Genre is required" })}>
          <option value=''>Select genre</option>
          {genres.map((g) => (
            <option key={g} value={g}>
              {g}
            </option>
          ))}
        </select>
        {errors.genre && (
          <span className='text-red-500 text-sm'>{errors.genre.message}</span>
        )}
      </div>

      <div className='mb-4'>
        <label className='block mb-1 font-medium'>ISBN</label>
        <input
          className='w-full border px-3 py-2 rounded'
          {...register("isbn", { required: "ISBN is required" })}
        />
        {errors.isbn && (
          <span className='text-red-500 text-sm'>{errors.isbn.message}</span>
        )}
      </div>

      <div className='mb-4'>
        <label className='block mb-1 font-medium'>Description</label>
        <textarea
          className='w-full border px-3 py-2 rounded'
          {...register("description")}
        />
      </div>

      <div className='mb-4'>
        <label className='block mb-1 font-medium'>Copies</label>
        <input
          type='number'
          min={1}
          className='w-full border px-3 py-2 rounded'
          {...register("copies", {
            required: "Copies is required",
            min: { value: 1, message: "At least 1 copy is required" },
          })}
        />
        {errors.copies && (
          <span className='text-red-500 text-sm'>{errors.copies.message}</span>
        )}
      </div>

      <button
        type='submit'
        className='bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700'
        disabled={isLoading}>
        {isLoading ? "Adding..." : "Add Book"}
      </button>
    </form>
  );
};

export default AddBookForm;
