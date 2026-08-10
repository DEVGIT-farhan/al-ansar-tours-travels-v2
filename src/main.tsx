import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { Toaster } from "react-hot-toast";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { WebsiteSettingsProvider } from "@/context/WebsiteSettingsProvider";
import App from "./App";

import "./styles/globals.css";
import "yet-another-react-lightbox/styles.css";

const queryClient = new QueryClient();
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <WebsiteSettingsProvider>
          <BrowserRouter basename={import.meta.env.BASE_URL}>
            <App />

            <Toaster
              position="top-right"
              toastOptions={{
                duration: 3000,
              }}
            />
          </BrowserRouter>
        </WebsiteSettingsProvider>
      </QueryClientProvider>
    </HelmetProvider>
  </React.StrictMode>,
);
