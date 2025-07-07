import React from "react";
import { useForm } from "react-hook-form";
import { useEditBookMutation } from "../redux/features/book/bookApi";
import Swal from "sweetalert2";

const genres = [
  "FICTION",
  "NON_FICTION",
  "SCIENCE",
  "HISTORY",
  "BIOGRAPHY",
  "FANTASY",
];

export default function EditBookForm({
  book,
  onClose,
}: {
  book: any;
  onClose: () => void;
}) {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({ defaultValues: book });
  const [editBook, { isLoading }] = useEditBookMutation();

  React.useEffect(() => {
    Object.entries(book).forEach(([key, value]) => setValue(key, value));
  }, [book, setValue]);

  const onSubmit = async (data: any) => {
    if (Number(data.copies) === 0) data.available = false;
    else data.available = true;
    await editBook({ id: book._id, ...data });
    Swal.fire("book edited successfully!");
    onClose();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className='w-full max-w-md md:max-w-lg  mx-auto p-6 bg-white rounded shadow'>
      <h2 className='font-bold mb-2'>Edit Book</h2>
      <div className='mb-4'>
        <label className='block mb-1 font-medium'>Title</label>
        <input
          className='w-full border p-2 rounded'
          {...register("title", { required: true })}
          placeholder='Title'
        />
        {errors.title && (
          <span className='text-red-500'>Title is required</span>
        )}
      </div>
      <div className='mb-4'>
        <label className='block mb-1 font-medium'>Author</label>
        <input
          className='w-full border p-2 rounded'
          {...register("author", { required: true })}
          placeholder='Author'
        />
        {errors.author && (
          <span className='text-red-500'>Author is required</span>
        )}
      </div>
      <div className='mb-4'>
        <label className='block mb-1 font-medium'>Genre</label>
        <select
          className='w-full border p-2 rounded'
          {...register("genre", { required: true })}>
          {genres.map((g) => (
            <option key={g} value={g}>
              {g}
            </option>
          ))}
        </select>
        {errors.genre && (
          <span className='text-red-500'>Genre is required</span>
        )}
      </div>
      <div className='mb-4'>
        <label className='block mb-1 font-medium'>ISBN</label>
        <input
          className='w-full border p-2 rounded'
          {...register("isbn", { required: true })}
          placeholder='ISBN'
        />
        {errors.isbn && <span className='text-red-500'>ISBN is required</span>}
      </div>
      <div className='mb-4'>
        <label className='block mb-1 font-medium'>Description</label>
        <textarea
          className='w-full border p-2 rounded'
          {...register("description")}
          placeholder='Description'
        />
      </div>
      <div className='mb-4'>
        <label className='block mb-1 font-medium'>Copies</label>
        <input
          className='w-full border p-2 rounded'
          type='number'
          min={0}
          {...register("copies", { required: true, min: 0 })}
          placeholder='Copies'
        />
        {errors.copies && (
          <span className='text-red-500'>Copies is required</span>
        )}
      </div>
      <button
        type='submit'
        className='bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded cursor-pointer'
        disabled={isLoading}>
        {isLoading ? "Saving..." : "Save"}
      </button>
      <button
        type='button'
        className='ml-2 px-4 py-2 rounded  bg-slate-500 hover:bg-slate-600 text-slate-100 cursor-pointer'
        onClick={onClose}>
        Cancel
      </button>
    </form>
  );
}
