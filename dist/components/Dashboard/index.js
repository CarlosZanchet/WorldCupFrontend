import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Heading, Text } from "coheza-ui";
import { useEffect, useState } from "react";
import { getBoloesByUser } from "../../services/BolaoService";
import { FaRegStar } from "react-icons/fa";
import { findUserById } from "../../services/UserService";
import { scoreByUser } from "../../utils/ScoreUtils";
import { CardBolao } from "../CardBolao";
export function Dashboard() {
    const [boloes, setBoloes] = useState([]);
    const [myPoints, setMyPoints] = useState(0);
    useEffect(() => {
        getBoloesByUser().then((response) => {
            setBoloes(response.data);
        });
        findUserById().then((response) => {
            const user = response.data;
            const score = scoreByUser(user);
            setMyPoints(score);
        });
    }, []);
    return (_jsxs("div", { children: [_jsx(Heading, { children: "Dashboard" }), _jsxs("div", { className: "flex flex-col mt-3", children: [_jsx("strong", { className: "text-sm text-default-100", children: "Meus Pontos" }), _jsxs("strong", { className: "text-2xl text-[#daa520] flex items-center gap-1", children: [_jsx(FaRegStar, { size: 18 }), myPoints] })] }), _jsxs("div", { className: "mt-5 gap-2 flex flex-col", children: [_jsx(Text, { children: "Meus Bol\u00F5es" }), boloes.map((bolao) => (_jsx(CardBolao, { bolao: bolao }, bolao.id)))] })] }));
}
//# sourceMappingURL=index.js.map