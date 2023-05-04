import threeDigits from "../helpers/threedigits.server";

export interface Ratio {
  numerator: bigint;
  denominator: bigint;
}

function encrypt(message: string): Ratio {
  console.log(`<"${message}>"`);
  const messageInASCII: string = convertToASCIIFloat(message); // 0.104101108108111 for hello
  const ratio: Ratio = ASCIIToRatio(messageInASCII);
  return simplify(ratio);
}

function convertToASCIIFloat(value: string): string {
  let messageInASCII: string = "";
  for (const char of value) {
    messageInASCII += threeDigits(char.charCodeAt(0));
  }
  return messageInASCII;
}

function ASCIIToRatio(messageInASCII: string): Ratio {
  const ratio: Ratio = {
    numerator: 0n,
    denominator: 0n,
  };
  ratio.numerator = BigInt(messageInASCII);

  ratio.denominator = BigInt(
    `1${Array(messageInASCII.length - 1)
      .fill("0")
      .join("")}0`
  );
  return ratio;
}

function simplify({ numerator, denominator }: Ratio): Ratio {
  const ratio: Ratio = {
    numerator,
    denominator,
  };
  while (
    (ratio.numerator % 2n === 0n && ratio.denominator % 2n === 0n) ||
    (ratio.numerator % 5n === 0n && ratio.denominator % 5n === 0n)
  ) {
    if (ratio.numerator % 2n === 0n && ratio.denominator % 2n === 0n) {
      ratio.numerator /= 2n;
      ratio.denominator /= 2n;
    }
    if (ratio.numerator % 5n === 0n && ratio.denominator % 5n === 0n) {
      ratio.numerator /= 5n;
      ratio.denominator /= 5n;
    }
  }
  return ratio;
}

export default encrypt;
