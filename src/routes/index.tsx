import { createBrowserRouter } from "react-router";
import App from "../App";
import demo from "../component/demo";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
  },
  {
    path: "/demo",
    Component: demo,
  },
]);
