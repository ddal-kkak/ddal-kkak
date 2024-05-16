import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};

export const isString = (value: unknown): value is string =>
  typeof value === "string";

export const isNumber = (value: unknown): value is number =>
  typeof value === "number";

export const transformStringToNumber = (char: string | number) => {
  if (isString(char)) {
    const parsedNumber = parseInt(char);
    if (isNaN(parsedNumber)) {
      throw new Error(`'${char}'는 숫자로 변환할 수 없습니다.`);
    }
    return parsedNumber;
  } else if (isNumber(char)) {
    return char;
  } else {
    throw new Error(
      `'${char}'는 유효한 타입이 아닙니다. 문자열이나 숫자여야 합니다.`,
    );
  }
};
