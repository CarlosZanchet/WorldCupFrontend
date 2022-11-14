import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Button, ButtonGroup, Heading, TextField, useToast } from "coheza-ui";
import { useState } from "react";
import { FaCheck } from "react-icons/fa";
import { MdPublic } from 'react-icons/md';
import { MdLock } from 'react-icons/md';
import { Formik } from "formik";
import * as Yup from "yup";
import { Bolao } from "../../entities/Bolao";
import { getUsuarioLogadoCookie } from "../../utils/CookiesUtil";
import { saveBolao } from "../../services/BolaoService";
export function CreateBolao() {
    const { showNotification } = useToast();
    const [bolao, setBolao] = useState({});
    const [type, setType] = useState('public');
    function handleSalvar() {
        showNotification('success', 'Bolão salvo com sucesso.');
    }
    function handleSubmitForm(values) {
        const user = getUsuarioLogadoCookie();
        const newBolao = new Bolao(null, values.name, values.url_image, user, new Date(), [], type);
        saveBolao(newBolao).then((response) => {
            setBolao(response.data);
            showNotification('success', 'Bolão cadastrado com sucesso.');
        }).catch(() => {
            showNotification('danger', 'Houve um erro ao cadastrar o bolão.');
        });
    }
    return (_jsxs("div", { children: [_jsx(Heading, { children: "Cadastrar Bol\u00E3o" }), _jsx("div", { className: "mt-5", children: _jsx(Formik, { enableReinitialize: true, initialValues: {
                        id: bolao?.id ? bolao?.id : null,
                        name: bolao?.name ? bolao?.name : "",
                        url_image: bolao?.url_image ? bolao?.url_image : "",
                    }, validationSchema: Yup.object().shape({
                        name: Yup.string().nullable().required("Informe um nome"),
                    }), onSubmit: handleSubmitForm, children: ({ errors, handleChange, handleSubmit, touched, setFieldValue, values, }) => (_jsxs("form", { onSubmit: handleSubmit, className: "flex flex-col gap-4", children: [_jsx(TextField, { name: "name", onChange: handleChange, placeholder: "Nome do Bol\u00E3o", label: "Nome do Bol\u00E3o" }), _jsx(TextField, { name: "url_image", onChange: handleChange, placeholder: "URL Imagem Bol\u00E3o", label: "URL Imagem Bol\u00E3o" }), _jsxs(ButtonGroup, { children: [_jsx(Button, { color: "primary", onClick: () => setType('private'), variant: type === 'private' ? 'solid' : 'text', leftIcon: _jsx(MdLock, {}), children: "Privado" }), _jsx(Button, { color: "primary", onClick: () => setType('public'), variant: type === 'public' ? 'solid' : 'text', leftIcon: _jsx(MdPublic, {}), children: "P\u00FAblico" })] }), _jsx("footer", { children: _jsx(Button, { type: "submit", leftIcon: _jsx(FaCheck, {}), color: "primary", children: "Salvar" }) })] })) }) })] }));
}
//# sourceMappingURL=create.js.map