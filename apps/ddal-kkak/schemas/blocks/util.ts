import { isNumber, isString } from "@ddal-kkak/shared/utils";
import { z } from "zod";

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

export const zodStringNumber = z.preprocess(
  (char) => transformStringToNumber(char as string),
  z.number(),
);

const hexColorRegex = /^#([0-9A-F]{3}|[0-9A-F]{6})$/i;
export const zodColor = z
  .string()
  .optional()
  .refine((val) => val === undefined || hexColorRegex.test(val), {
    message: "유효한 HEX 컬러 문자열이 아닙니다.",
  });
