import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import CssBaseline from "@mui/material/CssBaseline";
import { HashRouter  } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <CssBaseline />
    <HashRouter >
      <ScrollToTop />
      <App />
    </HashRouter >
  </React.StrictMode>,
);
