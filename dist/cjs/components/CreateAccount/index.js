"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateAccount = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const coheza_ui_1 = require("coheza-ui");
const fa_1 = require("react-icons/fa");
const react_router_dom_1 = require("react-router-dom");
const User_1 = require("../../entities/User");
const UserService_1 = require("../../services/UserService");
const formik_1 = require("formik");
const Yup = require("yup");
function CreateAccount() {
    const navigate = (0, react_router_dom_1.useNavigate)();
    const { showNotification } = (0, coheza_ui_1.useToast)();
    function handleSubmitForm(values) {
        const user = new User_1.User(null, values.name, values.username, values.password, []).toJson();
        (0, UserService_1.saveUser)(user).then(() => {
            showNotification('success', 'Cadastrado com Sucesso.');
            navigate('/login');
        }).catch((e) => {
            showNotification('danger', e.response.data.message);
        });
    }
    return ((0, jsx_runtime_1.jsx)("div", { className: "w-full  h-screen flex items-center justify-center", children: (0, jsx_runtime_1.jsxs)(coheza_ui_1.Box, { className: "w-full p-10 max-w-sm bg-default-800", children: [(0, jsx_runtime_1.jsx)(coheza_ui_1.Text, { className: "mb-4 flex", size: "sm", children: "Criar Conta" }), (0, jsx_runtime_1.jsx)(formik_1.Formik, { enableReinitialize: true, initialValues: {
                        name: "",
                        username: "",
                        password: "",
                        confirmPassword: ""
                    }, validationSchema: Yup.object().shape({
                        name: Yup.string().nullable().required("Informe um nome"),
                        username: Yup.string().nullable().required("Informe um username"),
                        password: Yup.string().nullable().required("Informe uma senha"),
                        confirmPassword: Yup.string().nullable().required("Informe novamente a senha")
                            .oneOf([Yup.ref('password')], 'Senhas informadas são diferentes'),
                    }), onSubmit: handleSubmitForm, children: ({ errors, handleChange, handleSubmit, touched, setFieldValue, values, }) => ((0, jsx_runtime_1.jsxs)("form", { onSubmit: handleSubmit, className: "flex flex-col gap-4", children: [(0, jsx_runtime_1.jsx)("div", { className: "flex flex-col gap-3", children: (0, jsx_runtime_1.jsx)(coheza_ui_1.TextField, { name: "name", autoComplete: "off", onChange: handleChange, size: "lg", placeholder: "Nome Completo", error: Boolean(touched.name && errors.name), helperText: errors.name }) }), (0, jsx_runtime_1.jsxs)("div", { className: "flex flex-col mt-14 gap-3", children: [(0, jsx_runtime_1.jsx)(coheza_ui_1.TextField, { name: "username", onChange: handleChange, size: "lg", icon: (0, jsx_runtime_1.jsx)(fa_1.FaUserAlt, {}), placeholder: "Usu\u00E1rio", autoComplete: "off", error: Boolean(touched.username && errors.username), helperText: errors.username }), (0, jsx_runtime_1.jsx)(coheza_ui_1.TextField, { size: "lg", name: "password", autoComplete: "off", icon: (0, jsx_runtime_1.jsx)(fa_1.FaLock, {}), onChange: handleChange, type: "password", placeholder: "Senha", error: Boolean(touched.password && errors.password), helperText: errors.password }), (0, jsx_runtime_1.jsx)(coheza_ui_1.TextField, { size: "lg", autoComplete: "off", name: "confirmPassword", icon: (0, jsx_runtime_1.jsx)(fa_1.FaLock, {}), onChange: handleChange, type: "password", placeholder: "Confirmar Senha", error: Boolean(touched.confirmPassword && errors.confirmPassword), helperText: errors.confirmPassword })] }), (0, jsx_runtime_1.jsxs)("footer", { className: "flex flex-col gap-2 mt-6", children: [(0, jsx_runtime_1.jsx)(coheza_ui_1.Button, { type: "submit", size: "lg", color: "primary", leftIcon: (0, jsx_runtime_1.jsx)(fa_1.FaCheck, {}), fullWidth: true, children: "Inscrever-se" }), (0, jsx_runtime_1.jsx)(coheza_ui_1.Button, { size: "xs", variant: "text", color: "secondary", leftIcon: (0, jsx_runtime_1.jsx)(fa_1.FaTimes, {}), fullWidth: true, onClick: () => navigate("/login"), children: "Cancelar" })] })] })) })] }) }));
}
exports.CreateAccount = CreateAccount;
//# sourceMappingURL=index.js.map