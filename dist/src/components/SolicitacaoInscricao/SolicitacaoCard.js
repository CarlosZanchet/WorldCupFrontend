"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SolicitacaoCard = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const coheza_ui_1 = require("coheza-ui");
const RequestContext_1 = require("../../context/RequestContext");
const RequestService_1 = require("../../services/RequestService");
function SolicitacaoCard({ request }) {
    const { showNotification } = (0, coheza_ui_1.useToast)();
    const { removeRequest } = (0, RequestContext_1.useRequests)();
    function handleAceitar() {
        (0, RequestService_1.acceptRequest)(request.id).then(() => {
            showNotification('success', `${request.user_request.name} incluso no bolão ${request.bolao.name}`, 'Sucesso!');
            removeRequest(request.id);
        }).catch(() => {
            showNotification('danger', `Houve um erro ao negar a solicitação`);
        });
    }
    function handleNegar() {
        (0, RequestService_1.denyRequest)(request.id).then(() => {
            showNotification('success', `Solicitação de ${request.user_request.name} negada.`);
            removeRequest(request.id);
        }).catch(() => {
            showNotification('danger', `Houve um erro ao aceitar a solicitação`);
        });
    }
    return ((0, jsx_runtime_1.jsxs)("div", Object.assign({ className: "flex flex-col gap-2 ring-1 ring-secondary-600 ring-opacity-25 rounded-xl px-2 pb-2" }, { children: [(0, jsx_runtime_1.jsx)("span", Object.assign({ className: "w-full text-center text-secondary-600 text-xxs" }, { children: "Nova Solicita\u00E7\u00E3o" })), (0, jsx_runtime_1.jsxs)("div", Object.assign({ className: "flex items-center gap-2" }, { children: [request.bolao.url_image ? (0, jsx_runtime_1.jsx)(coheza_ui_1.Avatar, { size: "xs", urlImage: request.bolao.url_image }) : (0, jsx_runtime_1.jsx)(coheza_ui_1.Avatar, { size: "xs", label: request.bolao.name }), (0, jsx_runtime_1.jsxs)("div", Object.assign({ className: "flex flex-col" }, { children: [(0, jsx_runtime_1.jsx)("span", Object.assign({ className: "text-default-100 text-xs" }, { children: request.user_request.name })), (0, jsx_runtime_1.jsx)("strong", Object.assign({ className: "text-default-100 text-xs" }, { children: request.bolao.name }))] }))] })), (0, jsx_runtime_1.jsxs)("div", Object.assign({ className: "flex gap-2" }, { children: [(0, jsx_runtime_1.jsx)(coheza_ui_1.Button, Object.assign({ onClick: handleAceitar, size: "xxs", fullWidth: true, color: "primary" }, { children: "Aceitar" })), (0, jsx_runtime_1.jsx)(coheza_ui_1.Button, Object.assign({ onClick: handleNegar, size: "xxs", fullWidth: true, color: "secondary" }, { children: "Recusar" }))] }))] })));
}
exports.SolicitacaoCard = SolicitacaoCard;
//# sourceMappingURL=SolicitacaoCard.js.map