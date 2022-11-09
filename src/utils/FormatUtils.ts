export function dateFormat(date: Date): string {
  if(date) {
    return new Intl.DateTimeFormat('pt-BR', {timeZone: 'UTC'}).format(new Date(date))
  }
  return '';
}