export function addMonths(oldDate: Date, months: number): Date {
  var m = parseFloat(months.toString()) || 0;
  var newDate = new Date(oldDate);
  var newMonth = newDate.getMonth() + m;
  newDate.setMonth(newMonth);
  return newDate;
}
