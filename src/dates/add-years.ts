export function addYears(oldDate: Date, year: number): Date {
  var y = parseFloat(year.toString()) || 0;
  var newDate = new Date(oldDate);
  var newYear = newDate.getFullYear() + y;
  newDate.setFullYear(newYear);
  return newDate;
}
