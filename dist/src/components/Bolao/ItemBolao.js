"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemBolao = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const fa_1 = require("react-icons/fa");
const coheza_ui_1 = require("coheza-ui");
const FormatUtils_1 = require("../../utils/FormatUtils");
const CookiesUtil_1 = require("../../utils/CookiesUtil");
function ItemBolao({ bolao, signIn, requestSignIn }) {
    var _a;
    function userRegistred() {
        const idUser = (0, CookiesUtil_1.getUsuarioLogadoCookie)();
        const userFind = bolao.users.find((user) => user.id === idUser.id);
        return userFind ? false : true;
    }
    const userLogged = (0, CookiesUtil_1.getUsuarioLogadoCookie)();
    return ((0, jsx_runtime_1.jsxs)("div", Object.assign({ className: "flex justify-between items-center bg-default-800 px-4 py-2 w-full border-default-700 border-b-[1px] border-opacity-40 " }, { children: [(0, jsx_runtime_1.jsxs)("div", Object.assign({ className: "flex gap-2 justify-between" }, { children: [bolao.url_image ? ((0, jsx_runtime_1.jsx)(coheza_ui_1.Avatar, { urlImage: bolao.url_image })) : ((0, jsx_runtime_1.jsx)(coheza_ui_1.Avatar, { label: bolao.name })), (0, jsx_runtime_1.jsxs)("div", Object.assign({ className: "flex gap-10" }, { children: [(0, jsx_runtime_1.jsxs)("div", Object.assign({ className: "flex flex-col" }, { children: [(0, jsx_runtime_1.jsxs)("div", Object.assign({ className: "flex gap-2 items-center" }, { children: [(0, jsx_runtime_1.jsx)(coheza_ui_1.Text, { children: bolao.name }), (0, jsx_runtime_1.jsx)(coheza_ui_1.Span, Object.assign({ size: "xs", type: bolao.type === "private" ? "danger" : "success" }, { children: bolao.type === "private" ? "Privado" : "Público" }))] })), (0, jsx_runtime_1.jsxs)(coheza_ui_1.Text, Object.assign({ size: "xs" }, { children: ["Criado em: ", (0, FormatUtils_1.dateFormat)(bolao.created_at)] }))] })), (0, jsx_runtime_1.jsxs)("div", Object.assign({ className: "flex flex-col" }, { children: [(0, jsx_runtime_1.jsx)(coheza_ui_1.Text, { children: "Administrador" }), (0, jsx_runtime_1.jsx)(coheza_ui_1.Text, Object.assign({ size: "xs" }, { children: (_a = bolao.user_create) === null || _a === void 0 ? void 0 : _a.name }))] }))] })), (0, jsx_runtime_1.jsxs)("div", Object.assign({ className: "flex flex-col" }, { children: [(0, jsx_runtime_1.jsx)(coheza_ui_1.Text, { children: "Participantes" }), (0, jsx_runtime_1.jsx)(coheza_ui_1.Text, Object.assign({ size: "xs" }, { children: bolao.users.length }))] }))] })), userLogged.id === bolao.user_create.id ? ((0, jsx_runtime_1.jsx)(coheza_ui_1.Span, Object.assign({ icon: true, type: "success" }, { children: "Administrador" }))) : ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: userRegistred() ? ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: bolao.type === "private" ? ((0, jsx_runtime_1.jsx)(coheza_ui_1.Button, Object.assign({ leftIcon: (0, jsx_runtime_1.jsx)(fa_1.FaQuestion, {}), size: "xs", variant: "text", color: "secondary", onClick: () => requestSignIn(bolao) }, { children: "Solicitar Entrada" }))) : ((0, jsx_runtime_1.jsx)(coheza_ui_1.Button, Object.assign({ onClick: () => signIn(bolao), leftIcon: (0, jsx_runtime_1.jsx)(fa_1.FaCheck, {}), size: "xs", variant: "text", color: "primary" }, { children: "Entrar" }))) })) : ((0, jsx_runtime_1.jsx)(coheza_ui_1.Span, Object.assign({ icon: true, type: "success" }, { children: "J\u00E1 Inscrito" }))) }))] })));
}
exports.ItemBolao = ItemBolao;
//# sourceMappingURL=ItemBolao.js.map