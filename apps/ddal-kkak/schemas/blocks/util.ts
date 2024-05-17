import { isString } from "@ddal-kkak/shared/utils";
import { z } from "zod";

export const zodStringNumber = z.preprocess(
  (inputString) =>
    isString(inputString)
      ? parseInt(z.string().parse(inputString))
      : inputString,
  z.number().min(0),
);

const hexColorRegex = /^#([0-9A-F]{3}|[0-9A-F]{6})$/i;
export const zodColor = z
  .string()
  .refine((val) => val === undefined || hexColorRegex.test(val), {
    message: "유효한 HEX 컬러 문자열이 아닙니다.",
  });
