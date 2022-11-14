import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Avatar, Button, useToast } from "coheza-ui";
import { useRequests } from "../../context/RequestContext";
import { acceptRequest, denyRequest } from "../../services/RequestService";
export function SolicitacaoCard({ request }) {
    const { showNotification } = useToast();
    const { removeRequest } = useRequests();
    function handleAceitar() {
        acceptRequest(request.id).then(() => {
            showNotification('success', `${request.user_request.name} incluso no bolão ${request.bolao.name}`, 'Sucesso!');
            removeRequest(request.id);
        }).catch(() => {
            showNotification('danger', `Houve um erro ao negar a solicitação`);
        });
    }
    function handleNegar() {
        denyRequest(request.id).then(() => {
            showNotification('success', `Solicitação de ${request.user_request.name} negada.`);
            removeRequest(request.id);
        }).catch(() => {
            showNotification('danger', `Houve um erro ao aceitar a solicitação`);
        });
    }
    return (_jsxs("div", { className: "flex flex-col gap-2 ring-1 ring-secondary-600 ring-opacity-25 rounded-xl px-2 pb-2", children: [_jsx("span", { className: "w-full text-center text-secondary-600 text-xxs", children: "Nova Solicita\u00E7\u00E3o" }), _jsxs("div", { className: "flex items-center gap-2", children: [request.bolao.url_image ? _jsx(Avatar, { size: "xs", urlImage: request.bolao.url_image }) : _jsx(Avatar, { size: "xs", label: request.bolao.name }), _jsxs("div", { className: "flex flex-col", children: [_jsx("span", { className: "text-default-100 text-xs", children: request.user_request.name }), _jsx("strong", { className: "text-default-100 text-xs", children: request.bolao.name })] })] }), _jsxs("div", { className: "flex gap-2", children: [_jsx(Button, { onClick: handleAceitar, size: "xxs", fullWidth: true, color: "primary", children: "Aceitar" }), _jsx(Button, { onClick: handleNegar, size: "xxs", fullWidth: true, color: "secondary", children: "Recusar" })] })] }));
}
//# sourceMappingURL=SolicitacaoCard.js.map