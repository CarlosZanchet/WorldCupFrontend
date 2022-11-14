import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { GiAbstract042 } from "react-icons/gi";
import { TbClock } from "react-icons/tb";
import { FaQuestionCircle } from "react-icons/fa";
import { dateFormat } from "../../utils/FormatUtils";
export function CardJogoFinalizado({ result }) {
    function resulComparer(value1, value2) {
        if (value1 && value2) {
            if (value1 > value2)
                return true;
        }
        return false;
    }
    return (_jsxs("div", { className: "flex flex-col", children: [_jsxs("div", { className: "flex flex-col max-w-[250px] px-2 py-1 bg-primary-400 bg-opacity-20", children: [_jsxs("div", { className: "flex flex-col items-center justify-center mb-2", children: [_jsxs("span", { className: "text-xs text-default-100 flex items-center gap-1", children: [_jsx(GiAbstract042, { size: 10 }), result.game.stadium] }), _jsxs("span", { className: "text-[10px] text-default-100 flex items-center gap-1", children: [_jsx(TbClock, { size: 10 }), dateFormat(result.game.date)] })] }), _jsxs("div", { className: "flex flex-row justify-between items-center mb-2", children: [_jsxs("div", { className: "flex flex-col items-center text-center justify-center", children: [result.game.home_team?.urlflag ? (_jsx("img", { src: result.game.home_team?.urlflag, className: resulComparer(result.game.outside_score, result.game.home_score)
                                            ? "grayscale opacity-30"
                                            : "", width: 40, alt: "" })) : (_jsx(FaQuestionCircle, { className: "text-default-100 mx-4", size: 30 })), _jsx("span", { className: "text-[0.65rem] text-default-100", children: result.game.home_team?.name })] }), _jsx("strong", { className: "text-default-100 text-xl", children: result.home_result }), _jsx("div", { className: "text-default-200 font-bold", children: "x" }), _jsx("strong", { className: "text-default-100 text-xl", children: result.outside_result }), _jsxs("div", { className: "flex flex-col items-center justify-center text-center", children: [result.game.home_team?.urlflag ? (_jsx("img", { src: result.game.outside_team?.urlflag, className: resulComparer(result.game.home_score, result.game.outside_score)
                                            ? "grayscale opacity-30"
                                            : "", width: 40, alt: "" })) : (_jsx(FaQuestionCircle, { className: "text-default-100 mx-4", size: 30 })), _jsx("span", { className: "text-[0.65rem] text-default-100", children: result.game.outside_team?.name })] })] })] }), _jsx("div", { className: "w-full flex flex-col items-center bg-primary-700 bg-opacity-50", children: _jsxs("span", { className: "text-[0.8rem] text-default-100", children: ["Placar: ", result.game.home_score, " x ", result.game.outside_score] }) })] }));
}
//# sourceMappingURL=CardJogoFinalizado.js.map