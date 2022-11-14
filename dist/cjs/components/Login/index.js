"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Login = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const coheza_ui_1 = require("coheza-ui");
const react_1 = require("react");
const fa_1 = require("react-icons/fa");
const logo2_png_1 = require("../../assets/logo2.png");
const react_router_dom_1 = require("react-router-dom");
const AuthService_1 = require("../../services/AuthService");
const CookiesUtil_1 = require("../../utils/CookiesUtil");
function Login() {
    const { showNotification } = (0, coheza_ui_1.useToast)();
    const navigate = (0, react_router_dom_1.useNavigate)();
    const [username, setUsername] = (0, react_1.useState)('');
    const [password, setPassword] = (0, react_1.useState)('');
    (0, react_1.useEffect)(() => {
        const token = (0, CookiesUtil_1.getTokenCookie)();
        if (token) {
            navigate('/dashboard');
        }
    }, []);
    function handleLogin() {
        (0, AuthService_1.authLogin)(username, password).then((response) => {
            (0, CookiesUtil_1.setTokenCookie)(response.data.token);
            (0, CookiesUtil_1.setUsuarioLogadoCookie)(response.data.user);
            navigate('/dashboard');
        }).catch((e) => {
            if (e.response.status === 400) {
                showNotification('danger', 'Usuário ou senha incorretos.');
            }
            else {
                showNotification('danger', 'Erro interno.');
            }
        });
    }
    return ((0, jsx_runtime_1.jsx)("div", { className: "w-full h-screen bg-default-900 flex items-center justify-center", children: (0, jsx_runtime_1.jsxs)(coheza_ui_1.Box, { className: "w-full flex flex-col items-center  p-8 max-w-xs", children: [(0, jsx_runtime_1.jsx)("img", { width: 150, src: logo2_png_1.default, alt: "cuplogo" }), (0, jsx_runtime_1.jsxs)("form", { className: "flex gap-6 flex-col mt-12", children: [(0, jsx_runtime_1.jsxs)("div", { className: "flex gap-5 flex-col", children: [(0, jsx_runtime_1.jsx)(coheza_ui_1.TextField, { onChange: (event) => setUsername(event.target.value), icon: (0, jsx_runtime_1.jsx)(fa_1.FaUser, {}), size: "lg", placeholder: "Usu\u00E1rio" }), (0, jsx_runtime_1.jsx)(coheza_ui_1.TextField, { onChange: (event) => setPassword(event.target.value), icon: (0, jsx_runtime_1.jsx)(fa_1.FaLock, {}), size: "lg", placeholder: "Senha", type: "password" })] }), (0, jsx_runtime_1.jsx)(coheza_ui_1.Button, { onClick: handleLogin, color: "primary", size: "lg", leftIcon: (0, jsx_runtime_1.jsx)(fa_1.FaCheck, {}), children: "Entrar" }), (0, jsx_runtime_1.jsxs)("div", { className: "flex flex-col mt-6 items-center justify-center", children: [(0, jsx_runtime_1.jsx)(coheza_ui_1.Text, { size: "xs", children: "N\u00E3o possui conta?" }), " ", (0, jsx_runtime_1.jsx)(coheza_ui_1.Button, { onClick: () => navigate('/create-account'), size: "sm", variant: "text", color: "primary", children: "Crie uma agora" })] })] })] }) }));
}
exports.Login = Login;
//# sourceMappingURL=index.js.map