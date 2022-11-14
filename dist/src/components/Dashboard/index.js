"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Dashboard = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const coheza_ui_1 = require("coheza-ui");
const react_1 = require("react");
const BolaoService_1 = require("../../services/BolaoService");
const fa_1 = require("react-icons/fa");
const UserService_1 = require("../../services/UserService");
const ScoreUtils_1 = require("../../utils/ScoreUtils");
const CardBolao_1 = require("../CardBolao");
function Dashboard() {
    const [boloes, setBoloes] = (0, react_1.useState)([]);
    const [myPoints, setMyPoints] = (0, react_1.useState)(0);
    (0, react_1.useEffect)(() => {
        (0, BolaoService_1.getBoloesByUser)().then((response) => {
            setBoloes(response.data);
        });
        (0, UserService_1.findUserById)().then((response) => {
            const user = response.data;
            const score = (0, ScoreUtils_1.scoreByUser)(user);
            setMyPoints(score);
        });
    }, []);
    return ((0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)(coheza_ui_1.Heading, { children: "Dashboard" }), (0, jsx_runtime_1.jsxs)("div", Object.assign({ className: "flex flex-col mt-3" }, { children: [(0, jsx_runtime_1.jsx)("strong", Object.assign({ className: "text-sm text-default-100" }, { children: "Meus Pontos" })), (0, jsx_runtime_1.jsxs)("strong", Object.assign({ className: "text-2xl text-[#daa520] flex items-center gap-1" }, { children: [(0, jsx_runtime_1.jsx)(fa_1.FaRegStar, { size: 18 }), myPoints] }))] })), (0, jsx_runtime_1.jsxs)("div", Object.assign({ className: "mt-5 gap-2 flex flex-col" }, { children: [(0, jsx_runtime_1.jsx)(coheza_ui_1.Text, { children: "Meus Bol\u00F5es" }), boloes.map((bolao) => ((0, jsx_runtime_1.jsx)(CardBolao_1.CardBolao, { bolao: bolao }, bolao.id)))] }))] }));
}
exports.Dashboard = Dashboard;
//# sourceMappingURL=index.js.map