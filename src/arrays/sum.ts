export function sum(array: any[]): number {
  var sum = 0;
  for (let i = 0; i < array.length; i++) {
    let v = parseFloat(array[i]) || 0;
    sum = sum + v;
  }
  return sum;
}
