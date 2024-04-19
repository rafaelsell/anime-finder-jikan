import { createBrowserRouter } from "react-router-dom";
import { AnimeByIdPage, HomePage } from "../pages";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "anime/:id",
    element: <AnimeByIdPage />,
  },
]);
