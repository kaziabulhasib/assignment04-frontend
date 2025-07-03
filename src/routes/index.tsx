import { createBrowserRouter } from "react-router";
import App from "../App";
import Books from "../components/Books";
import AddBooks from "../components/AddBooks";
import BorrowSummary from "../components/BorrowSummary";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      {
        path: "books",
        Component: Books,
      },
      {
        path: "add-book",
        Component: AddBooks,
      },
      {
        path: "borrow-summary",
        Component: BorrowSummary,
      },
    ],
  },
]);
