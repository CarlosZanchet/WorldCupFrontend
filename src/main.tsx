import { ToastProvider } from "coheza-ui";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { App } from "./App";
import { LoginProvider } from "./context/LoginContext";
import { RequestProvider } from "./context/RequestContext";
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ToastProvider>
      <LoginProvider>
        <RequestProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </RequestProvider>
      </LoginProvider>
    </ToastProvider>
  </React.StrictMode>
);
