import { createBrowserRouter } from "react-router-dom";
import { AnimeByIdPage, HomePage, AnimeSearchPage } from "../pages";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "anime/:id",
    element: <AnimeByIdPage />,
  },{
    path: "search/:q",
    element: <AnimeSearchPage />,
  },
]);
