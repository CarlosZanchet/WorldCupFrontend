"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CardJogoFinalizado = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const gi_1 = require("react-icons/gi");
const tb_1 = require("react-icons/tb");
const fa_1 = require("react-icons/fa");
const FormatUtils_1 = require("../../utils/FormatUtils");
function CardJogoFinalizado({ result }) {
    function resulComparer(value1, value2) {
        if (value1 && value2) {
            if (value1 > value2)
                return true;
        }
        return false;
    }
    return ((0, jsx_runtime_1.jsxs)("div", { className: "flex flex-col", children: [(0, jsx_runtime_1.jsxs)("div", { className: "flex flex-col max-w-[250px] px-2 py-1 bg-primary-400 bg-opacity-20", children: [(0, jsx_runtime_1.jsxs)("div", { className: "flex flex-col items-center justify-center mb-2", children: [(0, jsx_runtime_1.jsxs)("span", { className: "text-xs text-default-100 flex items-center gap-1", children: [(0, jsx_runtime_1.jsx)(gi_1.GiAbstract042, { size: 10 }), result.game.stadium] }), (0, jsx_runtime_1.jsxs)("span", { className: "text-[10px] text-default-100 flex items-center gap-1", children: [(0, jsx_runtime_1.jsx)(tb_1.TbClock, { size: 10 }), (0, FormatUtils_1.dateFormat)(result.game.date)] })] }), (0, jsx_runtime_1.jsxs)("div", { className: "flex flex-row justify-between items-center mb-2", children: [(0, jsx_runtime_1.jsxs)("div", { className: "flex flex-col items-center text-center justify-center", children: [result.game.home_team?.urlflag ? ((0, jsx_runtime_1.jsx)("img", { src: result.game.home_team?.urlflag, className: resulComparer(result.game.outside_score, result.game.home_score)
                                            ? "grayscale opacity-30"
                                            : "", width: 40, alt: "" })) : ((0, jsx_runtime_1.jsx)(fa_1.FaQuestionCircle, { className: "text-default-100 mx-4", size: 30 })), (0, jsx_runtime_1.jsx)("span", { className: "text-[0.65rem] text-default-100", children: result.game.home_team?.name })] }), (0, jsx_runtime_1.jsx)("strong", { className: "text-default-100 text-xl", children: result.home_result }), (0, jsx_runtime_1.jsx)("div", { className: "text-default-200 font-bold", children: "x" }), (0, jsx_runtime_1.jsx)("strong", { className: "text-default-100 text-xl", children: result.outside_result }), (0, jsx_runtime_1.jsxs)("div", { className: "flex flex-col items-center justify-center text-center", children: [result.game.home_team?.urlflag ? ((0, jsx_runtime_1.jsx)("img", { src: result.game.outside_team?.urlflag, className: resulComparer(result.game.home_score, result.game.outside_score)
                                            ? "grayscale opacity-30"
                                            : "", width: 40, alt: "" })) : ((0, jsx_runtime_1.jsx)(fa_1.FaQuestionCircle, { className: "text-default-100 mx-4", size: 30 })), (0, jsx_runtime_1.jsx)("span", { className: "text-[0.65rem] text-default-100", children: result.game.outside_team?.name })] })] })] }), (0, jsx_runtime_1.jsx)("div", { className: "w-full flex flex-col items-center bg-primary-700 bg-opacity-50", children: (0, jsx_runtime_1.jsxs)("span", { className: "text-[0.8rem] text-default-100", children: ["Placar: ", result.game.home_score, " x ", result.game.outside_score] }) })] }));
}
exports.CardJogoFinalizado = CardJogoFinalizado;
//# sourceMappingURL=CardJogoFinalizado.js.map