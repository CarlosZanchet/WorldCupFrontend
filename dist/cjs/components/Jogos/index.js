"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Jogos = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const coheza_ui_1 = require("coheza-ui");
const react_1 = require("react");
const fa_1 = require("react-icons/fa");
const ResultService_1 = require("../../services/ResultService");
const StepsService_1 = require("../../services/StepsService");
const CardJogo_1 = require("./CardJogo");
const CardJogoFinalizado_1 = require("./CardJogoFinalizado");
const GROUPS = ["A", "B", "C", "D", "E", "F", "G", "H"];
function Jogos() {
    const { showNotification } = (0, coheza_ui_1.useToast)();
    const [step, setStep] = (0, react_1.useState)(1);
    const [results, setResults] = (0, react_1.useState)([]);
    const [steps, setSteps] = (0, react_1.useState)([]);
    (0, react_1.useEffect)(() => {
        (0, StepsService_1.getStepsActive)().then((response) => {
            setSteps(response.data);
        });
    }, []);
    (0, react_1.useEffect)(() => {
        setResults([]);
        (0, ResultService_1.getResultByUserAndStep)(step.toString())
            .then((response) => {
            setResults(response.data);
        })
            .catch(() => {
            showNotification("danger", "Houve um erro ao carregar os jogos!");
        });
    }, [step]);
    function gamesByGroup(group) {
        return results.filter((result) => result.game.group_team === group);
    }
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(coheza_ui_1.Heading, { children: "Jogos" }), (0, jsx_runtime_1.jsx)("div", { className: "flex flex-row items-center justify-center", children: (0, jsx_runtime_1.jsx)(coheza_ui_1.ButtonGroup, { children: steps.map((s) => ((0, jsx_runtime_1.jsx)(coheza_ui_1.Button, { onClick: () => setStep(s.step), leftIcon: step === s.step && (0, jsx_runtime_1.jsx)(fa_1.FaCheck, {}), color: step === s.step ? "primary" : "default", children: s.name }, s.id))) }) }), step === 1 || step === 2 || step === 3 ? ((0, jsx_runtime_1.jsx)("div", { className: "grid grid-cols-2 gap-x-8 justify-center w-full items-center ", children: GROUPS.map((group) => ((0, jsx_runtime_1.jsxs)("div", { className: "w-full flex flex-col gap-2 mt-4", children: [(0, jsx_runtime_1.jsxs)("span", { className: "font-semibold text-default-100 mt-4 flex", children: ["Grupo ", group] }), (0, jsx_runtime_1.jsx)("div", { className: "grid grid-cols-2 gap-1", children: gamesByGroup(group).map((result) => ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: result.game.home_score && result.game.outside_score ? ((0, jsx_runtime_1.jsx)(CardJogoFinalizado_1.CardJogoFinalizado, { result: result })) : ((0, jsx_runtime_1.jsx)(CardJogo_1.CardJogo, { result: result })) }))) })] }))) })) : ((0, jsx_runtime_1.jsx)("div", { className: "flex flex-col items-center justify-center", children: results.map((result) => ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: result.game.home_score && result.game.outside_score ? ((0, jsx_runtime_1.jsx)(CardJogoFinalizado_1.CardJogoFinalizado, { result: result })) : ((0, jsx_runtime_1.jsx)(CardJogo_1.CardJogo, { result: result })) }))) }))] }));
}
exports.Jogos = Jogos;
//# sourceMappingURL=index.js.map