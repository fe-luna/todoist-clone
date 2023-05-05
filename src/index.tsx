import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraBaseProvider } from "@chakra-ui/react";
import { todoistTheme } from "styles/chakra-ui";
import "styles/index.scss";
import App from "./App";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <ChakraBaseProvider theme={todoistTheme}>
      <App />
    </ChakraBaseProvider>
  </React.StrictMode>
);
