export function monthNames(
  type: string = "short",
  hasNumberPreciding: boolean = false
): string[] {
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];
  var i = 1;
  var monthNamesShort = [];
  var monthNamesWithNumber = [];
  var monthNamesWithNumberShort = [];
  monthNames.forEach(m => {
    let istr = "";
    istr = i < 10 ? "0" + i.toString() : i.toString();
    monthNamesShort.push(m.slice(0, 3));
    monthNamesWithNumber.push(istr + "-" + m);
    monthNamesWithNumberShort.push(istr + "-" + m.slice(0, 3));
    i = i + 1;
  });
  var months: string[];
  if (type == "short") {
    months = hasNumberPreciding ? monthNamesWithNumberShort : monthNamesShort;
  } else {
    months = hasNumberPreciding ? monthNamesWithNumber : monthNames;
  }
  return months;
}
