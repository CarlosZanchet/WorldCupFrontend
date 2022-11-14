import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Box, Button, Text, TextField, useToast } from "coheza-ui";
import { FaCheck, FaLock, FaTimes, FaUserAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { User } from "../../entities/User";
import { saveUser } from "../../services/UserService";
import { Formik } from "formik";
import * as Yup from "yup";
export function CreateAccount() {
    const navigate = useNavigate();
    const { showNotification } = useToast();
    function handleSubmitForm(values) {
        const user = new User(null, values.name, values.username, values.password, []).toJson();
        saveUser(user).then(() => {
            showNotification('success', 'Cadastrado com Sucesso.');
            navigate('/login');
        }).catch((e) => {
            showNotification('danger', e.response.data.message);
        });
    }
    return (_jsx("div", { className: "w-full  h-screen flex items-center justify-center", children: _jsxs(Box, { className: "w-full p-10 max-w-sm bg-default-800", children: [_jsx(Text, { className: "mb-4 flex", size: "sm", children: "Criar Conta" }), _jsx(Formik, { enableReinitialize: true, initialValues: {
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
                    }), onSubmit: handleSubmitForm, children: ({ errors, handleChange, handleSubmit, touched, setFieldValue, values, }) => (_jsxs("form", { onSubmit: handleSubmit, className: "flex flex-col gap-4", children: [_jsx("div", { className: "flex flex-col gap-3", children: _jsx(TextField, { name: "name", autoComplete: "off", onChange: handleChange, size: "lg", placeholder: "Nome Completo", error: Boolean(touched.name && errors.name), helperText: errors.name }) }), _jsxs("div", { className: "flex flex-col mt-14 gap-3", children: [_jsx(TextField, { name: "username", onChange: handleChange, size: "lg", icon: _jsx(FaUserAlt, {}), placeholder: "Usu\u00E1rio", autoComplete: "off", error: Boolean(touched.username && errors.username), helperText: errors.username }), _jsx(TextField, { size: "lg", name: "password", autoComplete: "off", icon: _jsx(FaLock, {}), onChange: handleChange, type: "password", placeholder: "Senha", error: Boolean(touched.password && errors.password), helperText: errors.password }), _jsx(TextField, { size: "lg", autoComplete: "off", name: "confirmPassword", icon: _jsx(FaLock, {}), onChange: handleChange, type: "password", placeholder: "Confirmar Senha", error: Boolean(touched.confirmPassword && errors.confirmPassword), helperText: errors.confirmPassword })] }), _jsxs("footer", { className: "flex flex-col gap-2 mt-6", children: [_jsx(Button, { type: "submit", size: "lg", color: "primary", leftIcon: _jsx(FaCheck, {}), fullWidth: true, children: "Inscrever-se" }), _jsx(Button, { size: "xs", variant: "text", color: "secondary", leftIcon: _jsx(FaTimes, {}), fullWidth: true, onClick: () => navigate("/login"), children: "Cancelar" })] })] })) })] }) }));
}
//# sourceMappingURL=index.js.map