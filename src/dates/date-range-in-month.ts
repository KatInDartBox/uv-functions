import { daysInMonth } from "./days-in-month";

export function datesRangeInMonth(year: number, monthAsJsArray: number) {
  var days = daysInMonth(+year, +monthAsJsArray);
  // console.log("days", days);
  var dates: Date[] = [];
  for (let day = 1; day <= days; day++) {
    let d = new Date(year, monthAsJsArray, day);
    dates.push(d);
  }
  return dates;
}

export function datesRangeInMonthObj(date: Date) {
  var year = date.getFullYear();
  var monthAsJSArray = date.getMonth();
  var days = daysInMonth(year, monthAsJSArray);
  var dates: Date[] = [];
  for (let day = 1; day <= days; day++) {
    let d = new Date(year, monthAsJSArray, day);
    dates.push(d);
  }
  return dates;
}
