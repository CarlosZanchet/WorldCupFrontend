"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoutesLayout = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_router_dom_1 = require("react-router-dom");
const Bolao_1 = require("../components/Bolao");
const create_1 = require("../components/Bolao/create");
const CreateAccount_1 = require("../components/CreateAccount");
const Dashboard_1 = require("../components/Dashboard");
const Jogos_1 = require("../components/Jogos");
const Layout_1 = require("../components/Layout");
const Login_1 = require("../components/Login");
function RoutesLayout() {
    return ((0, jsx_runtime_1.jsxs)(react_router_dom_1.Routes, { children: [(0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: "/login", element: (0, jsx_runtime_1.jsx)(Login_1.Login, {}) }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: "/create-account", element: (0, jsx_runtime_1.jsx)(CreateAccount_1.CreateAccount, {}) }), (0, jsx_runtime_1.jsxs)(react_router_dom_1.Route, { path: "/", element: (0, jsx_runtime_1.jsx)(Layout_1.Layout, {}), children: [(0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: "/dashboard", element: (0, jsx_runtime_1.jsx)(Dashboard_1.Dashboard, {}) }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: "/bolao", element: (0, jsx_runtime_1.jsx)(Bolao_1.ListBolao, {}) }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: "/create-bolao", element: (0, jsx_runtime_1.jsx)(create_1.CreateBolao, {}) }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: "/games", element: (0, jsx_runtime_1.jsx)(Jogos_1.Jogos, {}) })] })] }));
}
exports.RoutesLayout = RoutesLayout;
//# sourceMappingURL=Routes.js.map