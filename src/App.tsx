import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import createCache from "@emotion/cache";
import { CacheProvider } from "@emotion/react";
import { ChakraBaseProvider } from "@chakra-ui/react";
import { todoistTheme } from "styles/chakra-ui";
import Layout from "layouts";
import FiltersLabels from "pages/filters-labels";
import Auth from "pages/auth";
import Home from "pages/home";
import Project from "pages/project";
import Projects from "pages/projects";
import Today from "pages/today";
import Upcoming from "pages/upcoming";

// prepending the chakra-ui styles, then CSS Modules can overwrite the CSS-in-JS
const emotionCache = createCache({
  key: "emotion-cache",
  prepend: true,
});

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
        { path: "project/:projectId", element: <Project /> },
        { path: "projects/:status", element: <Projects /> },
        { path: "today", element: <Today /> },
        { path: "upcoming", element: <Upcoming /> },
        { path: "filters-labels", element: <FiltersLabels /> },
      ],
    },
  ]);

  return (
    <CacheProvider value={emotionCache}>
      <ChakraBaseProvider theme={todoistTheme}>
        <RouterProvider router={router} />
      </ChakraBaseProvider>
    </CacheProvider>
  );
}

export default App;
