"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CardJogo = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const clsx_1 = __importDefault(require("clsx"));
const react_1 = require("react");
const gi_1 = require("react-icons/gi");
const tb_1 = require("react-icons/tb");
const ResultService_1 = require("../../services/ResultService");
const FormatUtils_1 = require("../../utils/FormatUtils");
const fa_1 = require("react-icons/fa");
function CardJogo({ result }) {
    const [homeScore, setHomeScore] = (0, react_1.useState)(result.home_result);
    const [outsideScore, setOutsideScore] = (0, react_1.useState)(result.outside_result);
    function handleSaveResult() {
        result.home_result = homeScore;
        result.outside_result = outsideScore;
        (0, ResultService_1.saveResult)(result);
    }
    function handleHome(event) {
        setHomeScore(event.target.value);
    }
    function handleOutside(event) {
        setOutsideScore(event.target.value);
    }
    return ((0, jsx_runtime_1.jsxs)("div", { className: "flex flex-col", children: [(0, jsx_runtime_1.jsxs)("div", { className: (0, clsx_1.default)(" flex flex-col max-w-[250px] px-2 py-1", {
                    "bg-primary-400 bg-opacity-20": !!homeScore && !!outsideScore,
                    "bg-default-900": homeScore == null || outsideScore == null,
                }), children: [(0, jsx_runtime_1.jsxs)("div", { className: "flex flex-col items-center justify-center mb-2", children: [(0, jsx_runtime_1.jsxs)("span", { className: "text-xs text-default-100 flex items-center gap-1", children: [(0, jsx_runtime_1.jsx)(gi_1.GiAbstract042, { size: 10 }), result.game.stadium] }), (0, jsx_runtime_1.jsxs)("span", { className: "text-[10px] text-default-100 flex items-center gap-1", children: [(0, jsx_runtime_1.jsx)(tb_1.TbClock, { size: 10 }), (0, FormatUtils_1.dateFormat)(result.game.date)] })] }), (0, jsx_runtime_1.jsxs)("div", { className: "flex flex-row justify-between items-center mb-2", children: [(0, jsx_runtime_1.jsxs)("div", { className: "flex flex-col items-center text-center justify-center ", children: [result.game.home_team?.urlflag ? ((0, jsx_runtime_1.jsx)("img", { src: result.game.home_team?.urlflag, width: 40, title: result.game.home_team?.name })) : ((0, jsx_runtime_1.jsx)(fa_1.FaQuestionCircle, { className: "text-default-100 mx-4", size: 30 })), (0, jsx_runtime_1.jsx)("span", { className: "text-[0.65rem] text-default-100", children: result.game.home_team?.name })] }), (0, jsx_runtime_1.jsx)("input", { className: "w-10 bg-input-bg text-center focus:ring-2 ring-primary-700 outline-none text-default-100 font-bold text-xl rounded-lg h-9", type: "text", onBlur: handleSaveResult, onChange: handleHome, value: homeScore }), (0, jsx_runtime_1.jsx)("div", { className: "text-default-200 font-bold", children: "x" }), (0, jsx_runtime_1.jsx)("input", { className: "w-10 bg-input-bg text-center focus:ring-2 ring-primary-700 text-default-100 outline-none font-bold text-xl rounded-lg h-9", type: "text", onBlur: handleSaveResult, onChange: handleOutside, value: outsideScore }), (0, jsx_runtime_1.jsxs)("div", { className: "flex flex-col items-center justify-center text-center", children: [result.game.home_team?.urlflag ? ((0, jsx_runtime_1.jsx)("img", { src: result.game.outside_team?.urlflag, width: 40, title: result.game.outside_team?.name })) : ((0, jsx_runtime_1.jsx)(fa_1.FaQuestionCircle, { className: "text-default-100 mx-4", size: 30 })), (0, jsx_runtime_1.jsx)("span", { className: "text-[0.65rem] text-default-100", children: result.game.outside_team?.name })] })] })] }), (0, jsx_runtime_1.jsx)("div", { className: "w-full max-w-[250px] flex flex-col items-center bg-default-700", children: (0, jsx_runtime_1.jsx)("span", { className: "text-[0.8rem] text-default-100", children: "Resultado Pendente" }) })] }));
}
exports.CardJogo = CardJogo;
//# sourceMappingURL=CardJogo.js.map