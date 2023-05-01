export default function threeDigits(value: number): string {
  // return value as a string of three digits
  return value.toString().padStart(3, "0");
}
