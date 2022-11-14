"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dateFormat = void 0;
function dateFormat(date) {
    if (date) {
        return new Intl.DateTimeFormat('pt-BR', { timeZone: 'UTC' }).format(new Date(date));
    }
    return '';
}
exports.dateFormat = dateFormat;
//# sourceMappingURL=FormatUtils.js.map