import { jsx as _jsx } from "react/jsx-runtime";
import { ToastProvider } from "coheza-ui";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { App } from "./App";
import { LoginProvider } from "./context/LoginContext";
import { RequestProvider } from "./context/RequestContext";
ReactDOM.createRoot(document.getElementById("root")).render(_jsx(React.StrictMode, { children: _jsx(ToastProvider, { children: _jsx(LoginProvider, { children: _jsx(RequestProvider, { children: _jsx(BrowserRouter, { children: _jsx(App, {}) }) }) }) }) }));
//# sourceMappingURL=main.js.map