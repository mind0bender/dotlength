import type { Ratio } from "./encrypt.server";

export default function decrypt(ratio: Ratio): string {
  const messageInASCII: string = ratioToASCII(ratio).slice(2);
  let message: string = "";
  for (let i: number = 0; i < messageInASCII.length; i += 3) {
    const charCode: number = parseInt(messageInASCII.slice(i, i + 3));
    const char: string = String.fromCharCode(charCode);
    message += char;
  }
  console.log(`>"${message}"<`);
  return message;
}

function ratioToASCII({ numerator, denominator }: Ratio): string {
  let decoded: string = "0.";
  numerator *= 10n; // for 0.
  while (numerator) {
    decoded += numerator / denominator;
    numerator = numerator % denominator;
    numerator *= 10n;
  }
  return decoded;
}
