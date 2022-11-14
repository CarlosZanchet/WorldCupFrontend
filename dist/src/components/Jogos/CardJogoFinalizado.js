"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CardJogoFinalizado = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const gi_1 = require("react-icons/gi");
const tb_1 = require("react-icons/tb");
const fa_1 = require("react-icons/fa");
const FormatUtils_1 = require("../../utils/FormatUtils");
function CardJogoFinalizado({ result }) {
    var _a, _b, _c, _d, _e, _f;
    function resulComparer(value1, value2) {
        if (value1 && value2) {
            if (value1 > value2)
                return true;
        }
        return false;
    }
    return ((0, jsx_runtime_1.jsxs)("div", Object.assign({ className: "flex flex-col" }, { children: [(0, jsx_runtime_1.jsxs)("div", Object.assign({ className: "flex flex-col max-w-[250px] px-2 py-1 bg-primary-400 bg-opacity-20" }, { children: [(0, jsx_runtime_1.jsxs)("div", Object.assign({ className: "flex flex-col items-center justify-center mb-2" }, { children: [(0, jsx_runtime_1.jsxs)("span", Object.assign({ className: "text-xs text-default-100 flex items-center gap-1" }, { children: [(0, jsx_runtime_1.jsx)(gi_1.GiAbstract042, { size: 10 }), result.game.stadium] })), (0, jsx_runtime_1.jsxs)("span", Object.assign({ className: "text-[10px] text-default-100 flex items-center gap-1" }, { children: [(0, jsx_runtime_1.jsx)(tb_1.TbClock, { size: 10 }), (0, FormatUtils_1.dateFormat)(result.game.date)] }))] })), (0, jsx_runtime_1.jsxs)("div", Object.assign({ className: "flex flex-row justify-between items-center mb-2" }, { children: [(0, jsx_runtime_1.jsxs)("div", Object.assign({ className: "flex flex-col items-center text-center justify-center" }, { children: [((_a = result.game.home_team) === null || _a === void 0 ? void 0 : _a.urlflag) ? ((0, jsx_runtime_1.jsx)("img", { src: (_b = result.game.home_team) === null || _b === void 0 ? void 0 : _b.urlflag, className: resulComparer(result.game.outside_score, result.game.home_score)
                                            ? "grayscale opacity-30"
                                            : "", width: 40, alt: "" })) : ((0, jsx_runtime_1.jsx)(fa_1.FaQuestionCircle, { className: "text-default-100 mx-4", size: 30 })), (0, jsx_runtime_1.jsx)("span", Object.assign({ className: "text-[0.65rem] text-default-100" }, { children: (_c = result.game.home_team) === null || _c === void 0 ? void 0 : _c.name }))] })), (0, jsx_runtime_1.jsx)("strong", Object.assign({ className: "text-default-100 text-xl" }, { children: result.home_result })), (0, jsx_runtime_1.jsx)("div", Object.assign({ className: "text-default-200 font-bold" }, { children: "x" })), (0, jsx_runtime_1.jsx)("strong", Object.assign({ className: "text-default-100 text-xl" }, { children: result.outside_result })), (0, jsx_runtime_1.jsxs)("div", Object.assign({ className: "flex flex-col items-center justify-center text-center" }, { children: [((_d = result.game.home_team) === null || _d === void 0 ? void 0 : _d.urlflag) ? ((0, jsx_runtime_1.jsx)("img", { src: (_e = result.game.outside_team) === null || _e === void 0 ? void 0 : _e.urlflag, className: resulComparer(result.game.home_score, result.game.outside_score)
                                            ? "grayscale opacity-30"
                                            : "", width: 40, alt: "" })) : ((0, jsx_runtime_1.jsx)(fa_1.FaQuestionCircle, { className: "text-default-100 mx-4", size: 30 })), (0, jsx_runtime_1.jsx)("span", Object.assign({ className: "text-[0.65rem] text-default-100" }, { children: (_f = result.game.outside_team) === null || _f === void 0 ? void 0 : _f.name }))] }))] }))] })), (0, jsx_runtime_1.jsx)("div", Object.assign({ className: "w-full flex flex-col items-center bg-primary-700 bg-opacity-50" }, { children: (0, jsx_runtime_1.jsxs)("span", Object.assign({ className: "text-[0.8rem] text-default-100" }, { children: ["Placar: ", result.game.home_score, " x ", result.game.outside_score] })) }))] })));
}
exports.CardJogoFinalizado = CardJogoFinalizado;
//# sourceMappingURL=CardJogoFinalizado.js.map