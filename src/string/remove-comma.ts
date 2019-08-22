export function removeCommaAndSpace(value: string) {
  if (!value) return;
  return value.replace(/[\, , " "]/g, "");
}
