import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import Layout from "./layouts";
import FiltersLabels from "./pages/filters-labels";
import Inbox from "./pages/inbox";
import Today from "./pages/today";
import Upcoming from "./pages/upcoming";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Navigate to="/app/today" replace />,
    },
    {
      path: "/app",
      element: <Layout />,
      children: [
        { path: "project/:id", element: <Inbox /> },
        { path: "today", element: <Today /> },
        { path: "upcoming", element: <Upcoming /> },
        { path: "filters-labels", element: <FiltersLabels /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
