import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Button, Heading, TextField, useToast } from "coheza-ui";
import { useEffect, useState } from "react";
import { HiSearch, HiPlus } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import { getBoloes, requestSignIn, signInBolao } from "../../services/BolaoService";
import { getUsuarioLogadoCookie } from "../../utils/CookiesUtil";
import { ItemBolao } from "./ItemBolao";
export function ListBolao() {
    const navigate = useNavigate();
    const { showNotification } = useToast();
    const [boloes, setBoloes] = useState([]);
    useEffect(() => {
        getBoloes().then((response) => {
            setBoloes(response.data);
            console.log(response.data);
        });
    }, []);
    function signIn(bolao) {
        const userLogged = getUsuarioLogadoCookie();
        if (userLogged.id && bolao.id) {
            signInBolao(userLogged.id, bolao.id).then(() => {
                showNotification("success", "Inscrição efetuada com sucesso.");
            }).catch((err) => {
                showNotification("danger", err.response.data.message);
            });
        }
    }
    function handleRequestSignIn(bolao) {
        requestSignIn(bolao).then(() => {
            showNotification("success", "Solicitação enviada com sucesso.");
        }).catch((err) => {
            showNotification("danger", err.response.data.message);
        });
    }
    return (_jsxs(_Fragment, { children: [_jsx(Heading, { children: "Bol\u00E3o" }), _jsxs("div", { className: "flex justify-between items-center mt-4", children: [_jsxs("div", { className: "flex gap-5 items-center", children: [_jsx(TextField, { placeholder: "Buscar Bol\u00E3o", size: "sm" }), _jsx(Button, { color: "primary", leftIcon: _jsx(HiSearch, {}), size: "sm", children: "Buscar" })] }), _jsx(Button, { onClick: () => navigate("/create-bolao"), color: "primary", leftIcon: _jsx(HiPlus, {}), size: "xs", children: "Novo Bol\u00E3o" })] }), _jsx("div", { className: "flex gap-2 flex-col mt-8 ", children: boloes.map((bolao) => (_jsx(ItemBolao, { bolao: bolao, signIn: signIn, requestSignIn: handleRequestSignIn }))) })] }));
}
//# sourceMappingURL=index.js.map