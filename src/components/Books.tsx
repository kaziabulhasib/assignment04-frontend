import BookTable from "./BookTable";
import { useGetBorrowSummaryQuery } from "../redux/features/borrow/borrowApi";
// import BorrowSummary from "./BorrowSummary";

function Books() {
  // Get refetch for borrow summary
  const { refetch } = useGetBorrowSummaryQuery(undefined);
  return (
    <div>
      <BookTable onBorrowed={refetch} />
      {/* <BorrowSummary /> */}
    </div>
  );
}

export default Books;
