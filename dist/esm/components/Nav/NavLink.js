import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { NavLink as RouterLink } from "react-router-dom";
export function NavLink({ icon, children, path, className }) {
    return (_jsx("div", { children: _jsx(RouterLink, { className: (navigationData) => navigationData.isActive ?
                `text-white bg-primary-900 rounded-md flex transition-colors bg-opacity-40 hover:bg-opacity-60 ${!!className && className}` :
                `text-default-400  flex rounded-md transition-colors hover:bg-default-900 hover:bg-opacity-40 ${!!className && className}`, to: path, children: _jsxs("div", { className: "flex flex-row text-xs items-center gap-5 px-6 py-3", children: [_jsx("span", { className: "text-xl flex items-center", children: icon }), children] }) }) }));
}
//# sourceMappingURL=NavLink.js.map