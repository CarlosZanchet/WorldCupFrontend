"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NavLink = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_router_dom_1 = require("react-router-dom");
function NavLink({ icon, children, path, className }) {
    return ((0, jsx_runtime_1.jsx)("div", { children: (0, jsx_runtime_1.jsx)(react_router_dom_1.NavLink, { className: (navigationData) => navigationData.isActive ?
                `text-white bg-primary-900 rounded-md flex transition-colors bg-opacity-40 hover:bg-opacity-60 ${!!className && className}` :
                `text-default-400  flex rounded-md transition-colors hover:bg-default-900 hover:bg-opacity-40 ${!!className && className}`, to: path, children: (0, jsx_runtime_1.jsxs)("div", { className: "flex flex-row text-xs items-center gap-5 px-6 py-3", children: [(0, jsx_runtime_1.jsx)("span", { className: "text-xl flex items-center", children: icon }), children] }) }) }));
}
exports.NavLink = NavLink;
//# sourceMappingURL=NavLink.js.map