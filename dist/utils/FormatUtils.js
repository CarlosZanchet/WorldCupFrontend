export function dateFormat(date) {
    if (date) {
        return new Intl.DateTimeFormat('pt-BR', { timeZone: 'UTC' }).format(new Date(date));
    }
    return '';
}
//# sourceMappingURL=FormatUtils.js.map