import { useGetBooksQuery } from "../redux/features/book/bookApi";
import AddBookForm from "./AddBookForm";

function AddBooks() {
  const { refetch } = useGetBooksQuery({ page: 1, limit: 10 });
  return (
    <div>
      {/* <h1>AddBooks</h1> */}
      <AddBookForm refetchBooks={refetch} />
    </div>
  );
}

export default AddBooks;
