import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { FaQuestion, FaCheck } from "react-icons/fa";
import { Avatar, Button, Span, Text } from "coheza-ui";
import { dateFormat } from "../../utils/FormatUtils";
import { getUsuarioLogadoCookie } from "../../utils/CookiesUtil";
export function ItemBolao({ bolao, signIn, requestSignIn }) {
    function userRegistred() {
        const idUser = getUsuarioLogadoCookie();
        const userFind = bolao.users.find((user) => user.id === idUser.id);
        return userFind ? false : true;
    }
    const userLogged = getUsuarioLogadoCookie();
    return (_jsxs("div", { className: "flex justify-between items-center bg-default-800 px-4 py-2 w-full border-default-700 border-b-[1px] border-opacity-40 ", children: [_jsxs("div", { className: "flex gap-2 justify-between", children: [bolao.url_image ? (_jsx(Avatar, { urlImage: bolao.url_image })) : (_jsx(Avatar, { label: bolao.name })), _jsxs("div", { className: "flex gap-10", children: [_jsxs("div", { className: "flex flex-col", children: [_jsxs("div", { className: "flex gap-2 items-center", children: [_jsx(Text, { children: bolao.name }), _jsx(Span, { size: "xs", type: bolao.type === "private" ? "danger" : "success", children: bolao.type === "private" ? "Privado" : "Público" })] }), _jsxs(Text, { size: "xs", children: ["Criado em: ", dateFormat(bolao.created_at)] })] }), _jsxs("div", { className: "flex flex-col", children: [_jsx(Text, { children: "Administrador" }), _jsx(Text, { size: "xs", children: bolao.user_create?.name })] })] }), _jsxs("div", { className: "flex flex-col", children: [_jsx(Text, { children: "Participantes" }), _jsx(Text, { size: "xs", children: bolao.users.length })] })] }), userLogged.id === bolao.user_create.id ? (_jsx(Span, { icon: true, type: "success", children: "Administrador" })) : (_jsx(_Fragment, { children: userRegistred() ? (_jsx(_Fragment, { children: bolao.type === "private" ? (_jsx(Button, { leftIcon: _jsx(FaQuestion, {}), size: "xs", variant: "text", color: "secondary", onClick: () => requestSignIn(bolao), children: "Solicitar Entrada" })) : (_jsx(Button, { onClick: () => signIn(bolao), leftIcon: _jsx(FaCheck, {}), size: "xs", variant: "text", color: "primary", children: "Entrar" })) })) : (_jsx(Span, { icon: true, type: "success", children: "J\u00E1 Inscrito" })) }))] }));
}
//# sourceMappingURL=ItemBolao.js.map