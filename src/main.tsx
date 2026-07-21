import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { Toaster } from "react-hot-toast";

import App from "./App";

import "./styles/globals.css";
import "yet-another-react-lightbox/styles.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <App />

        <Toaster
          position="top-right"
          toastOptions={{
            duration: 3000,
          }}
        />
      </BrowserRouter>
    </HelmetProvider>
  </React.StrictMode>
);