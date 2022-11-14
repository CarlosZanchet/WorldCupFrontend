"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListBolao = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const coheza_ui_1 = require("coheza-ui");
const react_1 = require("react");
const hi_1 = require("react-icons/hi");
const react_router_dom_1 = require("react-router-dom");
const BolaoService_1 = require("../../services/BolaoService");
const CookiesUtil_1 = require("../../utils/CookiesUtil");
const ItemBolao_1 = require("./ItemBolao");
function ListBolao() {
    const navigate = (0, react_router_dom_1.useNavigate)();
    const { showNotification } = (0, coheza_ui_1.useToast)();
    const [boloes, setBoloes] = (0, react_1.useState)([]);
    (0, react_1.useEffect)(() => {
        (0, BolaoService_1.getBoloes)().then((response) => {
            setBoloes(response.data);
            console.log(response.data);
        });
    }, []);
    function signIn(bolao) {
        const userLogged = (0, CookiesUtil_1.getUsuarioLogadoCookie)();
        if (userLogged.id && bolao.id) {
            (0, BolaoService_1.signInBolao)(userLogged.id, bolao.id).then(() => {
                showNotification("success", "Inscrição efetuada com sucesso.");
            }).catch((err) => {
                showNotification("danger", err.response.data.message);
            });
        }
    }
    function handleRequestSignIn(bolao) {
        (0, BolaoService_1.requestSignIn)(bolao).then(() => {
            showNotification("success", "Solicitação enviada com sucesso.");
        }).catch((err) => {
            showNotification("danger", err.response.data.message);
        });
    }
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(coheza_ui_1.Heading, { children: "Bol\u00E3o" }), (0, jsx_runtime_1.jsxs)("div", Object.assign({ className: "flex justify-between items-center mt-4" }, { children: [(0, jsx_runtime_1.jsxs)("div", Object.assign({ className: "flex gap-5 items-center" }, { children: [(0, jsx_runtime_1.jsx)(coheza_ui_1.TextField, { placeholder: "Buscar Bol\u00E3o", size: "sm" }), (0, jsx_runtime_1.jsx)(coheza_ui_1.Button, Object.assign({ color: "primary", leftIcon: (0, jsx_runtime_1.jsx)(hi_1.HiSearch, {}), size: "sm" }, { children: "Buscar" }))] })), (0, jsx_runtime_1.jsx)(coheza_ui_1.Button, Object.assign({ onClick: () => navigate("/create-bolao"), color: "primary", leftIcon: (0, jsx_runtime_1.jsx)(hi_1.HiPlus, {}), size: "xs" }, { children: "Novo Bol\u00E3o" }))] })), (0, jsx_runtime_1.jsx)("div", Object.assign({ className: "flex gap-2 flex-col mt-8 " }, { children: boloes.map((bolao) => ((0, jsx_runtime_1.jsx)(ItemBolao_1.ItemBolao, { bolao: bolao, signIn: signIn, requestSignIn: handleRequestSignIn }))) }))] }));
}
exports.ListBolao = ListBolao;
//# sourceMappingURL=index.js.map