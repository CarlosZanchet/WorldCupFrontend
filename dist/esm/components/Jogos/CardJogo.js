import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import clsx from "clsx";
import { useState } from "react";
import { GiAbstract042 } from "react-icons/gi";
import { TbClock } from "react-icons/tb";
import { saveResult } from "../../services/ResultService";
import { dateFormat } from "../../utils/FormatUtils";
import { FaQuestionCircle } from "react-icons/fa";
export function CardJogo({ result }) {
    const [homeScore, setHomeScore] = useState(result.home_result);
    const [outsideScore, setOutsideScore] = useState(result.outside_result);
    function handleSaveResult() {
        result.home_result = homeScore;
        result.outside_result = outsideScore;
        saveResult(result);
    }
    function handleHome(event) {
        setHomeScore(event.target.value);
    }
    function handleOutside(event) {
        setOutsideScore(event.target.value);
    }
    return (_jsxs("div", { className: "flex flex-col", children: [_jsxs("div", { className: clsx(" flex flex-col max-w-[250px] px-2 py-1", {
                    "bg-primary-400 bg-opacity-20": !!homeScore && !!outsideScore,
                    "bg-default-900": homeScore == null || outsideScore == null,
                }), children: [_jsxs("div", { className: "flex flex-col items-center justify-center mb-2", children: [_jsxs("span", { className: "text-xs text-default-100 flex items-center gap-1", children: [_jsx(GiAbstract042, { size: 10 }), result.game.stadium] }), _jsxs("span", { className: "text-[10px] text-default-100 flex items-center gap-1", children: [_jsx(TbClock, { size: 10 }), dateFormat(result.game.date)] })] }), _jsxs("div", { className: "flex flex-row justify-between items-center mb-2", children: [_jsxs("div", { className: "flex flex-col items-center text-center justify-center ", children: [result.game.home_team?.urlflag ? (_jsx("img", { src: result.game.home_team?.urlflag, width: 40, title: result.game.home_team?.name })) : (_jsx(FaQuestionCircle, { className: "text-default-100 mx-4", size: 30 })), _jsx("span", { className: "text-[0.65rem] text-default-100", children: result.game.home_team?.name })] }), _jsx("input", { className: "w-10 bg-input-bg text-center focus:ring-2 ring-primary-700 outline-none text-default-100 font-bold text-xl rounded-lg h-9", type: "text", onBlur: handleSaveResult, onChange: handleHome, value: homeScore }), _jsx("div", { className: "text-default-200 font-bold", children: "x" }), _jsx("input", { className: "w-10 bg-input-bg text-center focus:ring-2 ring-primary-700 text-default-100 outline-none font-bold text-xl rounded-lg h-9", type: "text", onBlur: handleSaveResult, onChange: handleOutside, value: outsideScore }), _jsxs("div", { className: "flex flex-col items-center justify-center text-center", children: [result.game.home_team?.urlflag ? (_jsx("img", { src: result.game.outside_team?.urlflag, width: 40, title: result.game.outside_team?.name })) : (_jsx(FaQuestionCircle, { className: "text-default-100 mx-4", size: 30 })), _jsx("span", { className: "text-[0.65rem] text-default-100", children: result.game.outside_team?.name })] })] })] }), _jsx("div", { className: "w-full max-w-[250px] flex flex-col items-center bg-default-700", children: _jsx("span", { className: "text-[0.8rem] text-default-100", children: "Resultado Pendente" }) })] }));
}
//# sourceMappingURL=CardJogo.js.map