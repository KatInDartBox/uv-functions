export function monthID(monthName: string): number {
  const month = (monthName.slice(0, 3) as string).toLocaleLowerCase();
  const monthID = {
    jan: 0,
    feb: 1,
    mar: 2,
    apr: 3,
    may: 4,
    jun: 5,
    jul: 6,
    aug: 7,
    sep: 8,
    oct: 9,
    nov: 10,
    dec: 11
  };
  return monthID[month];
}
