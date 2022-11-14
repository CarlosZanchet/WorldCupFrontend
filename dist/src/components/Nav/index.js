"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Nav = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const NavLink_1 = require("./NavLink");
const fa_1 = require("react-icons/fa");
const gi_1 = require("react-icons/gi");
const md_1 = require("react-icons/md");
const coheza_ui_1 = require("coheza-ui");
const logo_branca_png_1 = __importDefault(require("../../assets/logo-branca.png"));
const LoginContext_1 = require("../../context/LoginContext");
const react_router_dom_1 = require("react-router-dom");
const CookiesUtil_1 = require("../../utils/CookiesUtil");
const SolicitacaoCard_1 = require("../SolicitacaoInscricao/SolicitacaoCard");
const react_1 = require("react");
const RequestContext_1 = require("../../context/RequestContext");
function Nav() {
    const { logout } = (0, LoginContext_1.useLogin)();
    const navigate = (0, react_router_dom_1.useNavigate)();
    const userLogado = (0, CookiesUtil_1.getUsuarioLogadoCookie)();
    const { findRequest, requests } = (0, RequestContext_1.useRequests)();
    function handleLogout() {
        logout();
        navigate("/login");
    }
    (0, react_1.useEffect)(() => {
        findRequest();
    }, []);
    return ((0, jsx_runtime_1.jsx)("nav", Object.assign({ className: "w-full max-w-[250px] h-screen" }, { children: (0, jsx_runtime_1.jsxs)(coheza_ui_1.Box, Object.assign({ className: "h-[97vh] w-full mt-4 flex flex-col gap-10 items-center" }, { children: [(0, jsx_runtime_1.jsx)("div", Object.assign({ className: "" }, { children: (0, jsx_runtime_1.jsx)("img", { src: logo_branca_png_1.default, width: 150, alt: "Logo" }) })), (0, jsx_runtime_1.jsxs)("div", Object.assign({ className: "flex flex-row gap-2 ring-1 ring-default-700 ring-opacity-25 rounded-3xl p-3" }, { children: [(0, jsx_runtime_1.jsx)(coheza_ui_1.Avatar, { size: "xs" }), (0, jsx_runtime_1.jsxs)("div", Object.assign({ className: "flex flex-col" }, { children: [(0, jsx_runtime_1.jsxs)("span", Object.assign({ className: "text-default-100 text-sm" }, { children: [(0, jsx_runtime_1.jsx)("strong", { children: "Ol\u00E1, " }), userLogado.name] })), (0, jsx_runtime_1.jsx)("span", Object.assign({ className: "text-default-100 text-[0.7rem]" }, { children: "carlos.zanchet" }))] }))] })), (0, jsx_runtime_1.jsxs)("div", Object.assign({ className: "flex  w-full flex-col justify-between h-full" }, { children: [(0, jsx_runtime_1.jsxs)("div", Object.assign({ className: "flex flex-col gap-2" }, { children: [(0, jsx_runtime_1.jsx)(NavLink_1.NavLink, Object.assign({ path: "/dashboard", icon: (0, jsx_runtime_1.jsx)(md_1.MdDashboard, {}) }, { children: "Dashboard" })), (0, jsx_runtime_1.jsx)(NavLink_1.NavLink, Object.assign({ path: "/bolao", icon: (0, jsx_runtime_1.jsx)(fa_1.FaUserFriends, {}) }, { children: "Bol\u00E3o" })), (0, jsx_runtime_1.jsx)(NavLink_1.NavLink, Object.assign({ path: "/games", icon: (0, jsx_runtime_1.jsx)(gi_1.GiSoccerBall, {}) }, { children: "Jogos" }))] })), (0, jsx_runtime_1.jsx)("div", Object.assign({ className: "h-96 overflow-auto flex flex-col gap-2 p-1" }, { children: requests.map((req) => {
                                return (0, jsx_runtime_1.jsx)(SolicitacaoCard_1.SolicitacaoCard, { request: req });
                            }) })), (0, jsx_runtime_1.jsxs)("button", Object.assign({ onClick: handleLogout, className: "text-[#c54b48] flex flex-row items-center justify-center transition-colors gap-3 hover:bg-opacity-10 px-6 py-3 rounded hover:bg-[#c54b48] " }, { children: [(0, jsx_runtime_1.jsx)(md_1.MdOutlineLogout, {}), "Sair"] }))] }))] })) })));
}
exports.Nav = Nav;
//# sourceMappingURL=index.js.map