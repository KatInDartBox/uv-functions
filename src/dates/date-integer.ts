export function dateInteger(year: number, monthAsJSArray: number, day: number) {
  let d = new Date(year, monthAsJSArray, day);
  return d.getTime();
}
