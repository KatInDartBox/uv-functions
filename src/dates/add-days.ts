export function addDays(date: Date, days: number): Date {
  var nd = parseFloat(days.toString()) || 0;
  var result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
}
