import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import clsx from "clsx";
import { scoreByUser } from "../../utils/ScoreUtils";
import { FaTrophy } from "react-icons/fa";
import { RiMedalFill } from "react-icons/ri";
import { Span } from "coheza-ui";
export function CardBolao({ bolao }) {
    let values = bolao.users.map((user) => {
        return {
            user,
            score: scoreByUser(user),
        };
    });
    values = values.sort(function (a, b) {
        return b.score - a.score;
    });
    console.log(values);
    return (_jsxs("div", { className: "flex flex-col gap-2 bg-default-900/90 p-4", children: [_jsxs("div", { className: "flex gap-2 items-end", children: [_jsx("strong", { className: "text-default-100", children: bolao.name }), _jsx(Span, { type: bolao.type === "private" ? "danger" : "success", children: bolao.type === "private" ? "Privado" : "Público" })] }), _jsx("div", { className: "flex flex-col gap-1", children: values.map((value, index) => (_jsxs("div", { className: clsx("flex justify-between ", {
                        "bg-[#daa520]/20 text-[#daa520] px-8 py-2": index === 0,
                        "bg-[#c0c0c0]/20 text-[#c0c0c0] px-8 py-[6px]": index === 1,
                        "bg-[#cd7f32]/20 text-[#cd7f32] px-8 py-1": index === 2,
                        "bg-default-900 text-default-100 px-8 py-1": index > 2,
                    }), children: [_jsxs("div", { className: "flex gap-2 items-center", children: [_jsxs("strong", { children: [index + 1, "\u00BA"] }), index === 0 ? _jsx(FaTrophy, {}) : _jsx(RiMedalFill, {}), _jsx("strong", { children: value.user.name }), _jsx("span", { className: "text-xs", children: value.user.username })] }), _jsxs("strong", { children: [value.score, " pts"] })] }, value.user.id))) })] }));
}
//# sourceMappingURL=index.js.map