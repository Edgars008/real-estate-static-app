import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import CssBaseline from "@mui/material/CssBaseline";
import { BrowserRouter } from "react-router-dom"; // ← import BrowserRouter
import ScrollToTop from "./components/ScrollToTop";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <CssBaseline />
    <BrowserRouter>
      {" "}
      {/* ← wrap App with BrowserRouter */}
      <ScrollToTop />
      <App />
    </BrowserRouter>
  </React.StrictMode>,
);
