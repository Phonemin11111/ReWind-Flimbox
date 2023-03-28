import { MantineProvider } from "@mantine/core";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { StateContextProvider } from "./context/StateContext";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <MantineProvider withGlobalStyles withNormalizeCSS theme={{
        colorScheme: 'dark'
      }}>
      <StateContextProvider>
        <App />
      </StateContextProvider>
    </MantineProvider>
  </BrowserRouter>
);
