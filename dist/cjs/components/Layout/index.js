"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Layout = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const coheza_ui_1 = require("coheza-ui");
const react_router_dom_1 = require("react-router-dom");
const Nav_1 = require("../Nav");
function Layout() {
    return ((0, jsx_runtime_1.jsx)("div", { className: "w-full justify-center bg-default-900 items-center flex flex-col", children: (0, jsx_runtime_1.jsxs)("div", { className: "w-full max-w-7xl flex bg-default-900 gap-4", children: [(0, jsx_runtime_1.jsx)(Nav_1.Nav, {}), (0, jsx_runtime_1.jsx)(coheza_ui_1.Box, { className: "w-full mt-4", children: (0, jsx_runtime_1.jsx)(react_router_dom_1.Outlet, {}) })] }) }));
}
exports.Layout = Layout;
//# sourceMappingURL=index.js.map