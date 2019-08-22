import { removeCommaAndSpace } from "./remove-comma";

export function separateComma(value: string) {
  if (!value) return;
  value = removeCommaAndSpace(value);
  const v0 = value.split(".")[0];
  const v1 = value.split(".")[1];
  const len = v0.length;
  var newValue = [];

  for (let i = len; i > 0; i = i - 3) {
    if (i > 3) {
      newValue.unshift(v0.slice(i - 3, i));
    } else {
      newValue.unshift(v0.slice(0, i));
    }
  }
  const v = v1 ? newValue.join(",") + "." + v1 : newValue.join(",");
  return v;
}
