import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "layouts";
import FiltersLabels from "pages/filters-labels";
import Auth from "pages/auth";
import Home from "pages/home";
import Inbox from "pages/inbox";
import Projects from "pages/projects";
import Today from "pages/today";
import Upcoming from "pages/upcoming";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      children: [
        { path: "", element: <Home /> },
        { path: "auth/:action", element: <Auth /> },
      ],
    },
    {
      path: "/app",
      element: <Layout />,
      children: [
        { path: "project/:id", element: <Inbox /> },
        { path: "projects/:status", element: <Projects /> },
        { path: "today", element: <Today /> },
        { path: "upcoming", element: <Upcoming /> },
        { path: "filters-labels", element: <FiltersLabels /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
