import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Box } from "coheza-ui";
import { Outlet } from "react-router-dom";
import { Nav } from "../Nav";
export function Layout() {
    return (_jsx("div", { className: "w-full justify-center bg-default-900 items-center flex flex-col", children: _jsxs("div", { className: "w-full max-w-7xl flex bg-default-900 gap-4", children: [_jsx(Nav, {}), _jsx(Box, { className: "w-full mt-4", children: _jsx(Outlet, {}) })] }) }));
}
//# sourceMappingURL=index.js.map