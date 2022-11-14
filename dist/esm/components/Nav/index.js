import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { NavLink } from "./NavLink";
import { FaUserFriends } from "react-icons/fa";
import { GiSoccerBall } from "react-icons/gi";
import { MdDashboard, MdOutlineLogout } from "react-icons/md";
import { Avatar, Box } from "coheza-ui";
import Logo from "../../assets/logo-branca.png";
import { useLogin } from "../../context/LoginContext";
import { useNavigate } from "react-router-dom";
import { getUsuarioLogadoCookie } from "../../utils/CookiesUtil";
import { SolicitacaoCard } from "../SolicitacaoInscricao/SolicitacaoCard";
import { useEffect } from "react";
import { useRequests } from "../../context/RequestContext";
export function Nav() {
    const { logout } = useLogin();
    const navigate = useNavigate();
    const userLogado = getUsuarioLogadoCookie();
    const { findRequest, requests } = useRequests();
    function handleLogout() {
        logout();
        navigate("/login");
    }
    useEffect(() => {
        findRequest();
    }, []);
    return (_jsx("nav", { className: "w-full max-w-[250px] h-screen", children: _jsxs(Box, { className: "h-[97vh] w-full mt-4 flex flex-col gap-10 items-center", children: [_jsx("div", { className: "", children: _jsx("img", { src: Logo, width: 150, alt: "Logo" }) }), _jsxs("div", { className: "flex flex-row gap-2 ring-1 ring-default-700 ring-opacity-25 rounded-3xl p-3", children: [_jsx(Avatar, { size: "xs" }), _jsxs("div", { className: "flex flex-col", children: [_jsxs("span", { className: "text-default-100 text-sm", children: [_jsx("strong", { children: "Ol\u00E1, " }), userLogado.name] }), _jsx("span", { className: "text-default-100 text-[0.7rem]", children: "carlos.zanchet" })] })] }), _jsxs("div", { className: "flex  w-full flex-col justify-between h-full", children: [_jsxs("div", { className: "flex flex-col gap-2", children: [_jsx(NavLink, { path: "/dashboard", icon: _jsx(MdDashboard, {}), children: "Dashboard" }), _jsx(NavLink, { path: "/bolao", icon: _jsx(FaUserFriends, {}), children: "Bol\u00E3o" }), _jsx(NavLink, { path: "/games", icon: _jsx(GiSoccerBall, {}), children: "Jogos" })] }), _jsx("div", { className: "h-96 overflow-auto flex flex-col gap-2 p-1", children: requests.map((req) => {
                                return _jsx(SolicitacaoCard, { request: req });
                            }) }), _jsxs("button", { onClick: handleLogout, className: "text-[#c54b48] flex flex-row items-center justify-center transition-colors gap-3 hover:bg-opacity-10 px-6 py-3 rounded hover:bg-[#c54b48] ", children: [_jsx(MdOutlineLogout, {}), "Sair"] })] })] }) }));
}
//# sourceMappingURL=index.js.map