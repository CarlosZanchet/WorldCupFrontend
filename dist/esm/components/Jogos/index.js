import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Button, ButtonGroup, Heading, useToast } from "coheza-ui";
import { useEffect, useState } from "react";
import { FaCheck } from "react-icons/fa";
import { getResultByUserAndStep } from "../../services/ResultService";
import { getStepsActive } from "../../services/StepsService";
import { CardJogo } from "./CardJogo";
import { CardJogoFinalizado } from "./CardJogoFinalizado";
const GROUPS = ["A", "B", "C", "D", "E", "F", "G", "H"];
export function Jogos() {
    const { showNotification } = useToast();
    const [step, setStep] = useState(1);
    const [results, setResults] = useState([]);
    const [steps, setSteps] = useState([]);
    useEffect(() => {
        getStepsActive().then((response) => {
            setSteps(response.data);
        });
    }, []);
    useEffect(() => {
        setResults([]);
        getResultByUserAndStep(step.toString())
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
    return (_jsxs(_Fragment, { children: [_jsx(Heading, { children: "Jogos" }), _jsx("div", { className: "flex flex-row items-center justify-center", children: _jsx(ButtonGroup, { children: steps.map((s) => (_jsx(Button, { onClick: () => setStep(s.step), leftIcon: step === s.step && _jsx(FaCheck, {}), color: step === s.step ? "primary" : "default", children: s.name }, s.id))) }) }), step === 1 || step === 2 || step === 3 ? (_jsx("div", { className: "grid grid-cols-2 gap-x-8 justify-center w-full items-center ", children: GROUPS.map((group) => (_jsxs("div", { className: "w-full flex flex-col gap-2 mt-4", children: [_jsxs("span", { className: "font-semibold text-default-100 mt-4 flex", children: ["Grupo ", group] }), _jsx("div", { className: "grid grid-cols-2 gap-1", children: gamesByGroup(group).map((result) => (_jsx(_Fragment, { children: result.game.home_score && result.game.outside_score ? (_jsx(CardJogoFinalizado, { result: result })) : (_jsx(CardJogo, { result: result })) }))) })] }))) })) : (_jsx("div", { className: "flex flex-col items-center justify-center", children: results.map((result) => (_jsx(_Fragment, { children: result.game.home_score && result.game.outside_score ? (_jsx(CardJogoFinalizado, { result: result })) : (_jsx(CardJogo, { result: result })) }))) }))] }));
}
//# sourceMappingURL=index.js.map