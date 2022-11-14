"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const coheza_ui_1 = require("coheza-ui");
const react_1 = require("react");
const client_1 = require("react-dom/client");
const react_router_dom_1 = require("react-router-dom");
const App_1 = require("./App");
const LoginContext_1 = require("./context/LoginContext");
const RequestContext_1 = require("./context/RequestContext");
client_1.default.createRoot(document.getElementById("root")).render((0, jsx_runtime_1.jsx)(react_1.default.StrictMode, { children: (0, jsx_runtime_1.jsx)(coheza_ui_1.ToastProvider, { children: (0, jsx_runtime_1.jsx)(LoginContext_1.LoginProvider, { children: (0, jsx_runtime_1.jsx)(RequestContext_1.RequestProvider, { children: (0, jsx_runtime_1.jsx)(react_router_dom_1.BrowserRouter, { children: (0, jsx_runtime_1.jsx)(App_1.App, {}) }) }) }) }) }));
//# sourceMappingURL=main.js.map