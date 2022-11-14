import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Route, Routes } from "react-router-dom";
import { ListBolao } from "../components/Bolao";
import { CreateBolao } from "../components/Bolao/create";
import { CreateAccount } from "../components/CreateAccount";
import { Dashboard } from "../components/Dashboard";
import { Jogos } from "../components/Jogos";
import { Layout } from "../components/Layout";
import { Login } from "../components/Login";
export function RoutesLayout() {
    return (_jsxs(Routes, { children: [_jsx(Route, { path: "/login", element: _jsx(Login, {}) }), _jsx(Route, { path: "/create-account", element: _jsx(CreateAccount, {}) }), _jsxs(Route, { path: "/", element: _jsx(Layout, {}), children: [_jsx(Route, { path: "/dashboard", element: _jsx(Dashboard, {}) }), _jsx(Route, { path: "/bolao", element: _jsx(ListBolao, {}) }), _jsx(Route, { path: "/create-bolao", element: _jsx(CreateBolao, {}) }), _jsx(Route, { path: "/games", element: _jsx(Jogos, {}) })] })] }));
}
//# sourceMappingURL=Routes.js.map