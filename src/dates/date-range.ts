import { daysInMonth } from "./days-in-month";

export function dateRange(date: Date, from: number, to: number) {
  var year = date.getFullYear();
  var monthAsJSArray = date.getMonth();
  var days = daysInMonth(year, monthAsJSArray);
  var dates: Date[] = [];

  // console.log("date", [date, from, to]);
  for (let day = 1; day <= days; day++) {
    if (day >= from && day <= to) {
      let d = new Date(year, monthAsJSArray, day);
      dates.push(d);
    }
  }
  return dates;
}
