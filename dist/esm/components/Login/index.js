import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Box, Button, Text, TextField, useToast } from "coheza-ui";
import { useEffect, useState } from "react";
import { FaCheck, FaLock, FaUser } from "react-icons/fa";
import logocup from "../../assets/logo2.png";
import { useNavigate } from "react-router-dom";
import { authLogin } from "../../services/AuthService";
import { getTokenCookie, setTokenCookie, setUsuarioLogadoCookie } from "../../utils/CookiesUtil";
export function Login() {
    const { showNotification } = useToast();
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    useEffect(() => {
        const token = getTokenCookie();
        if (token) {
            navigate('/dashboard');
        }
    }, []);
    function handleLogin() {
        authLogin(username, password).then((response) => {
            setTokenCookie(response.data.token);
            setUsuarioLogadoCookie(response.data.user);
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
    return (_jsx("div", { className: "w-full h-screen bg-default-900 flex items-center justify-center", children: _jsxs(Box, { className: "w-full flex flex-col items-center  p-8 max-w-xs", children: [_jsx("img", { width: 150, src: logocup, alt: "cuplogo" }), _jsxs("form", { className: "flex gap-6 flex-col mt-12", children: [_jsxs("div", { className: "flex gap-5 flex-col", children: [_jsx(TextField, { onChange: (event) => setUsername(event.target.value), icon: _jsx(FaUser, {}), size: "lg", placeholder: "Usu\u00E1rio" }), _jsx(TextField, { onChange: (event) => setPassword(event.target.value), icon: _jsx(FaLock, {}), size: "lg", placeholder: "Senha", type: "password" })] }), _jsx(Button, { onClick: handleLogin, color: "primary", size: "lg", leftIcon: _jsx(FaCheck, {}), children: "Entrar" }), _jsxs("div", { className: "flex flex-col mt-6 items-center justify-center", children: [_jsx(Text, { size: "xs", children: "N\u00E3o possui conta?" }), " ", _jsx(Button, { onClick: () => navigate('/create-account'), size: "sm", variant: "text", color: "primary", children: "Crie uma agora" })] })] })] }) }));
}
//# sourceMappingURL=index.js.map