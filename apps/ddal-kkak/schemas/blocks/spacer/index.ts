import { z } from "zod";
import { transformStringToNumber } from "@ddal-kkak/shared/utils";

const hexColorRegex = /^#([0-9A-F]{3}|[0-9A-F]{6})$/i;

export const SpacerBlockSchema = z.object({
  name: z.literal("SpacerBlock"),
  data: z.object({
    blockStyle: z
      .object({
        height: z.preprocess(
          (char) => transformStringToNumber(char as string),
          z.number().optional(),
        ),
        backgroundColor: z
          .string()
          .optional()
          .refine((val) => val === undefined || hexColorRegex.test(val), {
            message: "유효한 HEX 컬러 문자열이 아닙니다.",
          }),
      })
      .optional(),
  }),
});
