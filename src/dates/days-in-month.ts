export function daysInMonth(year: number, monthAsJSArray: number): number {
  var d = new Date(+year, +monthAsJSArray + 1, 0);
  return d.getDate();
}

export function daysInMonthObj(date: Date): number {
  var d = new Date(date.getFullYear(), date.getMonth(), 0);
  return d.getDate();
}
