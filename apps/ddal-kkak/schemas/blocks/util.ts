import { transformStringToNumber } from "@ddal-kkak/shared/utils";
import { z } from "zod";

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
