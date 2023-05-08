import React, { useEffect, useState } from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import Layout from "layouts";
import LoadingScreen from "components/loading-screen";
import FiltersLabels from "pages/filters-labels";
import Inbox from "pages/inbox";
import Projects from "pages/projects";
import Today from "pages/today";
import Upcoming from "pages/upcoming";
import { useStore } from "stores";

function App() {
  const getSidebarWidth = useStore((state) => state.getSidebarWidth);
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    getSidebarWidth().then(() => setLoaded(true));
  }, []);

  if (!loaded) {
    return <LoadingScreen />;
  }

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
