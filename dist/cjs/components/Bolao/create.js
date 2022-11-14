"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateBolao = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const coheza_ui_1 = require("coheza-ui");
const react_1 = require("react");
const fa_1 = require("react-icons/fa");
const md_1 = require("react-icons/md");
const md_2 = require("react-icons/md");
const formik_1 = require("formik");
const Yup = require("yup");
const Bolao_1 = require("../../entities/Bolao");
const CookiesUtil_1 = require("../../utils/CookiesUtil");
const BolaoService_1 = require("../../services/BolaoService");
function CreateBolao() {
    const { showNotification } = (0, coheza_ui_1.useToast)();
    const [bolao, setBolao] = (0, react_1.useState)({});
    const [type, setType] = (0, react_1.useState)('public');
    function handleSalvar() {
        showNotification('success', 'Bolão salvo com sucesso.');
    }
    function handleSubmitForm(values) {
        const user = (0, CookiesUtil_1.getUsuarioLogadoCookie)();
        const newBolao = new Bolao_1.Bolao(null, values.name, values.url_image, user, new Date(), [], type);
        (0, BolaoService_1.saveBolao)(newBolao).then((response) => {
            setBolao(response.data);
            showNotification('success', 'Bolão cadastrado com sucesso.');
        }).catch(() => {
            showNotification('danger', 'Houve um erro ao cadastrar o bolão.');
        });
    }
    return ((0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)(coheza_ui_1.Heading, { children: "Cadastrar Bol\u00E3o" }), (0, jsx_runtime_1.jsx)("div", { className: "mt-5", children: (0, jsx_runtime_1.jsx)(formik_1.Formik, { enableReinitialize: true, initialValues: {
                        id: bolao?.id ? bolao?.id : null,
                        name: bolao?.name ? bolao?.name : "",
                        url_image: bolao?.url_image ? bolao?.url_image : "",
                    }, validationSchema: Yup.object().shape({
                        name: Yup.string().nullable().required("Informe um nome"),
                    }), onSubmit: handleSubmitForm, children: ({ errors, handleChange, handleSubmit, touched, setFieldValue, values, }) => ((0, jsx_runtime_1.jsxs)("form", { onSubmit: handleSubmit, className: "flex flex-col gap-4", children: [(0, jsx_runtime_1.jsx)(coheza_ui_1.TextField, { name: "name", onChange: handleChange, placeholder: "Nome do Bol\u00E3o", label: "Nome do Bol\u00E3o" }), (0, jsx_runtime_1.jsx)(coheza_ui_1.TextField, { name: "url_image", onChange: handleChange, placeholder: "URL Imagem Bol\u00E3o", label: "URL Imagem Bol\u00E3o" }), (0, jsx_runtime_1.jsxs)(coheza_ui_1.ButtonGroup, { children: [(0, jsx_runtime_1.jsx)(coheza_ui_1.Button, { color: "primary", onClick: () => setType('private'), variant: type === 'private' ? 'solid' : 'text', leftIcon: (0, jsx_runtime_1.jsx)(md_2.MdLock, {}), children: "Privado" }), (0, jsx_runtime_1.jsx)(coheza_ui_1.Button, { color: "primary", onClick: () => setType('public'), variant: type === 'public' ? 'solid' : 'text', leftIcon: (0, jsx_runtime_1.jsx)(md_1.MdPublic, {}), children: "P\u00FAblico" })] }), (0, jsx_runtime_1.jsx)("footer", { children: (0, jsx_runtime_1.jsx)(coheza_ui_1.Button, { type: "submit", leftIcon: (0, jsx_runtime_1.jsx)(fa_1.FaCheck, {}), color: "primary", children: "Salvar" }) })] })) }) })] }));
}
exports.CreateBolao = CreateBolao;
//# sourceMappingURL=create.js.map