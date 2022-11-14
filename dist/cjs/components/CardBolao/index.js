"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CardBolao = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const clsx_1 = require("clsx");
const ScoreUtils_1 = require("../../utils/ScoreUtils");
const fa_1 = require("react-icons/fa");
const ri_1 = require("react-icons/ri");
const coheza_ui_1 = require("coheza-ui");
function CardBolao({ bolao }) {
    let values = bolao.users.map((user) => {
        return {
            user,
            score: (0, ScoreUtils_1.scoreByUser)(user),
        };
    });
    values = values.sort(function (a, b) {
        return b.score - a.score;
    });
    console.log(values);
    return ((0, jsx_runtime_1.jsxs)("div", { className: "flex flex-col gap-2 bg-default-900/90 p-4", children: [(0, jsx_runtime_1.jsxs)("div", { className: "flex gap-2 items-end", children: [(0, jsx_runtime_1.jsx)("strong", { className: "text-default-100", children: bolao.name }), (0, jsx_runtime_1.jsx)(coheza_ui_1.Span, { type: bolao.type === "private" ? "danger" : "success", children: bolao.type === "private" ? "Privado" : "Público" })] }), (0, jsx_runtime_1.jsx)("div", { className: "flex flex-col gap-1", children: values.map((value, index) => ((0, jsx_runtime_1.jsxs)("div", { className: (0, clsx_1.default)("flex justify-between ", {
                        "bg-[#daa520]/20 text-[#daa520] px-8 py-2": index === 0,
                        "bg-[#c0c0c0]/20 text-[#c0c0c0] px-8 py-[6px]": index === 1,
                        "bg-[#cd7f32]/20 text-[#cd7f32] px-8 py-1": index === 2,
                        "bg-default-900 text-default-100 px-8 py-1": index > 2,
                    }), children: [(0, jsx_runtime_1.jsxs)("div", { className: "flex gap-2 items-center", children: [(0, jsx_runtime_1.jsxs)("strong", { children: [index + 1, "\u00BA"] }), index === 0 ? (0, jsx_runtime_1.jsx)(fa_1.FaTrophy, {}) : (0, jsx_runtime_1.jsx)(ri_1.RiMedalFill, {}), (0, jsx_runtime_1.jsx)("strong", { children: value.user.name }), (0, jsx_runtime_1.jsx)("span", { className: "text-xs", children: value.user.username })] }), (0, jsx_runtime_1.jsxs)("strong", { children: [value.score, " pts"] })] }, value.user.id))) })] }));
}
exports.CardBolao = CardBolao;
//# sourceMappingURL=index.js.map