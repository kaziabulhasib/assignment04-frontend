import React from "react";
import { useForm } from "react-hook-form";
import { useBorrowBookMutation } from "../redux/features/book/bookApi";

export default function BorrowBookForm({
  book,
  onClose,
}: {
  book: any;
  onClose: () => void;
}) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [borrowBook, { isLoading }] = useBorrowBookMutation();
  const [errorMsg, setErrorMsg] = React.useState<string | null>(null);
  const [success, setSuccess] = React.useState<string | null>(null);

  const onSubmit = async (data: any) => {
    setErrorMsg(null);
    setSuccess(null);
    try {
      await borrowBook({
        book: book._id,
        quantity: Number(data.quantity),
        dueDate: data.dueDate,
      }).unwrap();
      setSuccess("Book borrowed successfully!");
      onClose();
    } catch (err: any) {
      setErrorMsg(err?.data?.message || "Failed to borrow book.");
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className='w-full max-w-md md:max-w-lg  mx-auto p-6 bg-white rounded shadow'>
      <h2 className='font-bold mb-2'>Borrow Book</h2>
      {success && <div className='mb-2 text-green-600'>{success}</div>}
      {errorMsg && <div className='mb-2 text-red-600'>{errorMsg}</div>}
      <div className='mb-2'>
        <label className='block mb-1 font-medium'>Quantity</label>
        <input
          type='number'
          min={1}
          max={book.copies}
          defaultValue={1}
          className='w-full border p-2 rounded'
          {...register("quantity", {
            required: "Quantity is required",
            min: { value: 1, message: "At least 1" },
            max: { value: book.copies, message: `Max ${book.copies}` },
          })}
        />
        {errors.quantity && (
          <span className='text-red-500 text-sm'>
            {errors.quantity.message}
          </span>
        )}
      </div>
      <div className='mb-2'>
        <label className='block mb-1 font-medium'>Due Date</label>
        <input
          type='date'
          className='w-full border p-2 rounded'
          {...register("dueDate", { required: "Due date is required" })}
        />
        {errors.dueDate && (
          <span className='text-red-500 text-sm'>{errors.dueDate.message}</span>
        )}
      </div>
      <button
        type='submit'
        className='bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded cursor-pointer'
        disabled={isLoading}>
        {isLoading ? "Borrowing..." : "Borrow"}
      </button>
      <button
        type='button'
        className='ml-2 px-4 py-2 rounded bg-slate-500 hover:bg-slate-600 text-slate-100 cursor-pointer'
        onClick={onClose}>
        Cancel
      </button>
    </form>
  );
}
