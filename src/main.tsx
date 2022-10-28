import { ToastProvider } from "coheza-ui";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { App } from "./App";
import { LoginProvider } from "./context/LoginContext";
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
      <ToastProvider>
        <LoginProvider>
          <BrowserRouter>
              <App />
          </BrowserRouter>
        </LoginProvider>
      </ToastProvider>
  </React.StrictMode>
);
