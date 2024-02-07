import React from "react";
import { createRoot } from "react-dom/client"; // Correct import for React 18+
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import App from "./App";
import theme from "./theme";

// Use the createRoot API from react-dom/client
const container = document.getElementById("root");
const root = createRoot(container); // Create a root instance with the container.

// Render your app wrapped with the necessary providers and themes
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);
